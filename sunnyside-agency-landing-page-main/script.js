const mobileNav = document.querySelector('.nav-mobile');
const hamburgerMenu = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const h2 = document.querySelectorAll('h2');
const blockquotes = document.querySelectorAll('blockquote');
const paragraphs = document.querySelectorAll('p');
const allSections = document.querySelectorAll('section');
const sectionText = allSections.textContent;

let hamburgerMenuOpen = false;

hamburgerMenu.addEventListener('click', function () {
  if (!hamburgerMenuOpen) {
    hamburgerMenu.classList.add('open');
    hamburgerMenuOpen = true;
  } else {
    hamburgerMenu.classList.remove('open');
    hamburgerMenuOpen = false;
  }
});

const addHiddenClass = function (element) {
  element.classList.add('hidden');
};
const toggleHiddenClass = function (element) {
  element.classList.toggle('hidden');
};
addHiddenClass(mobileNav);
addHiddenClass(overlay);
hamburgerMenu.addEventListener('click', function () {
  toggleHiddenClass(mobileNav);
  toggleHiddenClass(overlay);
});

overlay.addEventListener('click', function () {
  toggleHiddenClass(mobileNav);
  toggleHiddenClass(overlay);
});
const obsCallback = function (entries, observer) {
  const [entry] = entries;
  // if (!entry.isIntersecting) return;
  console.log(entry.target);
  if (entry.target.querySelector('.content-down') === NodeList) {
    entry.target.querySelector('.content-down').classList.add('content-up');
  } else {
    entry.target
      .querySelectorAll('.content-down')
      .forEach(con => con.classList.add('content-up'));
  }
  // if (!entry.isIntersecting) {
  //   entry.target.querySelector('.content-up').classList.add('content-down');
  // }
  // if (!entry.isIntersecting) {
  // }
};
const obsOptions = {
  root: null,
  threshold: 0.5,
};
const sectionObserver = new IntersectionObserver(obsCallback, obsOptions);
allSections.forEach(section => {
  sectionObserver.observe(section);
});

const footer = document.querySelector('footer');
const footerObsCallback = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    document.querySelector('.svg-icon').classList.add('svg');
  }
};
const footerObserver = new IntersectionObserver(footerObsCallback, obsOptions);

footerObserver.observe(footer);
