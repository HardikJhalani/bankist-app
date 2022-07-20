"use strict"

//********* The map method *********

const movements = [1000, 2000, -1000, 5000, 12000, -3000, 10000, 32000, -9000]
const eurToUsd = 1.1;

const movementsInUSD = movements.map(movement => (movement * eurToUsd).toFixed())
console.log(movementsInUSD);

const messageArray = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`)

console.log(messageArray);