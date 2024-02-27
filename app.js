const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');

const navHeight = nav.offsetHeight;

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

  links.style.top = `${nav.clientHeight}px`;
  links.classList.toggle('active');
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();

    const ta = e.target.href.split('#')[1];
    const targetPosition = document.querySelector(`#${ta}`).offsetTop;

    hamburgerMenu.classList.remove('open');
    links.classList.remove('active');

    setTimeout(() => {
      window.scrollTo(0, targetPosition - navHeight);
    }, 300);
  }
});
