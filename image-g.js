var imageIndex = 1;
showImages(imageIndex);

function NPimage(n) {
    showImages(imageIndex += n);
}

function myImage(n) {
    showImages(imageIndex = n);
}

function showImages(n) {
    var i;
    var image = document.getElementsByClassName("core-gallery-item");
    var dots = document.getElementsByClassName("dotnav-item");
    if (n > image.length) { imageIndex = 1 }
    if (n < 1) { imageIndex = image.length }
    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    image[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].className += " current";
}