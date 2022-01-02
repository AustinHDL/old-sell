
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