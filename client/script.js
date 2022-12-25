import bot from './assets/bot.svg';
import bot from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element){
  element.textContent = '';
  loadInterval = setInterval(() => {
    element.textContent += '.';

    if(element.textContent === '....'){
      element.textContent = '';
    }
  }, 300)
}