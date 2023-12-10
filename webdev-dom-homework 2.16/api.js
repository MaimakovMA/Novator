import { fetchPromise } from "./script.js";



const host = "https://wedev-api.sky.pro/api/v2/mikhail-maimakov/comments";
const userHost = "https://wedev-api.sky.pro/api/user/login";
const userHostReg =  "https://wedev-api.sky.pro/api/user";

export let token;
export const setToken = (newToken) => {
  token = newToken;
}

export function getTodos() {
    return fetch(host, {
   method: "GET",
   headers: {
    Authorization: `Bearer ${token}`
   }
 })
 .then((response) => {
 if (response.status === 500) {
   throw new Error("Ошибка на сервере")
 } else {
   return response.json();
 }
  })
}

export function postTodo( {text, name} ) {
   return fetch(host, {
   method: "POST",
   headers: {
    Authorization: `Bearer ${token}`
   },
   body: JSON.stringify({
         text: text,
         name: name,
         forceError: true,
       })
 })

 // Обновленный массив
 .then((response) => {
   // Проверяем статус 
   switch (response.status) {
     case 400:
       throw new Error("Имя должно содержать не менее 3 символов")
       break;
     case 500:
       throw new Error("Ошибка на сервере")
       break;
     default:
       return fetchPromise();        
   }
 })
}


// Логин и пароль

export function loginAuthorization({ login, password }) {
  return fetch(userHost, {
  method: "POST",
  body: JSON.stringify({
        login,
        password,
      })
})
.then((response) => {
  // Проверяем статус 
  switch (response.status) {
    case 400:
      throw new Error("Имя должно содержать не менее 3 символов")
      break;
    case 500:
      throw new Error("Ошибка на сервере")
      break;
    default:
      return response.json();        
   }
 })
}

// Регистрация

export function userRegistration({ login, name, password }) {
  return fetch(userHostReg, {
  method: "POST",
  body: JSON.stringify({
        name,
        login,
        password,
      })
})
.then((response) => {
  // Проверяем статус 
     
    if (response.status === 400) {
      alert("Ведите верныеданные")
      return
    }
    if (response.status === 500) {
      alert("Ошибка  на сервере")
      return
    }
    return response.json();
 })
}

export function deleteTodo( {id} ) {
  return fetch(`${host}/${id}`, {
  method: "DELETE",
  headers: {
   Authorization: `Bearer ${token}`
  },  
})

// Обновленный массив
.then((response) => {
  return (response)
  // Проверяем статус 
  
})
}