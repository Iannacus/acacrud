'use strict';
import eventos, {users} from './listeners.js'

eventos();


console.log(parseInt('05', 16));

// tomar el hexadecimal
// partirlo en 3

const color = '#27c5cd';

const splited = color.split('');
const rgb = []

for(let i = 1; i<splited.length; i+=2) {
  const unit = `${splited[i]}${splited[i+1]}`;
  rgb.push(parseInt(unit, 16));
}

console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);