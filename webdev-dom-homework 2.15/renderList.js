
const commentsElement = document.querySelector(".comments");

export const renderList = ({ commentsArray }) => {
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
 
    commentsElement.innerHTML = commentsHtml; 
    likeListeners();
    answerComment();
  };
  