export const fetchProduct = async (param2) => {
  if (!param2) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/items/${param2}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
  const data = await response.json();
  return data.results;
};
