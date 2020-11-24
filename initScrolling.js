const initScrolling = function() {
  navLinks.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id)
    section.scrollIntoView({behavior: 'smooth'})
  })
}
initScrolling();



export { initScrolling }
