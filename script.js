'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ********** Simple array methods ***********

let arr = ['a', 'b', 'c', 'd', 'e'];

//* 1. slice() method --> array.slice( start, end );

//! slice() method can be used to make shallow copies of the array --> array.slice()
//! does not mutate( change ) the original array

console.log(arr.slice(1, 4)); // Array(3) [ "b", "c", "d" ]
console.log(arr.slice(-3, 3)); // Array [ "c" ]

//* 2. splice() method --> array.sp;ice( start, deletecount )

//! mutates( changes ) the original array

console.log(arr.splice(2, 2)); // Array [ "c", "d" ]
console.log(arr); // Array(3) [ "a", "b", "e" ]

//* 3. reverse() method --> array.reverse()

//! mutates( changes ) the original array

const arr2 = ['k', 'i', 'd', 'r', 'a', 'h'];
console.log(arr2.reverse()); // Array(6) [ "h", "a", "r", "d", "i", "k" ]

//* 4. concat() method --> array1.concat(array2);

const nameOne = ['h', 'a', 'r'];
const nameTwo = ['d', 'i', 'k'];

const fullName = nameOne.concat(nameTwo)
console.log(fullName); // Array(6) [ "h", "a", "r", "d", "i", "k" ]

//* 5 join() --> array.join( separator )

console.log(fullName.join('-')); // h-a-r-d-i-k