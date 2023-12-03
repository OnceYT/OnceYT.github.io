document.addEventListener("DOMContentLoaded", function() {
  var flame = document.getElementById('flame');
  var txt = document.querySelector('h1');
  var smokeElements = document.querySelectorAll('.smoke');
  var glow = document.getElementById('glow');
  var candle = document.getElementById('candle');

  flame.addEventListener('click', function() {
    flame.classList.remove('burn');
    flame.classList.add('puff');

    smokeElements.forEach(function(smoke) {
      smoke.classList.add('puff-bubble');
    });

    if (glow) {
      glow.remove();
    }

    if (txt) {
      txt.style.display = 'none';
      txt.innerHTML = "It <b>will</b> come true..";
      setTimeout(function() {
        txt.style.display = 'block';
      }, 750);
    }

    if (candle) {
      candle.style.opacity = '0.5';
    }
  });
});
