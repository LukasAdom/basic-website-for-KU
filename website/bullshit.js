function functieArray() {
    var gallery = document.getElementById("pozeGallery");
    for (i = 0; i < imgArray.length; i++) {
        gallery.appendChild(imgArray[i]);
    }
};