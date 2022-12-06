VANTA.FOG({
el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x8b8b8b,
  midtoneColor: 0x5d5d5d,
  lowlightColor: 0x272727,
  baseColor: 0x0
})

var typed = new Typed('#type', {
  strings: ["fabulous", "lovely", "serene", "mesmerizing", "terrific", "great", "delightful", "magical", "wonderful", "awesome", "splendid", "gorgeous", "rewarding", "glorious", "royal", "beautiful"],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 2250,
  loop: true,
});

window.onload = function(){
  var dayNumber = new Date().getDay();
  const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById('day').innerHTML = Days[dayNumber]
};

