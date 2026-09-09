var imgs = ["img/title/title_0.png","img/title/title_1.png","img/title/title_2.png","img/title/title_3.png","img/title/title_4.png"]
let loopclosed = false

setInterval(() => {
  imgs.forEach(function (l, index) {
  setTimeout(function () {
	  console.log(index);
    document.getElementById("imgseq").style.backgroundImage = "url(" + l + ")";
  }, index * 500);
});
},500);