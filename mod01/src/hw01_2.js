//ЗАДАЧА 2

'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let input = prompt('Какое количество дроидов Вы желаете купить?');

const totalPrice = input * pricePerDroid;

if (input === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету');
} else {
  console.log(
    `Вы купили ${input} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
