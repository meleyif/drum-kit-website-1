/* document.querySelectorAll("button")[0].addEventListener("click", handleClick); */

// detecting Button Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  /* the document.querySelector will enable us to get the number of
  the upper bound for the loop */
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  /* this.style.color = "white"; */
  /* var audio = new Audio("./sounds/tom-1.mp3");
  audio.play(); */
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

// Detecting Keyboard Press
addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

// Sound generator function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

// Button press animation
function buttonAnimation(currentKey, animation) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
