const questions = document.querySelectorAll('.question-header');
const icons = document.querySelectorAll('i[data-question]');
const questionDiv = document.querySelector('.questions');
const answers = document.querySelectorAll('.answer');
const navbar = document.querySelector(".navbar");
const btnContact = document.querySelector('.btn-contact-navbar');
const mainContent = document.querySelector("main");
const btnCopy = document.querySelector('.btn-copy');
const successMsg = document.querySelector('.message');
const btnRedirectEmail = document.querySelector('.btn-redirect-email');



const opacityQuestions = function () {
  questions.forEach(q => q.style.opacity = 0.5);
}

opacityQuestions();

const allPlus = function (icons) {
  Array.from(icons).every(icon => icon.classList.contains('fa-plus'))
}

allPlus(icons);

const questionsIcons = function () {
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
        answer.classList.add('hidden-answer');
      })

      const answer = document.querySelector(`.answer-${dataEl}`);
      answer.classList.remove('hidden-answer');
      answer.scrollIntoView({behavior: 'smooth'});

        icons.forEach(icon => {
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-right');
          icon.style.cursor = 'pointer';
        })

      if (e.target.classList.contains('fa-chevron-right')) {
        e.target.classList.remove('fa-chevron-right');
        e.target.classList.add('fa-chevron-down');
        e.target.style.color = "#5F38CC";
        e.target.style.cursor = 'auto';
      }
  });
};

const navFullOpacity = function () {
  navbar.addEventListener("mouseover", (e) => {
  if (window.pageYOffset > 850) e.target.style.opacity = "1";
  });
}

const navHalfOpacity = function() {
  navbar.addEventListener("mouseleave", (e) => {
  if (window.pageYOffset > 850) e.target.style.opacity = "0.5";
  });
}

const btnContactAppearence = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    btnContact.classList.remove('hidden-answer');
  } else {
    btnContact.classList.add('hidden-answer');
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
};

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


export { opacityQuestions, allPlus, questionsIcons, navFullOpacity, navHalfOpacity, btnContactAppearence, copyEmail, hideBtn }
