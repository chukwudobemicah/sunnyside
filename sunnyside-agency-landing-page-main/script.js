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
// I MIGHT NEED THIS LATER :)
// const obsCallback = function (entries, observer) {
//   const [entry] = entries;
//   // if (!entry.isIntersecting) return;
//   console.log(entry.target);
//   if (entry.target.querySelector('.viewOnScroll') === NodeList) {
//     entry.target.querySelector('.viewOnScroll').classList.add('content-up');
//   } else {
//     entry.target
//       .querySelectorAll('.viewOnScroll')
//       .forEach(con => con.classList.add('content-up'));
//   }
//   // if (!entry.isIntersecting) {
//   //   entry.target.querySelector('.content-up').classList.add('viewOnScroll');
//   // }
//   // if (!entry.isIntersecting) {
//   // }
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.5,
// };
// const sectionObserver = new IntersectionObserver(obsCallback, obsOptions);
// allSections.forEach(section => {
//   sectionObserver.observe(section);
// });

const obsOptions = {
  root: null,
  threshold: 0.5,
};
const footer = document.querySelector('footer');
const footerObsCallback = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    document.querySelector('.svg-icon').classList.add('svg');
  }
};
const footerObserver = new IntersectionObserver(footerObsCallback, obsOptions);

footerObserver.observe(footer);

const viewOnSCrollOptions = {
  root: null,
  threshold: 0.3,
};
const downCB = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    if (!entry.target) return;
    if (entry.isIntersecting) entry.target.classList.add('content-up');
    console.log(entry);
    console.log(entry.target);
  });
};

const viewOnScroll = document.querySelectorAll('.viewonscroll');
console.log(viewOnScroll);
const viewOnScrollObserver = new IntersectionObserver(
  downCB,
  viewOnSCrollOptions
);
//  vos = viewonscroll
viewOnScroll.forEach(vos => viewOnScrollObserver.observe(vos));
