const logo = document.querySelector('.logo');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');

window.addEventListener('scroll', () => {
  if (window.scrollY > navHeight) {
    nav.classList.add('my-sticky-nav');
    logo.classList.add('my-sticky-logo');
    links.classList.add('my-sticky-links');
  } else {
    nav.classList.remove('my-sticky-nav');
    logo.classList.remove('my-sticky-logo');
    links.classList.remove('my-sticky-links');
  }
});

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');

  links.style.top = `${nav.offsetHeight}px`;
  links.classList.toggle('active');
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburgerMenu.classList.remove('open');
    links.classList.remove('active');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 1024) {
    links.style.top = `${nav.offsetHeight}px`;
  } else {
    links.style.top = '0px';
  }
});
