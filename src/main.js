'use strict';
import './style.css';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', openModal);
overlay.addEventListener('click', openModal);
