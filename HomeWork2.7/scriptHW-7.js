// Задание 1
// Преобразуйте строку js в верхний регистр JS.

let str = 'js';
console.log(str.toUpperCase())

// Создайте функцию, которая в качестве параметров принимает массив строк и строку.
// Возвращать данная функция должна новый массив, содержащий только те элементы
// переданного массива, которые начинаются с переданной строки. 
// Регистр символов не должен влиять.
// Пример вызова
// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

function searchStart(arr, start) {

const search = start.toLowerCase()
return arr.filter((str) => str.toLowerCase().includes(search))
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'))


// Задание 3
// Округлите число 32.58884:

// До меньшего целого
// До большего целого
// До ближайшего целого

let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел
// наименьшее и наибольшее числа и вывести их в консоль.

const arr = [ 52, 53, 49, 77, 21, 32 ]

console.log(Math.max(...arr));
console.log(Math.min(...arr));


// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandomInt(minValue, maxValue) {
    return Math.random() * maxValue;
}
console.log(getRandomInt(0, 10))

// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив 
// случайных целых чисел от 0 до переданного числа. 
// Длина массива должна быть в 2 раза меньше переданного числа.
// Пример вызова функции
// getRandomArrNumbers(7);  [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
// getRandomArrNumbers(12); [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

function getRandomArrNumbers(n) {
    let result = [];
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result.push(Math.floor(Math.random() * (n + 1)))
    }
    return result
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, а в качестве
// результата возвращает случайное целое число в этом диапазоне.

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log(randomInteger(5, 20));

// Задание 8
// Выведите в консоль текущую дату в стандартном режиме.
// Используйте один из трех рассмотренных в уроке способов.

let myData = new Date('09/03/2023');
console.log(myData);

// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. 
// Выведите дату, которая наступит через 73 дня после текущей.
// Подсказка
// Решить эту задачу вам помогут 2 метода даты: 
// getDate() и setDate(), один из методов должен быть передан в качестве параметра второму.



let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);



// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:

// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.

// Время: <часы>:<минуты>:<секунды>

// Время, которое будет выведено, также хранится в объекте Date.


let myDate = new Date();

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let second = date.getSeconds();
    if (second < 10) {second = `0` + second}
    let minutes = date.getMinutes();
    if (minutes < 10) {minutes = `0` + minutes}
    let hours = date.getHours();
    if (hours < 10) {hours = `0` + hours}

    let dateFormat = "Дата:" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " " + days[date.getDay()];

    return dateFormat;
    
}

console.log(formatDate(myDate))


// Задание 11 
// Дан массив слов: 
// ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'].

// Необходимо перемешать элементы массива и вывести на экран пользователю с использованием 
// alert();

// Спросить у пользователя:
// Чему равнялся первый элемент массива?
// Чему равнялся последний элемент массива?
// Поздравить пользователя, если он угадал оба элемента.
// Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
// Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.

function guessWord() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let firstQuestion = prompt("Чему равнялся первый элемент массива?");
    let secondQuestion = prompt("Чему равнялся последний элемент массива?");
    for (let i = 0; i < fruits.length; i++) {
        if (firstQuestion === "" || firstQuestion === " " || firstQuestion === null || 
        secondQuestion === "" || secondQuestion === " " || secondQuestion === null) {
            alert('Не верный элемент');
        } if (fruits[0].toUpperCase().includes(firstQuestion.toUpperCase()) && fruits[fruits.length - 1].toUpperCase().includes(secondQuestion.toUpperCase())) {
          alert("Поздравляю, ты молодец!")
        } if (fruits[0].toUpperCase().includes(firstQuestion.toUpperCase()) || fruits[fruits.length - 1].toUpperCase().includes(secondQuestion.toUpperCase())) {
            alert("Вы были близки к победе!");
        } else {
            alert("Вы ответили неверно");
        }
        break
    }
}

guessWord()