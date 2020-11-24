const contactLinks = document.querySelectorAll('.contact-link')
const contactDiv = document.querySelector('.contact-icons')
const navLinks = document.querySelector('.navbar-links')
const sections = document.querySelectorAll('section')
const cvCardsDiv = document.querySelector('.cv-cards')
const cvCards = document.querySelectorAll('.cv-card')
const modalOverlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelectorAll('.btn-close-modal')
const modals = document.querySelectorAll('.cv-modal')
const banner = document.querySelector('.banner')
const navbar = document.querySelector('.navbar')
const links = document.querySelectorAll('a[data-link]')
// console.log(cvCardsDiv, cvCards, modalOverlay, btnCloseModal, banner, navbar);

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

/* NAVBAR OPACITY EFFECT */
const changeColorNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.style.background = 'white'
  } else {
    navbar.style.background = 'var(--color-principal)'
  }
}
const bannerObserver = new IntersectionObserver(changeColorNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navbar.offsetHeight}px`,
})

bannerObserver.observe(banner)


/* NAVBAR LINKS SELECTION */
const linkDecoration = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  const links = document.querySelectorAll('a[data-link]')

  links.forEach(link => {
    if (entry.isIntersecting && link.dataset.link === entry.target.id) {
      link.classList.add('underline-link')
    }
    else {
      link.classList.remove('underline-link')
    }
  })


  // if (entry.isIntersecting) {
  //   const hrefLink = entry.target.id;
  //   links.forEach(link => {
  //     link.dataset.link === entry.target.id ? link.classList.add('underline-link') : false
  //   })
  // } else {
  //   const hrefLink = entry.target.id;
  //   links.forEach(link => {
  //     link.dataset.link === entry.target.id ? link.classList.add('underline-link') : link.classList.remove('underline-link')
  //   })
  // }
}

const underlineLinks = new IntersectionObserver(linkDecoration, {
  root: null,
  threshold: 0,
})

sections.forEach(section => {
  underlineLinks.observe(section);
})

