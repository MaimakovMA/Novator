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
