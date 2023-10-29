import { IMG_URL } from './api.js';
import { trataErro } from './codeError.js';
import { getRandomInt } from './getRandomInt.js';

export const capaFilme = document.querySelector('.capa-filme');
export const tituloFilme = document.querySelector('.titulo-filme');
export const descricaoFilme = document.querySelector('.descricao-filme');
export const infosFilme = document.getElementById('section-infos-filme');
const btnFilme = document.getElementById('btn-encontra-filme');

async function getContent() {
  try {
    const response = await fetch('http://localhost:3300/');

    const data = await response.json();
    exibeInfosFilmePopular(data);
  } 
  catch (error) {
    console.log(error)
    trataErro();
  }
}

function exibeInfosFilmePopular(filmes) {
  const idFilme = getRandomInt(0, filmes.results.length)
  console.log(idFilme);

  const urlCapaFilme = IMG_URL + filmes.results[idFilme].poster_path;
  capaFilme.src = urlCapaFilme;

  tituloFilme.innerHTML = filmes.results[idFilme].title;
  descricaoFilme.innerHTML = filmes.results[idFilme].overview;

  infosFilme.classList.remove("hidden");
  infosFilme.classList.add("flex");
}

btnFilme.addEventListener('click', () => {
  getContent();
});