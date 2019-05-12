//ЗАДАЧА 3

'use strict';

const country = prompt('Укажите страну доставки');

const delPriceChina = 100;

const delPriceSouthAmerica = 250;

const delPriceAustralia = 170;

const delPriceIndia = 80;

const delPriceJamaica = 120;

if (country === null) {
  console.log('Выбор отменен пользователем!');
} else {
  switch (country.toLowerCase()) {
    case 'китай':
      console.log(
        `Доставка в ${country} будет стоить ${delPriceChina} кредитов`,
      );
      break;

    case 'южная америка':
      console.log(
        `Доставка в ${country} будет стоить ${delPriceSouthAmerica} кредитов`,
      );
      break;

    case 'австралия':
      console.log(
        `Доставка в ${country} будет стоить ${delPriceAustralia} кредитов`,
      );
      break;

    case 'индия':
      console.log(
        `Доставка в ${country} будет стоить ${delPriceIndia} кредитов`,
      );
      break;

    case 'ямайка':
      console.log(
        `Доставка в ${country} будет стоить ${delPriceJamaica} кредитов`,
      );
      break;

    default:
      console.log('В вашей стране доставка не доступна');
  }
}
