function myFill() {
    var name = document.getElementById("name");
    var namebox = document.getElementById("text-box-1");
    if (name.value.length > 0) {
        name.classList.add("form-textbox-entered");
        namebox.classList.remove("is-error");

    } else {
        name.classList.remove("form-textbox-entered");
        namebox.classList.add("is-error");
	}
}

function myFill2() {
    var hp = document.getElementById("hpnumber");
    var hpbox = document.getElementById("text-box-2");
    if (hp.value.length > 0) {
        hp.classList.add("form-textbox-entered");
        hpbox.classList.remove("is-error");

    } else {
        hp.classList.remove("form-textbox-entered");
        hpbox.classList.add("is-error");
	}
}

function myFill3() {
    var addr = document.getElementById("address");
    var addrbox = document.getElementById("text-box-3");
    if (addr.value.length > 0) {
        addr.classList.add("form-textbox-entered");
        addrbox.classList.remove("is-error");

    } else {
        addr.classList.remove("form-textbox-entered");
        addrbox.classList.add("is-error");

    }
}

function myFill4() {
    var date = document.getElementById("date");
    var datebox = document.getElementById("text-box-4");
    if (date.value.length > 0) {
        datebox.classList.remove("is-error");

    } else {
        datebox.classList.add("is-error");

    }
}