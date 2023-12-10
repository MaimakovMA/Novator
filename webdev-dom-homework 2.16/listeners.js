// Функция при нажатии на лайк

import { renderList } from "./renderList.js";
import { commentsArray } from "./script.js";


export const likeListeners = () => {
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
  export const answerComment = () => {
      const commentInputElement = document.querySelector(".add-form-text");
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