// import { token } from "./api.js";
import { deleteTodo, postTodo, token } from "./api.js";
import { activeLike, dateFormat } from "./helper.js";
import { answerComment, likeListeners } from "./listeners.js";
import { renderLogin } from "./loginPage.js";
import { fetchPromise } from "./script.js";
import { format } from "date-fns"


// const commentsElement = document.querySelector(".comments");
// const formElement = document.querySelector(".form")

export const renderList = ({ commentsArray }) => {
  const appElement = document.getElementById("app")
    const commentsHtml = commentsArray.map((comment, index) => {
 
      return `<li class="comment">
        <div class="comment-header">
          <div class="comment-name" data-index="${index}">${comment.author.name}</div>
          <div>${format((new Date(comment.date)), 'yyyy-MM-dd hh.mm.ss')}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text" data-index="${index}">
            ${comment.text}
          </div>            
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button class="like-button ${activeLike(comment)}" data-index="${index}"></button>
          </div>
        </div>
      </li>`
    }).join('');

    // commentsElement.innerHTML = commentsHtml;
        
    const formHtml = `
    <div class="loader_form"></div>
    <div class="add-form">
      <input type="text" class="name-input add-form-name" placeholder="Введите ваше имя"/>
      <textarea type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4" ></textarea>
      <div class="add-form-row">
        <button class="add-form-button">Написать</button>
      </div>
        <button class="delete-comment-button">Удалить последний комментарий</button>
    </div>`

 const btnAuthHtml = `
 <div class="authorization">
      <p class="authorization-text">Чтобы добавить комментарий, <a class="authorization-button" href="#">Авторизуйтесь</a> </p>
    </div> `

    const appHtml = `
    <ul class="comments">
       ${commentsHtml}
    </ul>
    ${token ? formHtml : btnAuthHtml}    
        
  `


  appElement.innerHTML = appHtml;
  
  const formInputElement = document.querySelector(".add-form"); 
  
  const buttonInputElement = document.querySelector(".add-form-button");
  const buttonLogin = document.querySelector(".authorization-button");
  const blockAuthorization = document.querySelector(".authorization")

  function actionForm () { 
    if (!token)
    return
    const nameInputElement = document.querySelector(".add-form-name");
    const loaderFormElement = document.querySelector('.loader_form');
    const commentInputElement = document.querySelector(".add-form-text");
    nameInputElement.value = window.localStorage.getItem("userName");
    nameInputElement.disabled = true;

    
    // Функция после клика на кнопку "Написать"

 buttonInputElement.addEventListener("click", () => {
  //Проверка на пустые значения
  formInputElement.classList.remove("add__form_error");
  if (nameInputElement.value.trim() === '' || commentInputElement.value.trim() === '') {
    formInputElement.classList.add("add__form_error");
    return;
  };      

    
  commentsArray.push({
   name: nameInputElement.value
   .replaceAll("&", "&amp;")
   .replaceAll("<", "&lt;")
   .replaceAll(">", "&gt;")
   .replaceAll('"', "&quot;"),
   text: commentInputElement.value
   .replaceAll("&", "&amp;")
   .replaceAll("<", "&lt;")
   .replaceAll(">", "&gt;")
   .replaceAll('"', "&quot;"),
   likes: 0,
  });


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
})


// Enter на кнопку "Написать"
commentInputElement.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
      buttonInputElement.click();
    }
  });



  
// Функция после клика на кнопку "Удалить"

document.querySelector('.delete-comment-button').addEventListener("click", () => {
  const id = commentsArray[commentsArray.length-1].id
  deleteTodo({id}).then(() => fetchPromise())
}); 

likeListeners();
answerComment();

};

actionForm();

  // token ? blockAuthorization.classList.add('hidden') : formInputElement.classList.add('hidden');
  // console.log(nameInputElement)
  

  if (!token){
    buttonLogin.addEventListener('click', () => renderLogin({ renderList }));
  };
    
    
};
  
  