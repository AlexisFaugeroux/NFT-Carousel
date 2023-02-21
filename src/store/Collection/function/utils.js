// Create Unique Values
export function noDuplicateItems(value, index, self) {
    return self.indexOf(value) === index;
};

// Sort Price by Label value (Low or High)
export function sortPrice(collections, priceLabel) {
    switch (priceLabel) {
      case "Price low to high":
      collections.sort((a, b) => parseFloat(a.price_sol) - parseFloat(b.price_sol));
      break;
      case "Price high to low":
      collections.sort((a, b) => parseFloat(b.price_sol) - parseFloat(a.price_sol));
      break;
      default:
      collections.sort((a, b) => parseFloat(a.price_sol) - parseFloat(b.price_sol));
      break;
    };
};
