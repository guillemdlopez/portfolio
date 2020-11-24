const contactLinks = document.querySelectorAll('.contact-link')
const contactDiv = document.querySelector('.contact-icons')
const navLinks = document.querySelector('.navbar-links')
const sections = document.querySelectorAll('section')


contactLinks.forEach(link => {
  link.addEventListener('mouseenter', (e) => {
    const data = e.target.dataset.numberLink
    console.log(typeof data)
    if (data === "1") console.log('Go to my Github!')
    if (data === "2") console.log('Go to my Hackerrank')
    if (data === "3") console.log('Go to my Linkedin')
    if (data === "4") console.log('Go to my Discord')
    if (data === "5") console.log('Go to my Email')
  })
})

/* navbar phone */

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
  console.log(entry.target)
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

