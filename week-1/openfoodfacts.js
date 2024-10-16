export class OpenFoodFacts {
  constructor(productData) {
    this.productName = productData.product_name;
    this.brandOwner = productData.brand_owner;
    this.imageUrl = productData.image_url;
    this.code = productData.code;
  }

  getProductName() {
    return this.productName;
  }

  getBrandOwner() {
    return this.brandOwner;
  }

  getImageUrl() {
    return this.imageUrl;
  }

  getCode() {
    return this.code;
  }

  showProductSummary() {
    return `Product: ${this.productName} by ${this.brandOwner}. Code: ${this.code}. Image available at: ${this.imageUrl}`;
  }
}
