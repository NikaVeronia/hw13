// fetchUsers.js
export async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    throw error;
  }
}
// Вызов функции для тестирования в браузере
 fetchUsers();