// EVENT DELEGATION ON CONTACT LINKS//

const contactLinks = document.querySelectorAll('.contact-link')
const contactDiv = document.querySelector('.contact-icons')
console.log(contactLinks, contactDiv)

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
