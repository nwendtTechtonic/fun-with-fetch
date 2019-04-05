fetchURL = `https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/`
document.getElementById('fetch-btn').addEventListener('click', fetchComments);
document.getElementById('submit-comment').addEventListener('click', postComment);

// (function fetchComments(event) {
//   fetch(`https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/`)
//   .then(res => res.json())
//   // .then(data => console.log(data))
//   .then(data => appendHTML(data));
//
//   setTimeout(fetchComments, 5000)
// })();

function fetchComments(event) {
  fetch(fetchURL)
  .then(res => res.json())
  .then(data => appendComments(data));
}

function appendComments(data) {
  let container = document.getElementById('comment-container');
  container.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'delete';

    li.innerText = data[i].comment;
    container.append(li);
    container.append(deleteBtn);

    deleteBtn.addEventListener('click', function(){
      deleteComment(data[i]._id);
    })
  }
  isolateName(data);
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

// create function to display a grid

// create a function to search every comment for specific keywords "A1" "B1" etc.

// create a function that hides/shows a class
