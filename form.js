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
    var selfp = document.getElementById("self");
    if (addr.value.length > 0) {
        addr.classList.add("form-textbox-entered");
        addrbox.classList.remove("is-error");
        selfp.disabled = true; //如果地址栏有字 不能选择自取
    } else {
        addr.classList.remove("form-textbox-entered");
        addrbox.classList.add("is-error");
        selfp.disabled = false;
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

function myFill5() {
    var pickup = document.getElementById("pickup");
    var pickupbox = document.getElementById("text-box-5");
    var send = document.getElementById("keep");//送货上门
    if (pickup.value.length > 0) {
        pickupbox.classList.remove("is-error");
        send.disabled = true;//如果取货地点被选择，不能选择送货上门
    } else {
        pickupbox.classList.add("is-error");
        send.disabled = false;
    }
}

function myGeB() {
    var nameG = document.getElementById("name");
    var hpG = document.getElementById("hpnumber");

    if (nameG.value.length > 0 && hpG.value.length > 0) {
        document.getElementById("form-button").disabled = false;
    } else {
        document.getElementById("form-button").disabled = true;
    }
}
