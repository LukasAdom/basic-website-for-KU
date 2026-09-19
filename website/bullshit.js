<<<<<<< HEAD
var allimg = document.getElementsByTagName('titleimg');
var imgs = ["img/title/title_0.png","img/title/title_1.png","img/title/title_2.png","img/title/title_3.png","img/title/title_4.png"];

let isActive = false;
let animationId = null;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload=function(){
async function gameLoop() {
    if (isActive) {
        for(let i = 0; i < imgs.length; i++){
            document.getElementById("titleimg").style.backgroundImage = "url(" + imgs[i] + ")"
            await delay(175);
        }
        animationId = requestAnimationFrame(gameLoop);
    }
}
    isActive = true;
    gameLoop();
};
=======
var imgs = ["img/title/title_0.png","img/title/title_1.png","img/title/title_2.png","img/title/title_3.png","img/title/title_4.png"]

setInterval(() => {
  imgs.forEach(function (l, index) {
  setTimeout(function () {
    document.getElementById("imgseq").style.backgroundImage = "url(" + l + ")";
  }, index * 500);
});
},500);
>>>>>>> e7a4b653944cad82adf0729553acab97cc12f6cb
