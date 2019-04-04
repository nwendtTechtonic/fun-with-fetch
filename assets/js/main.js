const baseUrl = 'https://virtserver.swaggerhub.com/bgoers/comment-board/1.0.0';
document.getElementById('fetch-btn').addEventListener('click', fetchComments)

// (function fetchComments(event) {
//   fetch(`https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/`)
//   .then(res => res.json())
//   // .then(data => console.log(data))
//   .then(data => appendHTML(data));
//
//   setTimeout(fetchComments, 5000)
// })();

function fetchComments(event) {
  fetch(`https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/`)
  .then(res => res.json())
  .then(data => appendComments(data));
}

function appendComments(data) {
  let container = document.getElementById('comment-container');

  for (var i = 0; i < data.length; i++) {
    let li = document.createElement('li');
    li.innerText = data[i].comment;
    container.append(li);
  }
}

// create feature to post Comments

// create function to find and display comments from specific author

// create function to delete all comments from a specific author

// create function to loop through all comments from specific author in search of a keyword
