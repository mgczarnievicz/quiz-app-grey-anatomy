import data from '../data/data.json' assert { type: 'json' };
import createCard from './card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
console.log('cardContainer: ', cardContainer);

let quizData = localStorage.getItem('quizApp-Taylor');

if (!quizData) {
    quizData = data;
}

const cardsBooked = quizData.filter((element) => element.bookmark);

cardsBooked.forEach((element) => {
    const card = createCard(element);
    console.log('card: ', card);
    cardContainer.append(card);
});
