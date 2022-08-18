'use strict';
import { users } from './listeners.js'

function createCard(name, lastname, gender, age) {
  return `<div class="card">
    <h4>${name}</h4>
    <p>${lastname}</p>
    <p>${gender}</p>
    <p>${age}</p>
    <div class="btn edit">Editar</div>
    <div class="btn delete">Borrar</div>
  </div>`
}

export function deleteUser(index, users) {
  console.log(index, users);
  users.splice(index, 1);
  console.log(users);
}

export function filterByGender (usuarios, filter) {
  const filtrados = usuarios.filter((user) => user.gender === filter)
  return createUsers(filtrados)
}

export default function createUsers(usuarios) {
  return usuarios.map((user) => {
    const {name, lastname, gender, age, id} = user;
    return createCard(name,lastname, gender, age);
  }).join('');
}