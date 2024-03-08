const logo = document.querySelector('.logo');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');
const linkItems = document.querySelectorAll('.link-item');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  // y 捲軸超過 nav 高度
  if (window.scrollY > navHeight) {
    nav.classList.add('my-sticky-nav');
    logo.classList.add('my-sticky-logo');
    links.classList.add('my-sticky-links');
  } else {
    nav.classList.remove('my-sticky-nav');
    logo.classList.remove('my-sticky-logo');
    links.classList.remove('my-sticky-links');
  }

  // 隨 y 捲軸，切換 nav 連結背景
  sections.forEach((section) => {
    if (window.scrollY + section.offsetHeight / 5 > section.offsetTop) {
      linkItems.forEach((link) => {
        link.classList.remove('current');

        if (link.href.includes(section.id)) {
          link.classList.add('current');
        }
      });
    }
  });

  // 設定連結區塊 top 位置
  setLinksTop();
});

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');

  // links.style.top = `${nav.offsetHeight}px`;
  // 設定連結區塊 top 位置
  setLinksTop();

  links.classList.toggle('active');
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburgerMenu.classList.remove('open');
    links.classList.remove('active');

    linkItems.forEach((link) => {
      link.classList.remove('current');
    });

    e.target.classList.add('current');
  }
});

window.addEventListener('resize', setLinksTop);

function setLinksTop() {
  if (window.innerWidth < 1024) {
    links.style.top = `${nav.offsetHeight}px`;
  } else {
    links.style.top = '0px';
  }
}
