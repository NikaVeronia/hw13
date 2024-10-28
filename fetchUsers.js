// Импортируем node-fetch для Node.js (если используете Node.js)
const fetch = require('node-fetch');

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    users.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
  }
}

// Вызов функции для проверки
fetchUsers();

// Экспортируем функцию
module.exports = fetchUsers;