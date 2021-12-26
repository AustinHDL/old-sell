	function myFunction() {
		//选择自取还是送货上门
	    var selfp = document.getElementById("self");//自取
	    var send = document.getElementById("keep");//送货上门
	    if (selfp.checked) {
	        document.getElementById("summary-shipping").style.display = "none";
	        document.getElementById("address-box").style.display = "none";
	        document.getElementById("pick-box").style.display = "block";
	        document.getElementById("select-cover-1").removeAttribute("onclick");
	        document.getElementById("select-cover-2").removeAttribute("onclick");
	        document.getElementById("select-cover-3").removeAttribute("onclick");
	        document.getElementById("bg-quantity").disabled = false;
	        document.getElementById("hj-quantity").disabled = false;
	        document.getElementById("ng-quantity").disabled = false;
	    } else if (send.checked) {
	        document.getElementById("summary-shipping").style.display = "block";
	        document.getElementById("address-box").style.display = "block";
	        document.getElementById("pick-box").style.display = "none";
	        document.getElementById("select-cover-1").removeAttribute("onclick");
	        document.getElementById("select-cover-2").removeAttribute("onclick");
	        document.getElementById("select-cover-3").removeAttribute("onclick");
	        document.getElementById("bg-quantity").disabled = false;
	        document.getElementById("hj-quantity").disabled = false;
	        document.getElementById("ng-quantity").disabled = false;
	    } else {
	        document.getElementById("summary-shipping").style.display = "none";
	        document.getElementById("address-box").style.display = "block";
	        document.getElementById("pick-box").style.display = "block";
	        document.getElementById("bg-quantity").disabled = true;
	        document.getElementById("hj-quantity").disabled = true;
	        document.getElementById("ng-quantity").disabled = true;
	    }

	    //白果一包五片
	    var bgprice = 3.50; //RM3.50
	    var bgquantity = document.getElementById("bg-quantity").value;
	    var bgtotal = bgprice * bgquantity;
	    document.getElementById("bg-totalprice").innerHTML = "RM" + bgtotal.toFixed(2);

	    //红酒
	    var hjprice = 15; //RM15
	    var hjquantity = document.getElementById("hj-quantity").value;
	    var hjtotal = hjprice * hjquantity;
	    document.getElementById("hj-totalprice").innerHTML = "RM" + hjtotal.toFixed(2);

		//年糕
	    var ngprice = 4; //RM15
	    var ngquantity = document.getElementById("ng-quantity").value;
	    var ngtotal = ngprice * ngquantity;
	    document.getElementById("ng-totalprice").innerHTML = "RM" + ngtotal.toFixed(2);

	    //小计
	    var subtotal = bgtotal + hjtotal + ngtotal;
	    document.getElementById("subtotal").innerHTML = "RM" + subtotal.toFixed(2);

	    //运输
	    var original = 0;
	    var pay3 = 3;
	    var pay5 = 5;
	    if (selfp.checked) {
	        document.getElementById("shipping").innerHTML = "RM" + original.toFixed(2);
	    } else if (send.checked && subtotal < 0.01) {
	        document.getElementById("shipping").innerHTML = "RM" + original.toFixed(2);
	    } else if (send.checked && subtotal > 39.99 && subtotal < 49.99) {
	        document.getElementById("shipping").innerHTML = "RM" + pay3.toFixed(2);
	    } else if (send.checked && subtotal > 49.99) {
	        document.getElementById("shipping").innerHTML = "免费";
	    } else {
	        document.getElementById("shipping").innerHTML = "RM" + pay5.toFixed(2);
	    }

	    //总数
	    if (selfp.checked) {
	        var total = subtotal;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("product-select-total").innerHTML = "总数：RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#6667AA";
	    } else if (send.checked && subtotal < 0.01) {
	        var total = subtotal + original;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("product-select-total").innerHTML = "总数：RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#6667AA";
	    } else if (send.checked && subtotal > 39.99 && subtotal < 49.99) {
	        var total = subtotal + pay3;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("product-select-total").innerHTML = "总数：RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#6667AA";
	    } else if (send.checked && subtotal > 49.99) {
	        var total = subtotal + original;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("product-select-total").innerHTML = "总数：RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#6667AA";
	    } else {
	        var total = subtotal + pay5;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("product-select-total").innerHTML = "总数：RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	        document.getElementById("summary-total").style.color = "#6667AA";
	    }

	    //隐藏讯息
	    if (bgquantity > 0) {
	    	document.getElementById("customer").style.display = "block";
	    } else if (hjquantity > 0) {
	    	document.getElementById("customer").style.display = "block";
	    } else {
	    	document.getElementById("customer").style.display = "none";
	    }
	}

	//提醒 先选择物流
	function myCheck() {
	    var select = document.getElementsByTagName("select");

	    if (select.disabled = true) {
	        document.getElementById("summary-total").innerHTML = "请先选择物流";
	        document.getElementById("summary-total").style.color = "#F4C282";
	        window.scrollBy(0, -5000);
	    } 
	}