const logo = document.querySelector('.logo');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');

document.querySelector('html').style.scrollPaddingTop = `${
  navHeight - navHeight / 3
}px`;

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

  links.style.top = `${nav.clientHeight}px`;
});

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');

  links.style.top = `${nav.clientHeight}px`;
  links.classList.toggle('active');
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburgerMenu.classList.remove('open');
    links.classList.remove('active');
  }
});
