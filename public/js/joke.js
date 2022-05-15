const jokeWrapper = document.querySelector('.joke');
const jokeMain = document.querySelector('.jokeMain');

jokeMain.addEventListener('click', async (e) => {
  if (e.target.innerText === 'new') {
    const response = await fetch('/joke', {
      method: 'POST',
    });
    if (response.ok) {
      const { joke } = await response.json();
      jokeWrapper.innerText = joke;
    }
  }
});
