<<<<<<< HEAD
var allimg = document.getElementsByTagName('titleimg');

for(var i = 0; i<allimg.length;i++){

}
=======
var imgs = ["img/title/title_0.png","img/title/title_1.png","img/title/title_2.png","img/title/title_3.png","img/title/title_4.png"]

setInterval(() => {
  imgs.forEach(function (l, index) {
  setTimeout(function () {
    document.getElementById("imgseq").style.backgroundImage = "url(" + l + ")";
  }, index * 500);
});
},500);
>>>>>>> 0f11fb16b4de6ddf0597bac489f7d01ebda9f167
