export const isAssetsSumIconShown = (products: {currency?: string}[]) => {
  const initialCurrency = products[0]?.currency;

  if (!initialCurrency) {
    return false;
  }

  return products.slice(1).every((product) => initialCurrency === product.currency);
};
