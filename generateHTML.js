'use strict';
import { users } from './listeners.js'

function createCard(name, lastname, gender, age) {
  return `<div class="card">
    <h4>${name}</h4>
    <p>${lastname}</p>
    <p>${gender}</p>
    <p>${age}</p>
  </div>`
}

export function filterByGender (usuarios) {
  const filtrados = usuarios.filter((user) => user.gender === 'M')
  return createUsers(filtrados)
}

export default function createUsers(usuarios) {
  return usuarios.map((user) => {
    const {name, lastname, gender, age} = user;
    return createCard(name,lastname, gender, age);
  }).join('');
}