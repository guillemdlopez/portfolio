'use strict';

//////////// BTNS /////////////
const btnCloseModal = document.querySelectorAll(".btn-close-modal");
const btnEmail = document.querySelector('.btn-email');
const btnCopy = document.querySelector('.btn-copy');
const btnCloseAlert = document.querySelector('.btn-close-alert');
const btnRedirectEmail = document.querySelector('.btn-redirect-email');

//////////// OVERLAYS ////////////
const modalOverlay = document.querySelector(".overlay");
const overlayProjects = document.querySelector('.overlay-projects');
const modals = document.querySelectorAll(".cv-modal");
const modalProject = document.querySelector('.modal-instagram-copycat');

/////////// CONTAINERS AND SECTIONS /////////////
const aboutMe = document.getElementById('about-me');
const sectionQuestions = document.querySelector('.section-questions');
const mainContent = document.querySelector("main");

////////////// OTHER COMPONENTS ////////////////
const banner = document.querySelector(".banner");
const navbar = document.querySelector(".navbar");
const successMsg = document.querySelector('.message');
const unfinishedProjectLink = document.querySelectorAll('.unfinished-project-link');

/* NAVBAR PHONE */
const navMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".sections");
const linksSections = document.querySelectorAll(".link-section");

linksSections.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu.classList.add("hidden");
  });
});

import { initScrolling, upperScrolling, linkDecoration, changeOpacityNav, changeOpacityNavProject }  from './navbar.js';
import { openModal, closeModal, openModalProject, closeModalProject } from './modals.js';
import { loadSection, opinionsTransition, displayBtn, hideSuccessMsg, displayInterests } from './effects.js';
import { opacityQuestions, questionsIcons, navFullOpacity, navHalfOpacity, btnContactAppearence, copyEmail, hideBtn } from './functions.js';
import { initMap } from './initMap.js';

// EXECUTE ///////ONLY/////// ON HOME PAGE
if (mainContent.getAttribute("id") === 'home-page') {
  openModal();
  // closeModal();

  initScrolling();
  upperScrolling();

  const bannerObserver = new IntersectionObserver(changeOpacityNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navbar.offsetHeight}px`,
  });

  bannerObserver.observe(banner);

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

  opacityQuestions();
  questionsIcons();

  const btnContactOpacity = new IntersectionObserver(btnContactAppearence, {
    root: null,
    threshold: 0,
  })

  btnContactOpacity.observe(banner);

  const questionsSection = new IntersectionObserver(opinionsTransition, {
    root: null,
    threshold: 0.20,
  })

  questionsSection.observe(sectionQuestions)

  btnEmail.addEventListener('click', function(e) {
    if (window.innerWidth > 1024) {
      e.preventDefault();

      if (successMsg.style.opacity = 1) {
        successMsg.style.opacity = 0;
      }

      if (btnCopy.classList.contains('hidden-btn') && btnRedirectEmail.classList.contains('hidden-btn')) {
        displayBtn(btnCopy);
        displayBtn(btnRedirectEmail, '0.4');

      } else {
        hideBtn(btnCopy);
        hideBtn(btnRedirectEmail)
      }
    }
  });

  btnCopy.addEventListener('click', copyEmail)


  btnCloseAlert.addEventListener('click', (e) => {
    successMsg.style.opacity = 0;
    successMsg.style.transform = 'translateY(14px)';
  });

  const successMsgObserver = new IntersectionObserver(hideSuccessMsg, {
    root: null,
    threshold: 0,
  })

  successMsgObserver.observe(aboutMe)

  unfinishedProjectLink.forEach(link => {
    link.addEventListener('click', openModalProject.bind(this))
  })

  overlayProjects.addEventListener('click', closeModalProject);
  btnCloseModal.forEach(btn => btn.addEventListener('click', closeModalProject));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalProject.classList.contains('hidden')) closeModalProject();
  })

  // const interestsObserver = new IntersectionObserver(displayInterests, {
  //   root: null,
  //   threshold: 0.5,
  // })

  // interestsObserver.observe(interestDiv)

  initMap();
}

// EXECUTE //////////// ON ALL PAGES //////////////
navFullOpacity();
navHalfOpacity();

