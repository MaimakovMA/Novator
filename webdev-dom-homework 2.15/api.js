export function getTodos() {
    return fetch("https://wedev-api.sky.pro/api/v1/mikhail-maimakov/comments", {
   method: "GET"
 })

 .then((response) => {
 if (response.status === 500) {
   throw new Error("Ошибка на сервере")
 } else {
   return response.json();
 }
  })
}

export function postTodo( {text, name}) {
   return fetch("https://wedev-api.sky.pro/api/v1/mikhail-maimakov/comments", {
   method: "POST",
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