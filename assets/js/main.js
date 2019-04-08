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
  stringContains(data);
}

// function to post a comment using fetch
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
  }).then(res => res.json()) // can ".json(), console.log(data)" here
  .then(resetTextField())
  .catch(error => console.log('Error', error))

  setTimeout(function(){ fetchComments(); }, 500); // added to give post time to complete before refreshing
  scrollToBottom(container);
}

// function to find comments from specific author
function stringContains(data) {
  for (let i = 0; i < data.length; i++) {
    const str = data[i].comment;
    let comment = str.toLowerCase();

    if (data[i].author === "Battleshiz"
      && typeof comment === 'string'
      && typeof comment !== false) {
        if (comment.includes('a1')) {
          document.getElementById('A1').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('a2')) {
          document.getElementById('A2').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('a3')) {
          document.getElementById('A3').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('a4')) {
          document.getElementById('A4').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('a5')) {
          document.getElementById('A5').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('a6')) {
          document.getElementById('A6').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('a7')) {
          document.getElementById('A7').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('a8')) {
          document.getElementById('A8').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('a9')) {
          document.getElementById('A9').innerHTML = `<i class="fas fa-circle"></i>`;
        }
          else if (comment.includes('b1')) {
          document.getElementById('B1').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('b2')) {
          document.getElementById('B2').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('b3')) {
          document.getElementById('B3').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('b4')) {
          document.getElementById('B4').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('b5')) {
          document.getElementById('B5').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('b6')) {
          document.getElementById('B6').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('b7')) {
          document.getElementById('B7').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('b8')) {
          document.getElementById('B8').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('b9')) {
          document.getElementById('B9').innerHTML = `<i class="far fa-circle"></i>`;
        }
          else if (comment.includes('c1')) {
          document.getElementById('C1').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('c2')) {
          document.getElementById('C2').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('c3')) {
          document.getElementById('C3').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('c4')) {
          document.getElementById('C4').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('c5')) {
          document.getElementById('C5').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('c6')) {
          document.getElementById('C6').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('c7')) {
          document.getElementById('C7').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('c8')) {
          document.getElementById('C8').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('c9')) {
          document.getElementById('C9').innerHTML = `<i class="far fa-circle"></i>`;
        }
          else if (comment.includes('d1')) {
          document.getElementById('D1').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('d2')) {
          document.getElementById('D2').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('d3')) {
          document.getElementById('D3').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('d4')) {
          document.getElementById('D4').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('d5')) {
          document.getElementById('D5').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('d6')) {
          document.getElementById('D6').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('d7')) {
          document.getElementById('D7').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('d8')) {
          document.getElementById('D8').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('d9')) {
          document.getElementById('D9').innerHTML = `<i class="far fa-circle"></i>`;
        }
          else if (comment.includes('e1')) {
          document.getElementById('E1').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e2')) {
          document.getElementById('E2').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e3')) {
          document.getElementById('E3').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e4')) {
          document.getElementById('E4').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e5')) {
          document.getElementById('E5').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e6')) {
          document.getElementById('E6').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e7')) {
          document.getElementById('E7').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e8')) {
          document.getElementById('E8').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('e9')) {
          document.getElementById('E9').innerHTML = `<i class="far fa-circle"></i>`;
        }
          else if (comment.includes('f1')) {
          document.getElementById('F1').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('f2')) {
          document.getElementById('F2').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('f3')) {
          document.getElementById('F3').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('f4')) {
          document.getElementById('F4').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('f5')) {
          document.getElementById('F5').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('f6')) {
          document.getElementById('F6').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('f7')) {
          document.getElementById('F7').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('f8')) {
          document.getElementById('F8').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('f9')) {
          document.getElementById('F9').innerHTML = `<i class="far fa-circle"></i>`;
        }
          else if (comment.includes('g1')) {
          document.getElementById('G1').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('g2')) {
          document.getElementById('G2').innerHTML = `<i class="fas fa-circle"></i>`;
        } else if (comment.includes('g3')) {
          document.getElementById('G3').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('g4')) {
          document.getElementById('G4').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('g5')) {
          document.getElementById('G5').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('g6')) {
          document.getElementById('G6').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('g7')) {
          document.getElementById('G7').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('g8')) {
          document.getElementById('G8').innerHTML = `<i class="far fa-circle"></i>`;
        } else if (comment.includes('g9')) {
          document.getElementById('G9').innerHTML = `<i class="far fa-circle"></i>`;
        }
    }
  }
}

function deleteComment(id) {
  return fetch(`${fetchURL}${id}`, {
    method: 'DELETE'
  }).then(function(response){
    fetchComments();
  });
}

function scrollToBottom(obj) {
  obj.scrollIntoView(false);
}
