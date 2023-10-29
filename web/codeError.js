import * as main from './main.js'

export function trataErro() {
    main.capaFilme.src = 'poster.png';
    main.tituloFilme.innerHTML = "Ops, hoje não é dia de assistir filme.<br>Bora codar! 🚀";
    main.descricaoFilme.innerHTML = '';

    main.infosFilme.classList.remove("hidden");
    main.infosFilme.classList.add("flex");
}