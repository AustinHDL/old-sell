function screenshot() {

    document.getElementById('btn').style.display = "none";
    var htmlDom = document.getElementById('photo');
    var scale = 1;

    html2canvas(htmlDom, {
        dpi: window.devicePixelRatio * 1,
        scale: scale,
        logging: false,
        useCORS: true
    }).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL(); //下载链接
        link.setAttribute("download", "订单.png");
        link.style.display = "none"; //a标签隐藏
        document.body.appendChild(link);
        link.click();
    });
}