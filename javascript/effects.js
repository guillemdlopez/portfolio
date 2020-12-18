const sections = document.querySelectorAll("section");
const opinions = document.querySelectorAll('.opinion');
const successMsg = document.querySelector('.message');


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
};

const displayBtn = function (btn, time = '0.1') {
  btn.classList.remove('hidden-btn');
  btn.style.transition = `all ${time}s`;
  btn.style.cursor = 'pointer';

  if (btn.closest('a')) {
    const link = btn.closest("a")
    link.setAttribute('href', 'mailto: guillemdelas@hotmail.com')
  }
};

const hideSuccessMsg = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    successMsg.style.opacity = 0;
    successMsg.style.transform = 'translateY(14px)';
  }
}

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


export { loadSection, opinionsTransition, displayBtn, hideSuccessMsg, displayInterests };
