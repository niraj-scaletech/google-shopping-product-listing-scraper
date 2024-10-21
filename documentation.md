# Google Shopping Product Listing Scraper

## Overview

The **Google Shopping Product Listing Scraper** automates the extraction of data from [Google Shopping](https://shopping.google.com). It collects detailed information such as product names, prices, ratings, reviews, and more. This tool is ideal for **lead generation, research, or business analysis**.

---

## **Extracted Data Fields**

| **Field**             | **Description**                                   |
|-----------------------|---------------------------------------------------|
| **Keyword**           | The query keyword used for the search.            |
| **ProductName**       | The name of the product from the listing.         |
| **ProductURL**        | URL of the product detail page.                   |
| **Rating**            | Average product rating (if available).            |
| **ReviewCount**       | Total number of product reviews.                  |
| **Price**             | The price of the product (if listed).             |
| **ProductSourceURL**  | URL of the seller or store.                       |
| **ProductImage**      | Image URL of the product.                         |
| **Store**             | Name of the store or seller.                      |
| **ResultNumber**      | Index of the result (for tracking purposes).      |

---

## Input Parameters

- **Keywords**:  
  A list of search queries (one per line) to search for product on Google shopping.  
  **Example**:  
  ```
  apple
  slider
  ```

---

## How to Use

1. **Step 1**: Click `Try it!`
2. **Step 2**: Enter your keywords (one per line) in the input field.  
   **Example**:  
   ```
    apple
    slider
   ```
3. **Step 3**: Click the `Submit` button to start the scraping process.
4. **Step 4**: View the results in the output section once scraping is complete.

---

## Sample Data Preview

| **ProductName**                         | **Price**   | **Rating** | **ReviewCount** | **ProductURL** | **ProductImage** | **Store**    | **Keyword** | **ResultNumber** | **ProductSourceURL** |
|-----------------------------------------|-------------|------------|-----------------|----------------|------------------|--------------|-------------|------------------|----------------------|
| Apple iPhone 16 - 128 GB - White        | ₹79,900.00  | 4.5        | 1,200           | [View](#)      | [Image](#)       | Amazon.in    | apple       | 1                | [View](#)            | 
| Apple iPhone 16 Plus (128GB Teal)       | ₹89,900.00  | 4.3        | 900             | [View](#)      | [Image](#)       | Big C Mobiles| apple       | 2                | [View](#)            |
| Apple iPhone 15  - 128 GB - Yellow      | ₹36,999.00  | 4.6        | 320             | [View](#)      | [Image](#)       | Grest        | apple       | 3                | [View](#)            |


## Notes

Please contact our support team if you have any questions about this template or if you would like to have a customized version.

## Is scraping google shopping site legal?

Web scraping is generally legal if you scrape publicly available non-personal data. However, the legality of what you do with the data is another question. Documentation, help articles, or blogs are typically protected by copyright, so you cannot republish the content without the owner's permission. Learn more about the legality of web scraping in this [article](#). If you're not sure, please seek professional legal advice.

