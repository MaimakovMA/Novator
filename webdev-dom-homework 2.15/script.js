import { getTodos, postTodo } from "./api.js";
import { renderList } from "./renderList.js";



// "use strict";

const formInputElement = document.querySelector(".add-form");
const nameInputElement = document.querySelector(".add-form-name");
const commentInputElement = document.querySelector(".add-form-text");
const buttonInputElement = document.querySelector(".add-form-button");
const loaderListElement = document.querySelector('.loader_list');
const loaderFormElement = document.querySelector('.loader_form');

//  Создаем массив данных данных с комментариями

 let commentsArray = [];

 // Запрос API
 loaderListElement.textContent = "Подождите, загружаю комментарии...";
 export const fetchPromise = () => {
   
 // С помощью метода then мы подписываемся на ответ сервера

 // .then((response) => response.json())

 getTodos().then ((response) => {
   loaderListElement.textContent = "";  
   commentsArray = response.comments
   renderList({commentsArray});   
 })
 
 .catch((error) => {
   loaderListElement.textContent = "";       
         
   if (error.message === "Ошибка на сервере") {
     alert("Сервер сломался, попробуй позже");
     return;
   }

   console.warn(error);
 }) 

 };  
 

// Создем рендер списка на основе массива 
// Переместил в renderList.js
 
 // Enter на кнопку "Написать"
   const enterListener = commentInputElement.addEventListener("keyup", () => {
   if (event.keyCode === 13) {
       buttonInputElement.click();
     }
   });

 
 // Функция после клика на кнопку "Написать"

 buttonInputElement.addEventListener("click", () => {
   //Проверка на пустые значения
   formInputElement.classList.remove("add__form_error");
   if (nameInputElement.value.trim() === '' || commentInputElement.value.trim() === '') {
     formInputElement.classList.add("add__form_error");
     return;
   };   

   

 //  Отправляем новый объект на сервер
 loaderFormElement.textContent = "Комментарий добавляется...";
 
 postTodo({ 
  name:nameInputElement.value, 
  text:commentInputElement.value
 }).then(() => {
   return fetchPromise()
 })
 .then (() => {
   loaderFormElement.textContent = ""; 
   //Очищаем форму от последнего комментария 
   nameInputElement.value = '';
   commentInputElement.value = '';   
 })
 .catch((error) => {
   loaderFormElement.textContent = "";
   if (error.message === "Имя должно содержать не менее 3 символов") {
     alert("Слишком короткое имя и комментарий должны быть не менее 3 символов");
     return;
   }

   if (error.message === "Ошибка на сервере") {
     alert("Сервер сломался, попробуй позже");
     return;
   }


   console.warn(error);
 }) 

});


 // Функция после клика на кнопку "Удалить"

 document.querySelector('.delete-comment-button').addEventListener("click", () => {
   let lastList = document.querySelector('li:last-child');
   lastList.remove();
 }); 

 fetchPromise();
//  renderList({commentsArray});


 // Код писать здесь!
 console.log("It works!");