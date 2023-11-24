// import { token } from "./api.js";
import { token } from "./api.js";
import { activeLike, dateFormat } from "./helper.js";
import { answerComment, likeListeners } from "./listeners.js";
import { renderLogin } from "./loginPage.js";

// const commentsElement = document.querySelector(".comments");
const formElement = document.querySelector(".form")

export const renderList = ({ commentsArray }) => {
  const appElement = document.getElementById("app")
    const commentsHtml = commentsArray.map((comment, index) => {
 
      return `<li class="comment">
        <div class="comment-header">
          <div class="comment-name" data-index="${index}">${comment.author.name}</div>
          <div>${dateFormat(new Date(comment.date))}</div>
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
  
  const commentInputElement = document.querySelector(".add-form-text");
  const buttonInputElement = document.querySelector(".add-form-button");
  const buttonLogin = document.querySelector(".authorization-button");
  const blockAuthorization = document.querySelector(".authorization")

  function actionForm () { 
    if (!token)
    return
    const nameInputElement = document.querySelector(".add-form-name");
    nameInputElement.value = window.localStorage.getItem("userName");
    nameInputElement.disabled = true;
  }

  actionForm();
  // token ? blockAuthorization.classList.add('hidden') : formInputElement.classList.add('hidden');
  // console.log(nameInputElement)
  


  if (!token){
    buttonLogin.addEventListener('click', () => renderLogin({ renderList }));
  }
  
  // commentInputElement.addEventListener("keyup", enterListener)
 


    likeListeners();
    answerComment();
  };
  
  