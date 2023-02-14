VANTA.FOG({
  el: ".bg",
  highlightColor: 0x1a1e69,
  midtoneColor: 0xf385c,
  lowlightColor: 0x146b6b,
  baseColor: 0x4fbccd,
  blurFactor: 0.3,
  speed: 0.5,
  zoom: 0.4
});

const toggleButton = document.querySelector("#sound-toggle");
let isSoundOn = false;
const audioElement = new Audio("assets/media/playback.mp3");

toggleButton.addEventListener("click", function() {
  if (isSoundOn) {
    toggleButton.innerHTML = '<i class="uil uil-volume-mute"></i>';
    audioElement.pause();
  } else {
    toggleButton.innerHTML = '<i class="uil uil-volume-up"></i>';
    audioElement.play();
  }
  isSoundOn = !isSoundOn;
});

var typed = new Typed('#type', {
  strings: ["a fabulous", "a lovely", "a serene", "a mesmerizing", "a terrific", "a great", "a delightful", "a magical", "an wonderful", "an awesome", "a splendid", "a gorgeous", "a rewarding", "a glorious", "a royal", "a beautiful", "a tranquil", "an enchanted", "an uplifting", "an ecstatic"],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 2260,
  loop: true,
  shuffle: true
});

window.onload = function(){
  var dayNumber = new Date().getDay();
  const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById('day').innerHTML = Days[dayNumber]
  const Greetings = ["Hello", "Hola", "Konnichiwa", "Bonjour", "Ni hao", "Ciao", "Salam", "Hallo", "Hoi", "Salut", "Ola", "Namaste"];
  var randomGreeting = Greetings[Math.floor(Math.random() * Greetings.length)];
  document.getElementById('hello').innerHTML = randomGreeting
};

