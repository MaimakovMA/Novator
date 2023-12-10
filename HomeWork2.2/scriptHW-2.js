
// Задание 1

let a = 10;
alert ( a );
a = 20;
alert ( a );

// Задание 2

const year = 2007;
alert ( year )

// Задание 3

const name = "Brendan Eich";
alert ( name );

// Задание 4

let b = 10;
let c = 2;
alert ( b + c );
alert ( b - c );
alert ( b * c );
alert ( b / c );


// Задание 5

let d = 2;
let result = d**5;
alert ( result )

// Задание 6

let i = 9;
let f = 2;
alert ( i % f );


// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Задание 8

let age = prompt ( 'Сколько вам лет?' )
alert(age);

// Задание 9

const user = {
    name: 'Mikhail',
    age: '33',
    isAdmin: 'MA',    
}
user ['city of residence']='город'
user.age = 30
delete user ['city of residence']
const info = prompt ('Какую информацию хотите узнать о пользователе?')
alert ( user [info] )


// Задание 10

let yourName = prompt('Как Вас зовут?');
alert (`Привет, ${yourName} !`);

