import { apikey, sequence_id, showBrowser } from "./config";
import { browser } from "@crawlora/browser";

export default async function ({
  searches, // data coming from textarea which means it is multiline
}: {
  searches: string;
}) {
  const formedData = searches.trim().split("\n").map(v => v.trim())

  await browser(async ({ page, wait, output, debug }) => {
    for await (const search of formedData) {
      const allProducts = []

      const url = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(search)}`;
      await page.goto(url, { waitUntil: 'domcontentloaded' });

      await wait(2)

      let hasNextPage = true;
      while (hasNextPage) {
        const products = await getProductsDetail(page);
        debug(`Found ${products.length} products.`);
        allProducts.push(...products)

        hasNextPage = await getNextButton(page, wait, debug);
        await wait(2)
      }
      await submitData(allProducts, search, output, debug);
      await wait(2)
    }
  }, { showBrowser, apikey }
  )
}

/**
 * Function to find and click the "Next" button.
 * Returns `true` if a next page exists, `false` otherwise.
 */
async function getNextButton(page: any, wait: any, debug: debug.Debugger): Promise<boolean> {
  const trElement = await page.$('tr');
  if (!trElement) {
    debug('No <tr> element found.');
    return false;
  }
  const nextButton = await trElement.$(':scope > td:last-child a');

  if (nextButton) {
    await nextButton.click();
    await wait(2);
    debug('Navigating to the next page...');
    return true;
  } else {
    debug('No more pages available.');
    return false;
  }
}


async function getProductsDetail(page: any) {
  return await page.evaluate(() => {
    const list = Array.from(document.querySelectorAll('.i0X6df')) || [];
    return list.map(product => ({
      productName: product.querySelector('h3')?.textContent?.trim() || 'N/A',
      productURL: (product.querySelector('a.xCpuod') as HTMLAnchorElement)?.href?.trim() || 'N/A',
      rating: product.querySelector('.NzUzee span')?.childNodes[0]?.textContent?.trim() || 'N/A',
      reviewCount: product.querySelector('.NzUzee span')?.childNodes[2]?.textContent?.trim() || 'N/A',
      price: product.querySelector('span.a8Pemb')?.textContent?.trim() || 'N/A',
      productSourceURL: (product.querySelector('div.mnIHsc a') as HTMLAnchorElement)?.href.trim() || 'N/A',
      productImage: product.querySelector('img')?.src.trim() || 'N/A',
      store: product.querySelector('div.aULzUe')?.textContent?.trim() || 'N/A',
    }));
  });
}

async function submitData(
  allProducts: Record<string, string | number>[],
  keyword: string,
  output: any,
  debug: debug.Debugger
) {
  await Promise.all(
    allProducts.map(async (data, index) => {
      await output.create({
        sequence_id,
        sequence_output: {
          Keyword: keyword,
          ProductName: data.productName,
          ProductURL: data.productURL,
          Rating: data.rating,
          ReviewCount: data.reviewCount,
          Price: data.price,
          ProductSourceURL: data.productSourceURL,
          ProductImage: data.productImage,
          Store: data.store,
          ResultNumber: index + 1,
        },
      });
    })
  );
  debug("Data submitted successfully.");
}