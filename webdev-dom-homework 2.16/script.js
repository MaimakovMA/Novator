import { getTodos, postTodo } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { renderList } from "./renderList.js";

// "use strict";


const loaderListElement = document.querySelector('.loader_list');
const loaderFormElement = document.querySelector('.loader_form');

//  Создаем массив данных данных с комментариями

 export let commentsArray = [];

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

renderLogin({renderList});

// Создем рендер списка на основе массива 
// Переместил в renderList.js
const commentInputElement = document.querySelector(".add-form-text");
const formInputElement = document.querySelector(".add-form");
const nameInputElement = document.querySelector(".add-form-name");
const buttonInputElement = document.querySelector(".add-form-button");
 // Enter на кнопку "Написать"
  export const enterListener = commentInputElement.addEventListener("keyup", () => {
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
   
   
  //  commentsArray.push({
  //   name: nameInputElement.value
  //   .replaceAll("&", "&amp;")
  //   .replaceAll("<", "&lt;")
  //   .replaceAll(">", "&gt;")
  //   .replaceAll('"', "&quot;"),
  //   text: commentInputElement.value
  //   .replaceAll("&", "&amp;")
  //   .replaceAll("<", "&lt;")
  //   .replaceAll(">", "&gt;")
  //   .replaceAll('"', "&quot;"),
  //   likes: 0,
  //  });


 //  Отправляем новый объект на сервер
//  formInputElement.classList.add("hidden");
 loaderFormElement.textContent = "Комментарий добавляется...";

 postTodo({ 
  name:nameInputElement.value, 
  text:commentInputElement.value
 }).then(() => {
   return fetchPromise()
 })
 .then (() => {
   loaderFormElement.textContent = ""; 
  //  formInputElement.classList.remove("hidden");
   //Очищаем форму от последнего комментария 
   nameInputElement.value = '';
   commentInputElement.value = '';   
 })
 .catch((error) => {
  // formInputElement.classList.remove("hidden");
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

//  document.querySelector('.delete-comment-button').addEventListener("click", () => {
//    let lastList = document.querySelector('li:last-child');
//    lastList.remove();
//  }); 

 fetchPromise();
 
//  renderList({commentsArray});

 // Код писать здесь!
 console.log("It works!");