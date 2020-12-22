const cvCardsDiv = document.querySelector(".cv-cards");
const modals = document.querySelectorAll(".cv-modal");
const modalOverlay = document.querySelector(".overlay");
const mainContent = document.querySelector("main");
const btnCloseModal = document.querySelectorAll(".btn-close-modal");
const unfinishedProjectLink = document.querySelectorAll('.unfinished-project-link');
const overlayProjects = document.querySelector('.overlay-projects');
const modalProject = document.querySelector('.modal-unfinished-project');


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

const openModalProject = function(e) {
    e.preventDefault();

    const link = e.target.closest('a');

    if (!link) return;

    const data = link.getAttribute('data');

    const modalProject = document.querySelector(`.modal-${data}`)

    modalProject.classList.remove('hidden');
    overlayProjects.classList.remove('hidden');
    modalProject.style.transform = 'translateY(0px)';
    modalProject.style.transition = 'all 0.5s';
  };


const closeModalProject = function () {
  if (!modalProject.classList.contains('hidden')) {
    modalProject.classList.add('hidden');
    overlayProjects.classList.add('hidden');
  }
};


export { openModal, closeModal, openModalProject, closeModalProject }
