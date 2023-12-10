import { commentsArray} from "./script.js";
import { loginAuthorization, setToken } from "./api.js";
import { renderRegistration } from "./registrationForm.js";

export const renderLogin = ({renderList}) => {
    const appElement = document.getElementById("app");
    const loginHtml = `<div class="container">  
    <div class="add-form">
      <h1> Форма входа </h1>
      <input type="text" class="add-form-text login-name-input" placeholder="Введите ваше имя"/>
      <input type="text" class="add-form-text password-input" placeholder="Введите пароль"/>
      <div class="add-form-row">
      <button class="add-form-button authorization-form">Войти</button>
      </div>
      <a class="login_page-link" href="#">Зарегистрироваться</a>
    </div>
  </div>`
  appElement.innerHTML = loginHtml;

  const linkRegister = document.querySelector(".login_page-link");
  linkRegister.addEventListener("click", () => renderRegistration());

  const buttonElementLogin = document.querySelector(".authorization-form");
  const loginInputElement = document.querySelector(".login-name-input");
  const passwordInputElement = document.querySelector(".password-input");

  buttonElementLogin.addEventListener("click", () => {
    loginAuthorization({
        login: loginInputElement.value,
        password: passwordInputElement.value,
    })
        .then((response) => {
          console.log(response)
            setToken(response.user.token);
            window.localStorage.setItem("userName",response.user.login);
        })
        .then (() => {
          
            renderList({commentsArray});
        })
        .catch((error) => {
            console.warn(error)
        })
  });
}