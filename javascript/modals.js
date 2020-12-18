const cvCardsDiv = document.querySelector(".cv-cards");
const modals = document.querySelectorAll(".cv-modal");
const modalOverlay = document.querySelector(".overlay");
const mainContent = document.querySelector("main");
const btnCloseModal = document.querySelectorAll(".btn-close-modal");
const instagramLink = document.getElementById('instagram-copycat-link');
const overlayProjects = document.querySelector('.overlay-projects');
const modalProject = document.querySelector('.modal-instagram-copycat');


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

const openModalProject = function() {
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
};

const closeModalProject = function () {
  if (!modalProject.classList.contains('hidden')) {
    modalProject.classList.add('hidden')
    overlayProjects.classList.add('hidden')
  }
};

export { openModal, closeModal, openModalProject, closeModalProject }
