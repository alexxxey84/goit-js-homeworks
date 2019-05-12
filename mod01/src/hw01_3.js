//ЗАДАЧА 3

'use strict';

let country = prompt('Укажите страну доставки');

let deliveryPrice;

let message;

if (country === null) {
  message = 'Выбор отменен пользователем!';
} else {
  switch (country.toLowerCase()) {
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
}

console.log(message);
