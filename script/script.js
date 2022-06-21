// stores audio for music pieces in var
const music1 = new Audio('sounds/minor-v-major-test/background-loop-sad-story-01-2695.mp3');
const music2 = new Audio('sounds/minor-v-major-test/blues-progression-e-major-7-3426.mp3');
const music3 = new Audio('sounds/minor-v-major-test/classic-piano-loop-in-a-minor-5004.mp3');
const music4 = new Audio('sounds/minor-v-major-test/classic-piano-loop-in-d-major-5005.mp3');
const music5 = new Audio('sounds/minor-v-major-test/i-am-sad-and-melancholic-ig-version-loop-02-7316.mp3');
const music6 = new Audio('sounds/minor-v-major-test/joy-piano-with-clap-7502.mp3');
const musicBday = new Audio('sounds/happy-birthday.mp3');


// stores well done or incorrect sounds
const welldone = new Audio('sounds/pass-fail-noises/success-fanfare-trumpetsmp3-6185.mp3');



let numCorrect = 0;
let numtries = 0;
let numMusic = 6;


$(".draggable").draggable({
  revert: "invalid",
  zIndex: 100, // forces draggable item to top
  stop: function (event, ui) {
    numtries++;

  }
});


$("#major-chord").droppable({
  accept: ".major",
  drop: function (event, ui) {
    /*ui.draggable( "disable" );*/
    ui.draggable.draggable("destroy");
    welldone.play();
    checkFinished();
  } 

});


$(".draggable2").draggable({
  revert: "invalid",
  zIndex: 100,
  stop: function (event, ui) {
    numtries++;

  }

});

$("#minor-chord").droppable({
  accept: ".minor",
  drop: function (event, ui) {
    ui.draggable.draggable("destroy");
    welldone.play();

    checkFinished();
  }


});


function checkFinished() {
  numCorrect++;

  if (numCorrect == numMusic) {
    numtries++;

    // $("#finalScore").show();
    if (numtries == numMusic) {


      $("#finalScore").text("Perfect! All correct first time!");

      $("#finalScore").text(("Your score: " + numCorrect + " out of " + numMusic));

    } else {

      $("#finalScore").text(("Your score: " + numCorrect + " from " + numtries + " attempts."));

      
    }

  }
};


// plays music piece for appropriate item when button pressed
function playChord(buttonPressed) {
  
switch(buttonPressed)  {

  case 'play1':
    music1.play();
    break;

    case 'play2':
      music2.play();
      break;

      case 'play3':
        music3.play();
        break;

        case 'play4':
          music4.play();
          break;

          case 'play5':
            music5.play();
            break;

            case 'play6':
              music6.play();
              break;

              case 'musicBday':
                musicBday.play();
                break;

  }

}


// Listen for button clicks on each of the play icons
document.getElementById('play1').addEventListener('click', function(){

  playChord('play1');
})

document.getElementById('play2').addEventListener('click', function(){

  playChord('play2');
})

document.getElementById('play3').addEventListener('click', function(){

  playChord('play3');
})

document.getElementById('play4').addEventListener('click', function(){

  playChord('play4');
})

document.getElementById('play5').addEventListener('click', function(){

  playChord('play5');
})

document.getElementById('play6').addEventListener('click', function(){

  playChord('play6');
})






