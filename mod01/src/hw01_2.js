//ЗАДАЧА 2

'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let input = prompt('Какое количество дроидов Вы желаете купить?');

const totalPrice = input * pricePerDroid;

let message;

if (input === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету';
} else {
  message = `Вы купили ${input} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
}

console.log(message);
