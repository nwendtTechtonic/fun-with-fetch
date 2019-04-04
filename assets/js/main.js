const baseUrl = 'https://virtserver.swaggerhub.com/bgoers/comment-board/1.0.0';
document.getElementById('btn').addEventListener('click', fetchComments)

function fetchComments(event) {

  fetch(`https://us-central1-fir-cb-backend.cloudfunctions.net/api/comment/`)
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => appendHTML(data));
}


function appendHTML(data) {
  console.log(data);
  // console.log(data.length);
}
