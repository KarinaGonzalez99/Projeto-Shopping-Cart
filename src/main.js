import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

// const produtos = await fetchProductsList('computador'); // chamei lá embaixo
const listagem = document.querySelector('.products'); // não consegui chamar por getElementsByClassName

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
};
showProdutcts(); // chamei a função pra ela executar

/* let itens; // variável indefinida
const products = () => {
  produtos.forEach((produto) => { // para cada parametro da função fetch vai ser analisado e percorrido os itens sendo assim colocados dentro do section
  const itens = createProductElement(produto);

    listagem.appendChild(itens);
  });
};
products(); */
