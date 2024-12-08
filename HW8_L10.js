/*Task:
Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої)

Приклад виконання:

Повинен знаходити: Wonderful, Joyful

Не повинен знаходити: Happiness, Time, Task, Apple  */

var str = "Wonderful Happiness Joyful Time Task Apple";
var re = /\b[^Aa\s]{6,}\b/g; 

var res = str.match(re);
console.log(res);