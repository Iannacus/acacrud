'use strict';

import createUsers, { filterByGender, deleteUser } from './generateHTML.js';


const area = document.querySelector('.grilla');
const filtro = document.querySelector('input[value="filtrar por genero h"]');
const showAll = document.querySelector('input[value="mostrar todos"]');
const formulario = document.querySelector('#data');



let users = [];
let isEditing = false;
let editIndex = 0;

function updateListeners() {
  const update = document.querySelectorAll('.edit');
  update.forEach((button, index) => {
    button.addEventListener('click', () => {
      isEditing = true;
      editIndex = index;
      const userData = users[index];
      const {name, lastname, gender, age} = userData;
      formulario.children[0].value = name;
      formulario.children[1].value = lastname;
      formulario.children[2].value = gender;
      formulario.children[3].value = age;
    })
  })
}

function deleteListeners() {
  const del = document.querySelectorAll('.delete');
  const deleteButton = [...del]
  deleteButton.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      deleteUser(index, users);
      area.innerHTML = createUsers(users);
      deleteListeners();
    })
  })
}

export default function events() {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = [...e.target.children];
    const filtrados = datos.filter(element => element.value !== '').map(e => e.value);
    if(isEditing) {
      users[editIndex].name = filtrados[0];
      users[editIndex].lastname = filtrados[1];
      users[editIndex].gender = filtrados[2];
      users[editIndex].age = filtrados[3];
    } else {
      users.push({
        name: filtrados[0],
        lastname: filtrados[1],
        gender: filtrados[2],
        age: filtrados[3],
      });
    }
    formulario.reset();
    area.innerHTML = createUsers(users);
    deleteListeners();
    updateListeners();
  });

  filtro.addEventListener('click', () => {
    area.innerHTML = filterByGender(users, 'M')
  })

  filtroF.addEventListener('click', () => {
    area.innerHTML = filterByGender(users, 'F');
  })

  showAll.addEventListener('click', () => {
    area.innerHTML = createUsers(users);
    deleteListeners();
  })
}

export {users};
