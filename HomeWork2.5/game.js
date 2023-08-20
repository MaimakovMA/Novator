function Season() {
    let monthNumber = Number(prompt('Введите номер месяца'));
        if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
            alert('Зима');
        } else if (monthNumber >= 3 && monthNumber <= 5) {
            alert('Весна');
        } else if (monthNumber >= 6 && monthNumber <= 8) {
            alert('Лето');
        } else if (monthNumber >= 9 && monthNumber <= 11) {
            alert('Осень');
        } else {
            alert('Такого месяца не существует');
        }
    }
    
Season()