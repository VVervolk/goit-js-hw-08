const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const textareaInput = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
let dataset = {};

formCheck();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  dataset[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataset));
}

function formCheck() {
  const savedDataset = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedDataset) {
    dataset = savedDataset;
    emailInput.value = savedDataset.email;
    textareaInput.value = savedDataset.message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();

  if (!emailInput.value.trim() || !textareaInput.value.trim()) {
    return;
  }

  console.log(dataset);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
