let loadscreen = document.querySelector(".load");

var slider = document.querySelector('.container');
var outer = document.querySelector('.bg');
let isDown = false;
let startX;
let scrollLeft;

window.addEventListener('load', function(){

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

  outer.scrollTop = startX;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  slider.scrollLeft = startX;
  console.log(walk);
    outer.scrollTop = x;
});



    loadscreen.style.display = 'none';
})
