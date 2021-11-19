	function myFunction() {
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
	    } else {
	        document.getElementById("gift").style.display = "none";
	    }

	    //小计
	    var subtotal = bgtotal + bg02total + hjtotal;
	    document.getElementById("subtotal").innerHTML = "RM" + subtotal.toFixed(2);

	    //运输
	    var original = 0;
	    var pay = 5;
	    if (subtotal < 0.01) {
	        document.getElementById("shipping").innerHTML = "RM" + original.toFixed(2);
	    } else if (subtotal > 39.99) { //买超过RM40
	        document.getElementById("shipping").innerHTML = "免费";
	    } else {
	        document.getElementById("shipping").innerHTML = "RM" + pay.toFixed(2);
	    };

	    //总数
	    if (subtotal < 0.01) {
	        var total = subtotal + original;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	    } else if (subtotal > 39.99) { //买超过RM40
	        var total = subtotal + original;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	    } else {
	        var total = subtotal + pay;
	        document.getElementById("total").innerHTML = "RM" + total.toFixed(2);
	        document.getElementById("summary-total").innerHTML = "您的订单总价为" + total.toFixed(2) + "令吉。";
	    };
	}