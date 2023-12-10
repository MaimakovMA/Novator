// Задание 1

function min(a, b) {
    if (a < b) {
        return a;
        
    } else {
        return b;                
    }
}

let minNum = min(10, 5 );

console.log(`Минимальное число ${minNum}`)

// Или


// function min(a, b) {
//     return a < b ? a : b;
//   }

//   let minNum = min(10, 5 );

//   console.log(`Минимальное число ${minNum}`)
  

// Задание 2


function even_or_odd(number) {
    if (number % 2 === 0) {
        return "Чётное"
        
    } else {
        return "Нечетное"        
    }    
}
let result = even_or_odd (6);
console.log(`${result}`)


// Или

// function even_or_odd(number) {
//     return number % 2 === 0 ? "Чётное" : "Нечетное"
// }

// let result = even_or_odd (6);
// console.log(`${result}`)




// Задание 3
// 3.1.

function squareNum(i) {
    console.log(i ** 2)
}
squareNum(5)



// // 3.2. 

function squareNumber(number) {
    return number ** 2
}

console.log(squareNumber(2))



// Задание 4


function getUserAge() {
    let age = prompt('Сколько Вам лет');

    if (Number.isNaN(age) || age === "" || age === " " || age === null) {
        return "Это похоже не является числом"
        
    } else if (age < 0) {
        return "Вы ввели неправильное значение"        
    }
    else if (age <= 12) {
        return "Привет, друг!"
    }
    else if (age >= 13) {
        return "Добро пожаловать!"
    }    
}
console.log(getUserAge());


// Задание 5


    function isNumber(num1, num2) {
            return isNaN(Number(num1)) || isNaN(Number(num2))  ? 'Одно или оба значения не являются числом' : num1 * num2;
        };    
            
        console.log(isNumber(5, 10));
        console.log(isNumber(NaN, NaN));



      
// Задание 6


function AskNumber() {
    const answerNumber = prompt ('Введите число');
    
    if (isNaN(answerNumber) || answerNumber === "" || answerNumber === " " || answerNumber === null) {
        console.log('Переданный параметр не является числом') ;
        
    } else {
        console.log(`${answerNumber} в кубе равняется ${answerNumber ** 3}`); 
        
    }
}

AskNumber()



// Задание 7


function getAreaCircle() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeterCircle() {
    return Math.PI * 2 * this.radius;
}

const circle1 = {
    radius: 15,

    getArea: getAreaCircle,
    getPerimeter: getPerimeterCircle,
}

const circle2 = {
    radius: 20,

    getArea: getAreaCircle,
    getPerimeter: getPerimeterCircle,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// Задание 8. 

function Season() {
    let monthNumber = Number(prompt('Введите номер месяца'));
        if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
            console.log('Зима');
        } else if (monthNumber >= 3 && monthNumber <= 5) {
            console.log('Весна');
        } else if (monthNumber >= 6 && monthNumber <= 8) {
            console.log('Лето');
        } else if (monthNumber >= 9 && monthNumber <= 11) {
            console.log('Осень');
        } else {
            console.log('Такого месяца не существует');
        }
    }
    
Season()