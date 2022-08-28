import { throttle } from 'lodash';

const refs = {
  email: document.querySelector('[name="email"]'),
  massege: document.querySelector('[name="message"]'),
  formEl: document.querySelector('.feedback-form'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';
refs.formEl.addEventListener('input', throttle(setToLocalStorage), 500);

function setToLocalStorage() {
  const formData = {
    email: refs.email.value,
    massege: refs.massege.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const keyFromStorage = load(LOCALSTORAGE_KEY);
if (keyFromStorage) {
  refs.email.value = keyFromStorage.email;
  refs.massege.value = keyFromStorage.massege;
}

refs.formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(keyFromStorage);
  refs.formEl.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
