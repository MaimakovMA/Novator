// Задание 1

let password = 'число';
let enter = prompt ( 'Ведите пароль' );
if (enter === 'число') {
    console.log('Пароль введен верно');    
} else {
    console.log('Пароль введен неправильно');    
}

// Задание 2

let c = 10;
if ( c > 0 && c < 10 ) {
    console.log('Верно');
} else if ( c === 0 || c === 10) {
    console.log('Числа равны');
} else {
    console.log('Неверно');    
}

// Задание 3

let d = 15;
let e = 200;
if ( d > 100 || e > 100 ) {
    console.log('Верно');    
} else {
    console.log('Неверно');      
}


// Задание 4

let a = '2';
let b = '3';
alert (Number(a) + Number(b));

// Задание 5

let monthNumber = prompt ('Введите номер месяца');
switch (monthNumber) {
    case '1':       
    case '2':
    case '12':
      console.log('Зима')
      break;
    case '3':
    case '4':
    case '5':
      console.log('Весна')
      break;
    case '6':
    case '7':
    case '8':
      console.log('Лето')
      break;
    case '9':
    case '10':
    case '11':
      console.log('Осень')
      break;
    default:
      console.log('Номер введен неверно')
      break;
}

