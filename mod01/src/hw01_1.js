// ЗАДАЧА 1

'use strict';

const ADMIN_PASSWORD = 'm4ng0h4ckz';

const input = prompt('Введите пароль Админиcтратора');

let message;

if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (input === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
