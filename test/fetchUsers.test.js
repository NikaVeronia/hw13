// Подключаем необходимые библиотеки
const { expect } = require('chai');
const sinon = require('sinon');
const fetch = require('node-fetch');
const { Response } = require('node-fetch');
const fetchUsers = require('../fetchUsers'); // Подключаем саму функцию

describe('fetchUsers', () => {
  let consoleLogStub;
  let fetchStub;

  beforeEach(async () => {
    // Создаем заглушку для console.log
    consoleLogStub = sinon.stub(console, 'log');

// Делаем запрос к API для получения реальных данных
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const usersFromApi = await response.json();

 // Создаем заглушку для fetch и задаем ответ с реальными данными
fetchStub = sinon.stub(fetch, 'default');
fetchStub.resolves(new Response(JSON.stringify(usersFromApi)));
});

  afterEach(() => {
    // Восстанавливаем оригинальные функции
    consoleLogStub.restore();
    fetchStub.restore();
  });

  it('должен выводить имена всех пользователей в консоль', async () => {
    await fetchUsers();
  
      // Убедимся, что console.log вызван столько раз, сколько пользователей
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const expectedUsers = await response.json();
      expect(consoleLogStub.callCount).to.equal(20);
  
     // Проверяем, что console.log вызван с правильными именами пользователей
     expectedUsers.forEach((user, index) => {
        expect(consoleLogStub.getCall(index).args[0]).to.equal(user.name);
      });
    });
  });
