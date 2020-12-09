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
const projectCard = document.querySelectorAll('.project-card');
const projectCardsDiv = document.querySelector('.flatify-games');
const bannerProject = document.querySelector('.banner-project');
const btnContact = document.querySelector('.btn-contact-2');
const plusIcons = document.querySelectorAll('.fa-plus');
const questionDiv = document.querySelector('.questions');
const questions = document.querySelectorAll('.question-header');
const mumOpinion = document.querySelector('.mum');
const paulusOpinion = document.querySelector('.paulus');
const opinions = document.querySelectorAll('.opinion');
const sectionQuestions = document.querySelector('.section-questions');
const btnEmail = document.querySelector('.btn-email');
const btnCopy = document.querySelector('.btn-copy');
const successMsg = document.querySelector('.message');
const btnCloseAlert = document.querySelector('.btn-close-alert');
const answers = document.querySelectorAll('.answer');
const icons = document.querySelectorAll('i[data-question]')
const instagramLink = document.getElementById('instagram-copycat-link');
const modalProject = document.querySelector('.modal-instagram-copycat');
const overlayProjects = document.querySelector('.overlay-projects');


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
    btnContact.classList.remove('hidden-answer');
  } else {
    btnContact.classList.add('hidden-answer');
  }
}

const btnContactOpacity = new IntersectionObserver(btnContactAppearence, {
  root: null,
  threshold: 0
})
if (mainContent.getAttribute('id') === 'home-page') {
  btnContactOpacity.observe(banner);
}

// Q&A //
const opacityQuestions = function () {
  questions.forEach(q => q.style.opacity = 0.5);
}

opacityQuestions()

let minus;

// const getMinusIcons = function (icons) {
//   const arrIcons = Array.from(icons)

//   arrIcons.forEach(icon => {
//     if(icon.classList.contains('fa-minus')) {
//       minus = icon;
//     }
//   })

//   questionDiv.addEventListener('click', (e) => {
//     console.log(e.target === minus)
//     if (e.target !== minus) return;

//     const data = e.target.dataset.question

//     const answer = document.querySelector(`.answer-${data}`)
//     answer.classList.add('hidden-answer')

//     e.target.classList.remove('fa-minus')
//     e.target.classList.add('fa-plus')

//     const question = document.querySelector(`.question-${data}`)

//     opacityQuestions()

//   })
// }

const allPlus = function (icons) {
  Array.from(icons).every(icon => icon.classList.contains('fa-plus'))
}

questionDiv.addEventListener('click', (e) => {
  if (!e.target.classList.contains('fa-chevron-right')) return;

    const dataEl = e.target.getAttribute('data-question')

    opacityQuestions();

    questions.forEach(q => {
      const data = q.dataset.header
       if (data === dataEl) {
        q.style.opacity = 1;
       }
    })

    answers.forEach(answer => {
      answer.classList.add('hidden-answer')
    })

    const answer = document.querySelector(`.answer-${dataEl}`)
    answer.classList.remove('hidden-answer')

      icons.forEach(icon => {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
        icon.style.cursor = 'pointer';
      })

    if (e.target.classList.contains('fa-chevron-right')) {
      e.target.classList.remove('fa-chevron-right')
      e.target.classList.add('fa-chevron-down')
      e.target.style.color = "#5F38CC";
      e.target.style.cursor = 'auto';
    }
})

// OPINIONS //
const opinionsTransition = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    setTimeout(() => {
      opinions.forEach(opinion => {
      opinion.style.opacity = '1';
      opinion.style.transform = 'translateY(0px)'
      opinion.style.transition = 'all 1s ease'
    })
    }, 1000)
  }
}

const questionsSection = new IntersectionObserver(opinionsTransition, {
  root: null,
  threshold: 0.20,
})

questionsSection.observe(sectionQuestions)

const btnRedirectEmail = document.querySelector('.btn-redirect-email')


// COPY EMAIL //
const displayBtn = function (btn, time = '0.1') {
  btn.classList.remove('hidden-btn');
  btn.style.transition = `all ${time}s`;
  btn.style.cursor = 'pointer';

  if (btn.closest('a')) {
    const link = btn.closest("a")
    link.setAttribute('href', 'mailto: guillemdelas@hotmail.com')
  }
}

const hideBtn = function (btn) {
  btn.classList.add('hidden-btn')
  btn.style.transition = `all 0.3s`
  btn.style.cursor = 'auto';

  if (btn.closest("a")) {
    const link = btn.closest("a")
    link.setAttribute("href", "#")
  }
}

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
})

const copyEmail = () => {
  const email = btnCopy.dataset.email;
  if (navigator.clipboard.writeText(email)) {
    successMsg.style.opacity = 1;
    successMsg.style.transform = 'translateY(-14px)';
  }

  if (!btnCopy.classList.contains('hidden-btn') && !btnRedirectEmail.classList.contains('hidden-btn')) {
    hideBtn(btnCopy);
    hideBtn(btnRedirectEmail)
  }
}

btnCopy.addEventListener('click', copyEmail)


btnCloseAlert.addEventListener('click', (e) => {
  successMsg.style.opacity = 0;
  successMsg.style.transform = 'translateY(14px)';
})


const aboutMe = document.getElementById('about-me')

const hideSuccessMsg = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    successMsg.style.opacity = 0;
    successMsg.style.transform = 'translateY(14px)';
  }
}

const successMsgObserver = new IntersectionObserver(hideSuccessMsg, {
  root: null,
  threshold: 0,
})

successMsgObserver.observe(aboutMe)

// MODAL INSTAGRAM
instagramLink.addEventListener('click', function (e) {
  e.preventDefault();

  if (!e.target.closest('a')) return;

  const link = e.target.closest('a')

  const data = link.getAttribute('data')
  console.log(data)

  const modalProject = document.querySelector(`.modal-${data}`)

  modalProject.classList.remove('hidden')
  overlayProjects.classList.remove('hidden')
})

const closeModalProject = function () {
  if (!modalProject.classList.contains('hidden')) {
    modalProject.classList.add('hidden')
    overlayProjects.classList.add('hidden')
  }
}

btnCloseModal.forEach(btn => {
  btn.addEventListener('click', closeModalProject)
})

overlayProjects.addEventListener('click', closeModalProject)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalProject();
})

// INTERESTS CARDS //

const displayInterests = (entries) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    const interests = document.querySelectorAll('.interest')
    interests.forEach(interest => {
      interest.classList.remove('hidden-interest')
      interest.style.transition = 'all 1s'
    })
  }
}

const interestsObserver = new IntersectionObserver(displayInterests, {
  root: null,
  threshold: 0.5,
})

const interestDiv = document.querySelector('.interests')

interestsObserver.observe(interestDiv)

