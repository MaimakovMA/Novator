import { setToken, userRegistration } from "./api.js";
import { commentsArray} from "./script.js";
import { renderLogin } from "./loginPage.js";
import { renderList } from "./renderList.js";



export const renderRegistration = () => {
  const appElement = document.getElementById("app");
  const loginHTMLRegistr = `<div class="container">  
    <div class="add-form">
    <h1> Регистрация </h1>
      <input type="text" class="add-form-text login-name-input_registration" placeholder="Введите ваше имя"/>
      <input type="text" class="add-form-text login-input_registration" placeholder="Введите логин"/>
      <input type="text" class="add-form-text password-input_registration" placeholder="Введите пароль"/>
      <div class="add-form-row">
        <button class="add-form-button authorization-form_registration button_login-page">Зарегистрироваться</button>
      </div>
      <a class="login_page-link" href="#">Войти</a>
    </div>
  </div>`
  appElement.innerHTML = loginHTMLRegistr;

  const buttonRegistration = document.querySelector(".login_page-link")
  buttonRegistration.addEventListener("click", () => renderLogin({ renderList }));


  const buttonElementLogin = document.querySelector(".authorization-form_registration");
  const loginInputElement = document.querySelector(".login-name-input_registration");
  const loginElement = document.querySelector('.login-input_registration');
  const passwordInputElement = document.querySelector(".password-input_registration");

  buttonElementLogin.addEventListener("click", () => {
    userRegistration({
        name: loginInputElement.value,
        login: loginElement.value,
        password:passwordInputElement.value,
    })
        .then((response) => {          
            setToken(response.user.token);
            window.localStorage.setItem("userName", response.user.name);            
        })
        .then(() => {          
            renderList({ commentsArray });
        })
        .catch((error) => {
            console.warn(error)
        })
  })

}