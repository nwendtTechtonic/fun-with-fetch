fetchURL = `https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/`;
document.getElementById('fetch-btn').addEventListener('click', fetchComments);
document.getElementById('submit-comment').addEventListener('click', postComment);

let container = document.getElementById('comment-container');

// (function fetchComments(event) {
//   fetch(`https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/`)
//   .then(res => res.json())
//   .then(data => appendHTML(data));
//
//    scrollToBottom(container);
//    setTimeout(fetchComments, 5000)
// })();

function fetchComments(event) {
  fetch(fetchURL)
  .then(res => res.json())
  .then(data => appendComments(data));
}

function appendComments(data) {
  container.innerHTML = '';
  for (let i = 0; i < data.length; i++) {

// ES6 Template String - can't get it to work with the event listener
    // const markup = `
    //   <div class="comment">
    //     <div class="inline-left"
    //       <p>${data[i].author}</p>
    //       <p>${data[i].comment}</p>
    //     </div>
    //     <div class="inline-right">
    //       <button class="deleteBtn${[i]}">X</button>
    //     </div>
    //   </div>
    // `;
    // container.innerHTML += markup;
    //
    // const deleteBtn = document.querySelector(`.deleteBtn${[i]}`);
    //
    // deleteBtn.addEventListener('click', function() {
    //   deleteComment(data[i]._id);
    // })

    let div = document.createElement('div');
    let p = document.createElement('p');
    let deleteBtn = document.createElement('button');
    let trashIcon = `<i class="far fa-trash-alt"></i>`;
    deleteBtn.innerHTML = trashIcon;
    deleteBtn.setAttribute('class', 'inline');
    div.setAttribute('class', 'message')

    p.innerText = data[i].comment;
    container.append(div);
    div.appendChild(p);
    div.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(){
      deleteComment(data[i]._id);
    })
  }
  scrollToBottom(container);
}

// create feature to post Comments
function postComment(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  let data = {name: name, comment: comment};

  resetTextField = () => document.getElementById('comment').value = '';

  fetch(fetchURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  }).then(res => res.json(), console.log(data))
  .then(resetTextField())
  .catch(error => console.log('Error', error))

  setTimeout(function(){ fetchComments(); }, 500);
  scrollToBottom(container);
}

// create function to find and display comments from specific author
function isolateName(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].author === "Nathaniel")
      console.log('yuppers')
  }
}

// create function to delete all comments from a specific author
function deleteComment(id) {
  return fetch(`${fetchURL}${id}`, {
    method: 'DELETE'
  }).then(function(response){
    fetchComments();
  });
}

function scrollToBottom(obj) {
  obj.scrollIntoView(false); // Bottom
}

// create function to display a grid

// create a function to search every comment for specific keywords "A1" "B1" etc.

// create a function that hides/shows a class
