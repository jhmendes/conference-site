//Challenge #1 - Modal Functionality


//Modal 


const modal = document.querySelector('.modal');

//Get the O
const easterEgg = document.querySelector('h1');
easterEgg.addEventListener('click', function(e) {
  modal.classList.toggle('modal-hidden');
  modal.classList.toggle('modal-shown');
})
//Get the X

const close = document.querySelector('.close');
close.addEventListener('click', function(e) {
  modal.classList.remove('modal-shown');
  modal.classList.add('modal-hidden');
})

//Get the input

const modalInput = document.querySelector('.modal input');


modalInput.addEventListener('keyup', function() {
  let input = '';

  input += modalInput.value;

  console.log(input);

  if(input.length === 5) {
    if(input === '39887') {
      winnerAlert();
    } else {
      sorryAlert();
      modalInput.value = '';
    }
  }
});




//Alert functions

function winnerAlert() {
  alert('Congrats! You are the winner! Please contact our team for your prize.');
}

function sorryAlert() {
  alert('Sorry, your code is invalid');
}

