

export function dateFormat(date) {
   
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
 

  // Функия для закрашивания лайка в зависимости от значения activeLike
 export const activeLike = (comment) => {
    if (comment.isLiked === true) {
      return '-active-like'
    } 
};