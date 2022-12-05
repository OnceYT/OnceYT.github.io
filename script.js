var typed = new Typed('#type', {
  strings: ["fabulous", "lovely", "serene", "mesmerizing", "terrific", "great", "delightful", "magical", "wonderful", "awesome", "splendid", "gorgeous", "rewarding", "fine", "glorious", "royal"],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 2200,
  loop: true,
});

window.onload = function(){
  var a = new Date().getDay();
  const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById('day').innerHTML = Days[a]
};
