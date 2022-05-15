console.log('ok');

const { postForm } = document.forms;
const postWrapper = document.querySelector('.postWrapper');

function newPost(post) {
  return `
    <div data-id="${post.id}" class="col-4">
      <div class="card" style="width: 18rem;">
        <img src="/img/${post.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          <button type="button">Delete</button>
        </div>
      </div>
    </div>
  `;
}

// добавление новой карточки через fetch
postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit');
  const data = new FormData(postForm);
  const response = await fetch('/post', {
    method: 'POST',
    body: data,
  });

  if (response.ok) {
    const dataFromBack = await response.json();
    postWrapper.insertAdjacentHTML('afterbegin', newPost(dataFromBack.newPost));
  } else {
    alert('very bad');
  }
});

// Удаление карточек через fetch
postWrapper.addEventListener('click', async (e) => {
  if (e.target.innerText === 'Delete') {
    const card = e.target.closest('[data-id]');
    const { id } = card.dataset;
    const response = await fetch(`/post/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      card.remove();
    }
  }
});
