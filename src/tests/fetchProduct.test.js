import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProducts é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct("MLB1405519561");
    expect(fetch).toContainEqual();
  });
  it('fetchProduct sem argumento, retorna um erro com a mensagem', async () => {
    await expect(fetchProduct()).rejects.toThrow(new Error("ID não informado"));
});
});
