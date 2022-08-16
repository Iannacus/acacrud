'use strict';

import createUsers, { filterByGender } from './generateHTML.js';


const area = document.querySelector('.grilla');
const filtro = document.querySelector('input[value="filtrar por genero h"]');
const showAll = document.querySelector('input[value="mostrar todos"]');
const formulario = document.querySelector('#data');

console.log(filtro);
let users = []

export default function events() {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.children)
    const datos = [...e.target.children];
    const filtrados = datos.filter(element => element.value !== '').map(e => e.value);
    users.push({name: filtrados[0], lastname: filtrados[1], gender: filtrados[2], age: filtrados[3]});
    console.log(users);
    formulario.reset();
    area.innerHTML = createUsers(users);
  });

  filtro.addEventListener('click', () => {
    area.innerHTML = filterByGender(users)
  })

  showAll.addEventListener('click', () => {
    area.innerHTML = createUsers(users);
  })
}

export {users};
