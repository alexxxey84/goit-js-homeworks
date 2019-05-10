'use strict';

// ЗАДАЧА 1

// const ADMIN_PASSWORD = 'm4ng0h4ckz';

// const input = prompt('Введите пароль Админиcтратора');

// let message;

// if (input === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else if (input === null) {
//   message = 'Отменено пользователем!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// ЗАДАЧА 2

// const credits = 23580;

// const pricePerDroid = 3000;

// let input = prompt('Какое количество дроидов Вы желаете купить?');

// const totalPrice = input * pricePerDroid;

// const balance = credits - totalPrice;

// let message;

// if (input === null) {
//   message = 'Отменено пользователем!';
// } else if (totalPrice > credits) {
//   message = 'Недостаточно средств на счету';
// } else {
//   message = `Вы купили ${input} дроидов, на счету осталось ${balance} кредитов.`;
// }

// console.log(message);

// ЗАДАЧА 3

const input = prompt('Укажите страну доставки');

let deliveryPrice;

const country = input.toLowerCase();

let message;

switch (country) {
  case 'китай':
    deliveryPrice = 100;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'южная америка':
    deliveryPrice = 250;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'австралия':
    deliveryPrice = 170;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'индия':
    deliveryPrice = 80;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'ямайка':
    deliveryPrice = 120;
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  default:
    message = 'В вашей стране доставка не доступна';
}

console.log(message);
