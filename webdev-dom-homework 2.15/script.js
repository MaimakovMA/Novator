import { getTodos, postTodo } from "./api.js";
import { renderList } from "./renderList.js";


// "use strict";

const formInputElement = document.querySelector(".add-form");
const nameInputElement = document.querySelector(".add-form-name");
const commentInputElement = document.querySelector(".add-form-text");
const buttonInputElement = document.querySelector(".add-form-button");
const loaderListElement = document.querySelector('.loader_list');
const loaderFormElement = document.querySelector('.loader_form');


 // Получили дату
 
 function dateFormat(date) {
   
   let month = date.getMonth() + 1 ;
     if (month < 10) {
       month = "0" + month
     };

   let minutes = date.getMinutes()
   if (minutes < 10) {
       minutes = "0" + minutes
     };

     let day = date.getDate()
   if (day < 10) {
       day = "0" + day
     };

   return `${day}.${month}.${date.getFullYear() - 2000} ${date.getHours()}:${minutes}`;
 };


//  Создаем массив данных данных с комментариями

 let commentsArray = [];

 // Запрос API
 loaderListElement.textContent = "Подождите, загружаю комментарии...";
 const fetchPromise = () => {
   
 // С помощью метода then мы подписываемся на ответ сервера

 // .then((response) => response.json())

 getTodos().then ((response) => {
   loaderListElement.textContent = "";  
   commentsArray = response.comments
   renderList();   
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
 
 // Функция при нажатии на лайк

 const likeListeners = () => {
   const likeElements = document.querySelectorAll(".like-button");
   for (let like of likeElements) {
     like.addEventListener("click", (event) => {
       event.stopPropagation();
       const index = like.dataset.index;
       if (commentsArray[index].isLiked === false) {
         commentsArray[index].isLiked = true;
         commentsArray[index].likes++;
       } else {
         commentsArray[index].isLiked = false;
         commentsArray[index].likes--;
       }
       renderList({ commentsArray });
     });
   }
 };

 // Функция ответа на комментарий
 const answerComment = () => {
     const commentTextElement = document.querySelectorAll('.comment-text');
     const commentNameElement = document.querySelectorAll('.comment-name');
     for (const comment of commentTextElement) {
       comment.addEventListener("click", () => {
         const index = comment.dataset.index;

         commentInputElement.value = 
         `>${commentTextElement[index].innerHTML} ${commentNameElement[index].innerHTML}`;
       })
     }
 };

 // Функия для закрашивания лайка в зависимости от значения activeLike
 const activeLike = (comment) => {
     if (comment.isLiked === true) {
       return '-active-like'
     } 
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
 renderList();

 // Код писать здесь!
 console.log("It works!");