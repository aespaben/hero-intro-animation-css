const observer = new IntersectionObserver((entries) => {
  if(entries[0].isIntersecting) {
    scroll_element.classList.add('show');
  }
  else {
    scroll_element.classList.remove('show');
  }
});

const scroll_element = document.querySelector('.content h1');

observer.observe(scroll_element);