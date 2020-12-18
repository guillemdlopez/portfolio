/* SROLLING */
const logo = document.querySelector(".link-logo");
const navLinks = document.querySelector(".navbar-links");
const navbar = document.querySelector(".navbar");
const banner = document.querySelector(".banner");
const sections = document.querySelectorAll("section");
const bannerProject = document.querySelector('.banner-project');
const mainContent = document.querySelector("main");


const initScrolling = function () {
  navLinks.addEventListener("click", (e) => {
    if (!e.target.hasAttribute('data-link') || !e.target.hasAttribute('href')) return;

      e.preventDefault();
      const id = e.target.getAttribute("href");
      const section = document.querySelector(id);
      section.scrollIntoView({ behavior: "smooth" });
  });
};


const upperScrolling = function () {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    banner.scrollIntoView({ behavior: "smooth" });
  });
};


const changeOpacityNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting && window.innerWidth >= 1078) {
    navbar.style.opacity = "0.5";
  } else {
    navbar.style.opacity = "1";
  }
};


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

if (mainContent.getAttribute('id') != 'home-page' && window.innerWidth > 1024) {
  bannerProjectObserver.observe(bannerProject);
}

// navbar.addEventListener("mouseover", (e) => {
//   if (window.pageYOffset > 850) e.target.style.opacity = "1";
// });

// navbar.addEventListener("mouseleave", (e) => {
//   if (window.pageYOffset > 850) e.target.style.opacity = "0.5";
// });

export {initScrolling, upperScrolling, linkDecoration, changeOpacityNav, changeOpacityNavProject }
