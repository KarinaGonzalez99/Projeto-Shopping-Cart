import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const produtos = await fetchProductsList('computador');
const listagem = document.querySelector('.products'); // não consegui chamar por getElementsByClassName

let itens; // variável indefinida
const products = () => {
  produtos.forEach((produto) => { // para cada parametro da função fetch vai ser analisado e percorrido os itens sendo assim colocados dentro do section
    itens = createProductElement(produto);

    listagem.appendChild(itens);
  });
};

products();
