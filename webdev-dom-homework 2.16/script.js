import { getTodos } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { renderList } from "./renderList.js";


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
  
fetchPromise();
 


 // Код писать здесь!
 console.log("It works!");