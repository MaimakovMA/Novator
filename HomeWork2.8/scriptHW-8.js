// Задание 1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));


// Задание 2

function isPositive(filter) {

if (filter > 0) //Проверка на значения
  return true;
}
function isMale(filter) {
  if (filter.gender === 'male')// Проверка элемента на значения
  return true;
}
function filter(arr, ruleFunction) {
let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
     output.push(arr[i]);
    }
  }  
  return output
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]



// Задание 3

let myData = new Date();
let interval = setInterval(() => console.log(new Date), 1000);
setTimeout(() => {clearInterval(interval); console.log('30 секунд прошло')}, 30000)


// Задание 4

function delayForSeconds(callback) {
	 setTimeout(callback, 1000);
}

delayForSeconds(function () {
   console.log('Привет, Глеб!');
})

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));