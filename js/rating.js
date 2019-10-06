const ratingBody = document.querySelector('.rating');
const speakers = Array.from(document.getElementsByClassName('speaker'));
const output = document.querySelector('.speaker-output');
const btn = document.querySelector('button');



btn.addEventListener('click', function() {
  ratingBody.innerHTML = '';
  ratingBody.innerHTML += `<h3> Thank You!</h3>`; 
});

speakers.forEach(function(speaker) {
  speaker.addEventListener('click', function() {
    if(output.childElementCount < 3){
    createSpeaker(speaker);
    } else {
      alert('Sorry, you cannot select more than 3 speakers');
    }
  }); 
});


function createSpeaker(el) {  
  let speaker = document.createElement('p');
  // console.log(speaker);
  speaker.innerHTML = el.textContent;
  // console.log(speaker);
  output.appendChild(speaker);
 
}