const toggleColorButton = document.querySelector("#color-mode-toggle");
let isLightMode = false;

function isDarkModeEnabled() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleColorButton.innerHTML = '<i class="uil uil-moon"></i>';
        isLightMode = true;
        setTimeout(function () {
            vanta = VANTA.FOG({
                el: "#bg",
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                scale: 4,
                scaleMobile: 8,
                highlightColor: 0x313130,
                midtoneColor: 0xbababa,
                lowlightColor: 0x3c3c3e,
                baseColor: 0x0,
                blurFactor: 0.3,
                speed: 0.5,
                zoom: 0.4
            });
        }, 6200);
    } else {
        toggleColorButton.innerHTML = '<i class="uil uil-sun"></i>';
        isLightMode = false;
        setTimeout(function () {
            vanta = VANTA.FOG({
                el: "#bg",
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                scale: 4,
                scaleMobile: 8,
                highlightColor: 0x1a1e69,
                midtoneColor: 0xf385c,
                lowlightColor: 0x146b6b,
                baseColor: 0x4fbccd,
                blurFactor: 0.3,
                speed: 0.5,
                zoom: 0.4
            });
        }, 6200);
    }
}

const background = document.querySelector("#bg");
toggleColorButton.addEventListener("click", function() {
  toggleColorButton.style.opacity = 0.83;
  background.style.opacity = 1;
  toggleColorButton.style.top = '10px';
  toggleColorButton.classList.remove("color-mode-toggle-reveal")
  background.classList.remove("background-reveal")
  background.classList.add("background-animate");
  toggleColorButton.classList.add("color-mode-toggle-click-animate");
    setTimeout(function() {
      background.style.opacity = 1;
      toggleColorButton.style.opacity = 0.83;
      background.classList.remove("background-animate");
      toggleColorButton.classList.remove("color-mode-toggle-click-animate");
    }, 1000);
  if (isLightMode) {
    lightOptions = {
      highlightColor: 0x1a1e69,
      midtoneColor: 0xf385c,
      lowlightColor: 0x146b6b,
      baseColor: 0x4fbccd
    }
    setTimeout(function() {
      vanta.setOptions(lightOptions);
      toggleColorButton.innerHTML = '<i class="uil uil-sun"></i>';
    }, 500);
  } else {
    darkOptions = {
      highlightColor: 0x313130,
      midtoneColor: 0xbababa,
      lowlightColor: 0x3c3c3e,
      baseColor: 0x0
    }
    setTimeout(function () {
      vanta.setOptions(darkOptions);
      toggleColorButton.innerHTML = '<i class="uil uil-moon"></i>';
    }, 500);
  }
  isLightMode = !isLightMode;
});

const toggleSoundButton = document.querySelector("#sound-toggle");
let isSoundOn = false;
const audioElement = new Audio("assets/media/playback.mp3");
toggleSoundButton.addEventListener("click", function() {
  toggleSoundButton.style.opacity = 0.83;
  toggleSoundButton.style.left = '10px';
  toggleSoundButton.classList.remove('sound-toggle-reveal');
  toggleSoundButton.classList.add('sound-toggle-click-animate');
  setTimeout(function() {
    toggleSoundButton.classList.remove('sound-toggle-click-animate');
  }, 1000);
  if (isSoundOn) {
    setTimeout(function() {
    toggleSoundButton.innerHTML = '<i class="uil uil-volume-mute"></i>';
    }, 500);
    audioElement.pause();
  } else {
    setTimeout(function() {
      toggleSoundButton.innerHTML = '<i class="uil uil-volume-up"></i>';
    }, 500);
    audioElement.play();
  }
  isSoundOn = !isSoundOn;
});

var fps = document.getElementById("fps-counter");
var startTime = Date.now();
var frame = 0;
function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      fps.innerHTML = Math.round(frame / ((time - startTime) / 1000).toFixed(1));
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
};

var typed = new Typed('#type', {
  strings: ["a fabulous", "a lovely", "a bountiful", "a serene", "a mesmerizing", "a terrific", "a great", "a delightful", "a magical", "an wonderful", "an awesome", "a chill", "a splendid", "a gorgeous", "a rewarding", "a glorious", "a royal", "a beautiful", "a tranquil", "an enchanted", "an uplifting", "an ecstatic"],
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
  const Greetings = ["Hello!", "Hola!", "Konnichiwa!", "Bonjour!", "Ni hao!", "Ciao!", "Salam!", "Hallo!", "Hoi!", "Salut!", "Ola!", "Namaste!"];
  var randomGreeting = Greetings[Math.floor(Math.random() * Greetings.length)];
  document.getElementById('hello').innerHTML = randomGreeting
};

isDarkModeEnabled();
tick();
