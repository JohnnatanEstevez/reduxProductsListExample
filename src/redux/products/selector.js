export const inactiveProductsSelector = ({ products }) =>
  products.filter(({ status }) => status === "inactive");

export const productsSelector = ({ products }) => products;
