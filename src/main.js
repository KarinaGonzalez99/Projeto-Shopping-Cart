import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

// const produtos = await fetchProductsList('computador'); // chamei lá embaixo
const listagem = document.querySelector('.products'); // não consegui chamar por getElementsByClassName
const carrinhoo = document.querySelector('.cart__products'); // chamei denovo por conta que o dentro do try não puxa
const storage = getSavedCartIDs();

const loadingPagina = () => { // carregamento da tela
  const wait = document.createElement('p'); // criado elemento paragrafo
  wait.innerHTML = 'carregando...'; // dentro do paragrafo carregando
  wait.className = 'loading'; // classe do parragrafo carregando
  listagem.appendChild(wait); // wait é um filho da listagem ou seja, da selection q está no index
};

const erroAPI = () => { // mesma coisa se aplica aqui, so que agora com texto contido erro
  const error = document.createElement('p');
  error.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  error.className = 'error';
  listagem.appendChild(error);
};

const showProdutcts = async () => {
  loadingPagina(); // foi chamado a tela de carregamento
  try { // utilizado try por conta de exceções e erros
    const produtos = await fetchProductsList('computador'); // troquei a localização, por receio de não pegar por estar do lado de fora do try
    listagem.innerHTML = ''; // chamei um 'texto'
    produtos.forEach((produto) => { // puxei a função que tinha criado pro requisito 3, e coloquei ela aqui
      const itens = createProductElement(produto);
      listagem.appendChild(itens);
    });
  } catch (err) { // utilizado como consequencia do try
    listagem.innerHTML = ''; // chamei o texto
    erroAPI(); // chamei a tela de erro
  }

  const botaum = document.querySelectorAll('.product__add'); // chamando linha 121
  const carrinho = document.querySelector('.cart__products'); // porque dois __? :( linha 30

  botaum.forEach((item) => item.addEventListener('click', async (index) => { // evento de click
    const i = index.target.parentElement.children[0].innerText; // parametro que dá endereço e localização em hirarquia de seus elementos
    saveCartID(i); // importada
    const product = await fetchProduct(i); // chamando assincronicamente a função
    carrinho.appendChild(createCartProductElement(product)); // colocando como filho
  }));
};
showProdutcts(); // chamei a função pra ela executar

const funcoesStorage = async () => { // chamei função pra salvar o local storage
  const itensCarrinho = storage.sort((param2) => fetchProduct(param2)); // substitui o array interno
  const itensSalvos = await Promise.all(itensCarrinho); // esperando resolver todas as promises pra essa rodar e salvar dps
  itensSalvos.forEach((i) => carrinhoo.appendChild(createCartProductElement(i))); // para cada item
};
funcoesStorage();
/* let itens; // variável indefinida
const products = () => {
  produtos.forEach((produto) => { // para cada parametro da função fetch vai ser analisado e percorrido os itens sendo assim colocados dentro do section
  const itens = createProductElement(produto);

    listagem.appendChild(itens);
  });
};
products(); */
