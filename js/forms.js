import createCard from './card.js';

const MAX_CHARACTERS = 150;

const form = document.querySelector('form');
const newCardContainer = document.querySelector('[js-data="new-cards"]');

const questionInput = document.querySelector('[data-js="new-question"]');
const answerInput = document.querySelector('[data-js="new-answer"]');

const characterLeftQuestion = document.querySelector(
    '[data-js="remaining-characters-question"]'
);
const characterLeftAnswer = document.querySelector(
    '[data-js="remaining-characters-answer"]'
);
console.log('CardFrom: ', form);
console.log('newCardContainer: ', newCardContainer);
console.log('answerInput: ', answerInput);
console.log('questionInput: ', questionInput);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('I am in the event with arrow function! :D');

    const formData = new FormData(event.target);
    const dataForm = Object.fromEntries(formData);
    console.log('dataForm:["input-text"] ', dataForm);

    let tag = dataForm.tag.split(',');
    tag = tag.map((element) => element.trim());
    console.log('tags: ', tag);

    const newCard = { ...dataForm, tag, bookmark: false };
    console.log('newCard: ', newCard);

    const card = createCard(newCard);
    newCardContainer.append(card);

    form.reset();
});

function characterLeft(e, characterLeftElement) {
    characterLeftElement.textContent =
        MAX_CHARACTERS - parseInt(e.target.value.length);
}

questionInput.addEventListener('input', (e) => {
    characterLeft(e, characterLeftQuestion);
});

answerInput.addEventListener('input', (e) => {
    characterLeft(e, characterLeftAnswer);
});
