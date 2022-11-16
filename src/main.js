import { searchCep } from './helpers/cepFunctions';
import './style.css'; // iniciando projeto

document.querySelector('.cep-button').addEventListener('click', searchCep);
