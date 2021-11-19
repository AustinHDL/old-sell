	function myFunction() {
		//选择自取还是送货上门
	    var selfp = document.getElementById("self");//自取
	    var send = document.getElementById("keep");//送货上门
	    if (selfp.checked) {
	        document.getElementById("summary-shipping").style.display = "none";
	        document.getElementById("select-cover-1").removeAttribute("onclick");
	        document.getElementById("select-cover-2").removeAttribute("onclick");
	        document.getElementById("select-cover-3").removeAttribute("onclick");
	        document.getElementById("bg-quantity").disabled = false;
	        document.getElementById("bg02-quantity").disabled = false;
	        document.getElementById("hj-quantity").disabled = false;
	        document.getElementById("hz-quantity").disabled = false;
	    } else if (send.checked) {
	        document.getElementById("summary-shipping").style.display = "block";
	        document.getElementById("select-cover-1").removeAttribute("onclick");
	        document.getElementById("select-cover-2").removeAttribute("onclick");
	        document.getElementById("select-cover-3").removeAttribute("onclick");
	        document.getElementById("bg-quantity").disabled = false;
	        document.getElementById("bg02-quantity").disabled = false;
	        document.getElementById("hj-quantity").disabled = false;
	        document.getElementById("hz-quantity").disabled = false;
	    } else {
	        document.getElementById("summary-shipping").style.display = "none";
	        document.getElementById("bg-quantity").disabled = true;
	        document.getElementById("bg02-quantity").disabled = true;
	        document.getElementById("hj-quantity").disabled = true;
	        document.getElementById("hz-quantity").disabled = true;
	    }

	    //白果一包五片
	    var bgprice = 3.50; //RM3.50
	    var bgquantity = document.getElementById("bg-quantity").value;
	    var bgtotal = bgprice * bgquantity;
	    document.getElementById("bg-totalprice").innerHTML = "RM" + bgtotal.toFixed(2);

	    //白果一包十片
	    var bg02price = 6.50; //RM6.50
	    var bg02quantity = document.getElementById("bg02-quantity").value;
	    var bg02total = bg02price * bg02quantity;
	    document.getElementById("bg02-totalprice").innerHTML = "RM" + bg02total.toFixed(2);

	    //红酒
	    var hjprice = 15; //RM15
	    var hjquantity = document.getElementById("hj-quantity").value;
	    var hjtotal = hjprice * hjquantity;
	    document.getElementById("hj-totalprice").innerHTML = "RM" + hjtotal.toFixed(2);
	    if (hjquantity > 2.99) { //卖超过三个
	        document.getElementById("gift").style.display = "block";
	        document.getElementById("iteminfo").style.margin = "0 0 78px";
	    } else {
	        document.getElementById("gift").style.display = "none";
	        document.getElementById("iteminfo").style.margin = "0";
	    }

	    //小计
	    var subtotal = bgtotal + bg02total + hjtotal;
	    document.getElementById("subtotal").innerHTML = "RM" + subtotal.toFixed(2);

	    //运输
	    var original = 0;
	    var pay = 5;
	    if (selfp.checked) {
	        document.getElementById("shipping").innerHTML = "RM" + original.toFixed(2);
	    } else if (send.checked && subtotal < 0.01) {
	        document.getElementById("shipping").innerHTML = "RM" + original.toFixed(2);
	    } else if (send.checked && subtotal > 39.99) {
	        document.getElementById("shipping").innerHTML = "免费";
	    } else {
	        document.getElementById("shipping").innerHTML = "RM" + pay.toFixed(2);
	    }


	    //总数
	    if (selfp.checked) {
	        var total = subtotal;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#1d1d1f";
	    } else if (send.checked && subtotal < 0.01) {
	        var total = subtotal + original;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#1d1d1f";
	    } else if (send.checked && subtotal > 39.99) {
	        var total = subtotal + original;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#1d1d1f";
	    } else {
	        var total = subtotal + pay;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#1d1d1f";
	    }

	}

	//提醒 先选择物流
	function myCheck() {
	    var select = document.getElementsByTagName("select");

	    if (select.disable = true) {
	        document.getElementById("summary-total").innerHTML = "请先选择物流";
	        document.getElementById("summary-total").style.color = "red";
	        window.scrollBy(0, -5000);
	    } 
	}