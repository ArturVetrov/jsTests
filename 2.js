/*Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, и Гипотенуза C. 
Программа проверяет по теореме Пифагора эти стороны треугольника и пишет в консоль 
"Это прямоугольный треугольник!" или "Это не прямоугольный треугольник!". Используйте if/else для проверки условия.*/

let a = Math.pow(prompt("Катет A"),2);
let b = Math.pow(prompt("Катет B"),2);
let c = Math.pow(prompt("Гипотенуза C"),2);


if (c == a + b) {
  alert("Это прямоугольный треугольник!");
} else {
 alert("Это не прямоугольный треугольник!");
}

/*Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них, 
используйте if/else/else if. Попытайтесь не использовать &&.*/

let first = prompt("Число 1");
let second = prompt("Число 2");
let third = prompt("Число 3");
let result;


if (first > second) {
  if (first > third) {
    result = first;
  }
} else if (second > third) {
  result = second;
} else result = third;

alert("Максимальное число " + result);

/*Напишите программу, которая запрашивает у пользователя число N и отвечает "Число {N} четное!" или "Число {N} нечетное!"*/

let number = prompt("Введите число");

if (number%2 == 0) {
  alert("Четное");
} else alert("Нечетное");
