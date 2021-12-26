var wrapper = document.getElementById("nav-items");
var left = document.getElementById("nav-paddle-left");
var right = document.getElementById("nav-paddle-right");
wrapper.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (wrapper.scrollLeft > 0) {
        left.disabled = false;
    } else {
        left.disabled = true;
    }

    var scrollTotal = wrapper.scrollWidth - wrapper.clientWidth;

    if (wrapper.scrollLeft / scrollTotal == 1) {
        right.disabled = true;
    } else {
        right.disabled = false;
    }
}

function scrollToLeft() {
    wrapper.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
}

function scrollToRight() {
    wrapper.scrollTo({
        left: 120,
        behavior: 'smooth'
    });
}

function openEventP(evt, cityName) {
    var i, linkscontent, links;
    linkscontent = document.getElementsByClassName("links-content");
    for (i = 0; i < linkscontent.length; i++) {
        linkscontent[i].style.display = "none";
    }
    links = document.getElementsByClassName("nav-link");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("DOpen").click();