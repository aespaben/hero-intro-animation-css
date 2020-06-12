const getter = document.querySelector('.link');
const img = document.querySelector('.hero img');

getter.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://picsum.photos/1000/800')
    .then(res => res.url)
    .then(data => {
      img.onload = () => {
        img.style.opacity = 0;
        const id = setInterval(() => {
          img.style.opacity = parseFloat(img.style.opacity) + 0.01;
        }, 10);

        setTimeout(() => clearInterval(id), 1000);
      }
      
      img.src = data;
    })
    .catch(err => console.error(err.message));
});