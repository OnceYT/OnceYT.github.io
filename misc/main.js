var element = document.getElementById("tiny");
function changeContent() {
  setTimeout(function() {
    element.style.animation = 'fade-in 0.2s ease';
    element.textContent = "hi,";
    setTimeout(function() {
      element.style.animation = 'fade-in 0.2s ease';
      element.textContent = "nisha";
      setTimeout(function() {
        element.style.animation = 'fade-in 0.2s ease';
        element.textContent = "tinyigluu";
        setTimeout(function() {
          element.style.animation = 'fade-in 0.2s ease';
          element.textContent = "tint";
          setTimeout(function() {
            element.style.animation = 'fade-in 0.2s ease';
            element.textContent = "ting";
            setTimeout(function() {
              element.style.animation = 'fade-in 0.2s ease';
              element.textContent = "tony";
              setTimeout(function() {
                element.style.animation = 'fade-in 0.2s ease';
                element.textContent = "Tiny!";
              }, 1000);
            }, 1000);
          }, 1000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 1000);
}

function fadeOut() {
  setTimeout(function() {
    element.style.animation = 'fade-out 0.2s ease';
    setTimeout(function() {
      element.style.animation = 'fade-out 0.2s ease';
      setTimeout(function() {
        element.style.animation = 'fade-out 0.2s ease';
        setTimeout(function() {
          element.style.animation = 'fade-out 0.2s ease';
          setTimeout(function() {
            element.style.animation = 'fade-out 0.2s ease';
            setTimeout(function() {
              element.style.animation = 'fade-out 0.2s ease';
              setTimeout(function() {
                element.style.animation = 'animateGradient 5s linear infinite';
              }, 1000);
            }, 1000);
          }, 1000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 800);
}

document.addEventListener("DOMContentLoaded", function() {
  changeContent();
  fadeOut()
  
  setTimeout(function() {
    document.querySelectorAll('.background, .main-nav').forEach(function(element) {
      element.style.animation = 'fadeIn 3.5s ease';
      element.style.opacity = 0.85;
    });
    document.querySelectorAll('#tiny').forEach(function(element) {
      element.style.animation = 'animateGradient 5s linear infinite';
    });
  }, 15000);
  
  setTimeout(function() {
    document.querySelectorAll('.main-nav li.item6, .main-nav li.item1, .main-nav li.item2, .main-nav li.item3, .main-nav li.item4, .main-nav li.item5').forEach(function(element) {
      element.style.opacity = '0.65';
      element.style.animation = 'none';
    });
  }, 18500);
});

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    console.log('mobile');
    document.body.classList.add('mobile-device');
}

const introVideo = document.getElementById('intro-video');
setTimeout(function() {
  introVideo.play();
}, 12000);

VANTA.FOG({
  el: ".background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 8,
  scaleMobile: 14,
  highlightColor: 0x44336b,
  midtoneColor: 0x7b50b9,
  lowlightColor: 0xd744bc,
  baseColor: 0x28235c,
  blurFactor: 0.42,
  speed: 0.80,
  zoom: 0.30
});

const listItems = document.querySelectorAll('.main-nav li');

listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    listItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style.zIndex = '0';
      }
    });
    item.style.zIndex = '1';
  });
});

const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/1ee8f271b9.js";
document.body.appendChild(script);

let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition,
};

const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ["249 146 253", "252 254 255"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall-1", "fall-2", "fall-3"],
};

let count = 0;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  selectRandom = (items) => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
  px = (value) => withUnit(value, "px"),
  ms = (value) => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const calcElapsedTime = (start, end) => end - start;

const appendElement = (element) => document.body.appendChild(element),
  removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const createStar = (position) => {
  const star = document.createElement("span"),
    color = selectRandom(config.colors);

  star.className = "star fa-solid fa-sparkle";

  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.starAnimationDuration = ms(config.starAnimationDuration);

  appendElement(star);

  removeElement(star, config.starAnimationDuration);
};

const createGlowPoint = (position) => {
  const glow = document.createElement("div");

  glow.className = "glow-point";

  glow.style.left = px(position.x);
  glow.style.top = px(position.y);

  appendElement(glow);

  removeElement(glow, config.glowDuration);
};

const determinePointQuantity = (distance) => Math.max(
  Math.floor(distance / config.maximumGlowPointSpacing),
  1
);

const createGlow = (last, current) => {
  const distance = calcDistance(last, current),
    quantity = determinePointQuantity(distance);

  const dx = (current.x - last.x) / quantity,
    dy = (current.y - last.y) / quantity;

  Array.from(Array(quantity)).forEach((_, index) => {
    const x = last.x + dx * index,
      y = last.y + dy * index;

    createGlowPoint({ x, y });
  });
};

const updateLastStar = (position) => {
  last.starTimestamp = new Date().getTime();

  last.starPosition = position;
};

const updateLastMousePosition = (position) => (last.mousePosition = position);

const adjustLastMousePosition = (position) => {
  if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

// Function to handle cursor movement (for PC)
const handleCursorMove = (position) => {
  adjustLastMousePosition(position);

  const now = new Date().getTime();
  const hasMovedFarEnough = calcDistance(last.starPosition, position) >= config.minimumDistanceBetweenStars;
  const hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

  if (hasMovedFarEnough || hasBeenLongEnough) {
    createStar(position);
    updateLastStar(position);
  }

  createGlow(last.mousePosition, position);
  updateLastMousePosition(position);
};

// Event listener for cursor movement (PC)
window.addEventListener('mousemove', (e) => {
  const cursorPosition = { x: e.clientX, y: e.clientY };
  handleCursorMove(cursorPosition);
});

// Event listener for touch movement (Mobile)
window.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const touchPosition = { x: touch.clientX, y: touch.clientY };
  handleCursorMove(touchPosition);
});

// Event listener for touch end (Mobile)
document.body.addEventListener('touchend', () => updateLastMousePosition(originPosition));
