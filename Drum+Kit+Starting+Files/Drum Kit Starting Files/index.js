for (var i=0; i<document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener('click', function () {
  // alert("I got clicked!");
  // this: is an object that gets us the identity of the of the event or what was clicked
//  this.style.color="white";
  playSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
});
}
// var sound = new Audio('sounds/crash.mp3');
// sound.play();
// alert(document.querySelectorAll(".drum").length);

// Creating Constructor Function
// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
//   this.yearsOfExperience = yearsOfExperience;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.clean = function () {
//     alert("cleaning in progress...")
//   }
// }

// Adding Objects to invent listener
// var myHouseKeeper_1 = new HouseKeeper(5, "Rechael", ["Sitting Room", "Bath Room"]);
// var myHouseKeeper_2 = new HouseKeeper(3, "Agnes", ["Toilet", "Kitchen", "Living Room"]);
// var myHouseKeeper_3 = new HouseKeeper(8, "Precious", ["First Floor", "Bath Room"]);
// let myHouseKeeper_4 = new HouseKeeper(2, "Emmanuel", "Ground Floor")

// Tapping function in Constructor Function
// myHouseKeeper_4.clean();

// alert(`She Love to clean the ${myHouseKeeper_2.cleaningRepertoire[2]}`)


// Using keypress or keydown, however keydown is the latest in use as keypress is deprecated

// for (let i =0; i<document.querySelectorAll(".drum").length; ++i) {
//   document.querySelectorAll(".drum")[i].addEventListener(keydown, function () {
//     alert("key is down")
//   })
// }

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});


//function key for categoried keys
function playSound(k) {
  switch (k) {
    case "w":
      var sound = new Audio('sounds/tom-1.mp3');
      sound.play();
    break;
    case "w":
      var sound = new Audio('sounds/crash.mp3');
      sound.play();
    break;
    case "a":
      var sound = new Audio('sounds/tom-2.mp3');
      sound.play();
    break;
    case "s":
      var sound = new Audio('sounds/tom-3.mp3');
      sound.play();
    break;
    case "d":
      var sound = new Audio('sounds/tom-4.mp3');
      sound.play();
    break;
    case "j":
      var sound = new Audio('sounds/crash.mp3');
      sound.play();
    break;
    case "k":
      var sound = new Audio('sounds/kick-bass.mp3');
      sound.play();
    break;
    case "l":
      var sound = new Audio('sounds/snare.mp3');
      sound.play();
    break;
    default: console.log(this.innerHTML);
  }
}

//function for button Animation
function buttonAnimation(button) {
  let activeButt =document.querySelector("." + button);
  activeButt.classList.add("pressed");

  setTimeout(function () {
    activeButt.classList.remove("pressed");
  }, 100);
}