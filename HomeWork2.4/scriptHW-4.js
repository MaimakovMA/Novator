// Задание 1

let hello = 0;

while ( hello < 2 ) {
    console.log("Привет!");
    hello++;    
}

// Задание 2

let i = 1;

while (i < 6) {
    console.log(i);
    i++
}

// Задание 3

let number = 7;

while (number < 23) {
    console.log(number);
    number++
}


// Задание 4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов`);    
}

// Задание 5



let n = 1000;
let num = 0;
while (n > 50) {
    num++
    n /=2
}
console.log(n);
console.log(num);


// Задание 6

for (let day = 6; day <= 31; day+=7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет`)
}
