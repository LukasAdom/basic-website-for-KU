let loadscreen = document.querySelector(".load");
const slider = document.body;

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.clientX;
    scrollLeft = window.scrollX;
    console.log(startX);
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
    if(!isDown){ return; }
    e.preventDefault();
    const x = e.clientX;
    const scrl = (x - startX);
    window.scrollTo({left: scrollLeft - scrl * 2});
});

window.addEventListener('load', function(){
    loadscreen.style.display = 'none';
})
