const contactLinks = document.querySelectorAll('.contact-link')
const contactDiv = document.querySelector('.contact-icons')
const navLinks = document.querySelector('.navbar-links')
const sections = document.querySelectorAll('section')
const cvCardsDiv = document.querySelector('.cv-cards')
const cvCards = document.querySelectorAll('.cv-card')
const modalOverlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelectorAll('.btn-close-modal')
const modals = document.querySelectorAll('.cv-modal')

console.log(cvCardsDiv, cvCards, modalOverlay, btnCloseModal);

/* NAVBAR PHONE */
const navMenu = document.querySelector('.burger-menu')
const menu = document.querySelector('.sections')
const linksSections = document.querySelectorAll('.link-section')

navMenu.addEventListener('click', (e) => {
  if (navMenu) menu.classList.toggle('hidden')

  // if (menu) {
  //   menu.addEventListener('click', (e) => {
  //     // console.log(e.target)
  //     e.target.addEventListener('click', (e) => {
  //       menu.classList.add('hidden')
  //     })
  //   })
  // }
})


linksSections.forEach(link => {
  link.addEventListener('click', (e) => {
    menu.classList.add('hidden')
  })
})

/* SROLLING */
const initScrolling = function() {
  navLinks.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id)
    section.scrollIntoView({behavior: 'smooth'})
  })
}
initScrolling();


/* SECTIONS EFFECT */
const loadSection = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('hidden-section');
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(loadSection, {
  root: null,
  threshold: 0.15,
})

sections.forEach(section => {
  sectionObserver.observe(section);
})

/* MODAL WINDOWS */
cvCardsDiv.addEventListener('click', (e) => {
  const card = e.target.closest('.cv-card');
  if (!card) return;
  const dataEl = card.dataset.cv
  const modal = document.querySelector(`.modal-${dataEl}`)
  modal.classList.remove('hidden')
  modalOverlay.classList.remove('hidden')
})

const closeModal = function() {
  modals.forEach(modal => {
    modal.classList.add('hidden')
  })
  modalOverlay.classList.add('hidden')
}

modalOverlay.addEventListener('click', closeModal)

btnCloseModal.forEach(btn => {
  btn.addEventListener('click', closeModal)
})




