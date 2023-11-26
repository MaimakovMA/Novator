import { getTodos } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { renderList } from "./renderList.js";

// "use strict";


const loaderListElement = document.querySelector('.loader_list');


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
// const formInputElement = document.querySelector(".add-form");
// const nameInputElement = document.querySelector(".add-form-name");
const buttonInputElement = document.querySelector(".add-form-button");
 // Enter на кнопку "Написать"
  export const enterListener = commentInputElement.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
      buttonInputElement.click();
    }
  });
  
 


//  // Функция после клика на кнопку "Удалить"

//  document.querySelector('.delete-comment-button').addEventListener("click", () => {
//    let lastList = document.querySelector('li:last-child');
//    lastList.remove();
//  }); 

 fetchPromise();
 
//  renderList({commentsArray});

 // Код писать здесь!
 console.log("It works!");