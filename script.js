'use strict';

const contactLinks = document.querySelectorAll(".contact-link");
const contactDiv = document.querySelector(".contact-icons");
const navLinks = document.querySelector(".navbar-links");
const sections = document.querySelectorAll("section");
const cvCardsDiv = document.querySelector(".cv-cards");
const cvCards = document.querySelectorAll(".cv-card");
const modalOverlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".btn-close-modal");
const modals = document.querySelectorAll(".cv-modal");
const banner = document.querySelector(".banner");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll("a[data-link]");
const logo = document.querySelector(".link-logo");
const mainContent = document.querySelector("main");
const videoCategories = document.getElementById('video-categories');
const projectCard = document.querySelectorAll('.project-card')
const projectCardsDiv = document.querySelector('.flatify-games')
const bannerProject = document.querySelector('.banner-project')
const btnContact = document.querySelector('.btn-contact-2')
const plusIcons = document.querySelectorAll('.fa-plus')
const questionDiv = document.querySelector('.questions')
const questions = document.querySelectorAll('.question')

/* NAVBAR PHONE */
const navMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".sections");
const linksSections = document.querySelectorAll(".link-section");

linksSections.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu.classList.add("hidden");
  });
});

/* SROLLING */
const initScrolling = function () {
  navLinks.addEventListener("click", (e) => {
    if (!e.target.hasAttribute('data-link') || !e.target.hasAttribute('href')) return;

      e.preventDefault();
      const id = e.target.getAttribute("href");
      const section = document.querySelector(id);
      section.scrollIntoView({ behavior: "smooth" });
  });
};
initScrolling();

const upperScrolling = function () {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    banner.scrollIntoView({ behavior: "smooth" });
  });
};

if (mainContent.getAttribute("id") === 'home-page') {
  upperScrolling();
}

/* SECTIONS EFFECT */
const loadSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden-section");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(loadSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

/* MODAL WINDOWS */

const openModal = function () {
  cvCardsDiv.addEventListener("click", (e) => {
      const card = e.target.closest(".cv-card");
      if (!card) return;
      const dataEl = card.dataset.cv;
      const modal = document.querySelector(`.modal-${dataEl}`);
      modal.classList.remove("hidden");
      modalOverlay.classList.remove("hidden");
    });
}

const closeModal = function () {
  modals.forEach((modal) => {
    modal.classList.add("hidden");
  });
  modalOverlay.classList.add("hidden");
};

if (mainContent.getAttribute('id') === 'home-page') {
  openModal();

  modalOverlay.addEventListener("click", closeModal);
  btnCloseModal.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    modals.forEach((modal) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  });
}


/* NAVBAR OPACITY EFFECT */

if (mainContent.getAttribute('id') === 'home-page') {
  const changeOpacityNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting && window.innerWidth >= 1078) {
      navbar.style.opacity = "0.5";
    } else {
      navbar.style.opacity = "1";
    }
  };
  const bannerObserver = new IntersectionObserver(changeOpacityNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navbar.offsetHeight}px`,
  });

  bannerObserver.observe(banner);
}
if (mainContent.getAttribute('id') === 'games-master' || mainContent.getAttribute('id') === 'flatify') {
  const changeOpacityNavProject = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      navbar.style.opacity = '0.5'
    } else {
      navbar.style.opacity = '1'
    }
  }

  const bannerProjectObserver = new IntersectionObserver(changeOpacityNavProject, {
    root: null,
    threshold: 0,
    rootMargin: `-${navbar.offsetHeight}px`,
  })

  bannerProjectObserver.observe(bannerProject)
}

// NAVBAR LINKS SELECTION //
const linkDecoration = function (entries) {
  const [entry] = entries;
  const links = document.querySelectorAll("a[data-link]");

  links.forEach((link) => {
    if (entry.isIntersecting && link.dataset.link === entry.target.id) {
      link.classList.add("underline-link");
      // console.log(link.dataset.link, entry.target.id);
    } else if (entry.isIntersecting && link.dataset.link !== entry.target.id) {
      link.classList.remove("underline-link");
    } else if (!entry.isIntersecting && entry.target.id === "about-me") {
      link.classList.remove("underline-link");
    }
  });
};

const underlineLinks = new IntersectionObserver(linkDecoration, {
  root: null,
  threshold: 0.1,
});

sections.forEach((section) => {
  underlineLinks.observe(section);
});

navbar.addEventListener("mouseover", (e) => {
  if (window.pageYOffset > 850) e.target.style.opacity = "1";
});

navbar.addEventListener("mouseleave", (e) => {
  if (window.pageYOffset > 850) e.target.style.opacity = "0.5";
});


// BTN CONTACT //
const btnContactAppearence = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    btnContact.classList.remove('hidden');
  } else {
    btnContact.classList.add('hidden');
  }
}

const btnContactOpacity = new IntersectionObserver(btnContactAppearence, {
  root: null,
  threshold: 0
})

btnContactOpacity.observe(banner)

// Q&A //

questionDiv.addEventListener('click', (e) => {
  if (!e.target.closest('.question-header') && !e.target.hasAttribute('data-question')) return;

    const dataEl = e.target.getAttribute('data-question')

    const answers = document.querySelectorAll('.answer')
    answers.forEach(answer => answer.classList.add('hidden'))

    const answer = document.querySelector(`.answer-${dataEl}`)
    // console.log(answer)
    answer.classList.remove('hidden')
})
