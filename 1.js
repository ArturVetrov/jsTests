/*Напишите программу, которая спрашивает у пользователя его имя и фамилию с помощью prompt и отвечает: 
Привет, {имя} {фамилия}! с помощью alert.*/

function getName() {
  let name = prompt("Ваше имя?");
  let surname = prompt("Ваша фамилия?");
  alert(`Привет, ${name} ${surname}!`);
}

getName();

/*Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту. 
Она должна спросить у пользователя количество градусов по Цельсию с помощью prompt и ответить: 
{X} градусов по Цельсию равны {Y} градусам по Фаренгейту. */

function tempExpense() {
  let temp = prompt("Количество градусов по Цельсию");
  const conv = (temp * 9/5) + 32;
  alert(`${temp} градусов по Цельсию равны ${conv} градусам по Фаренгейту`);
}

tempExpense();

/*Перепишите данную математическую формулу, используя JavaScript. 
Программа должна запрашивать с помощью prompt значение X и выдавать соответсвующее значение Y в качестве ответа. 
Обратите внимание на приоритет операций (важно правильно расставить скобки). */

function math() {
  let x = prompt();
  const calculation = (4 * x ** 2 + 18 - 23 * x) / ((5 / 9 * x) + 18 * (x ** 3 / 33 * x)) + x * (15 / 12);
  alert(calculation);
}

math();
