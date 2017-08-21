$(function () {
    var img = $("img");
    var percent = $("#percent");
    var num = 0;
    var loader = $(".loader-contain");
    var rotate = $("#rotate");
    console.log(percent.html);
    console.log(rotate.html);
    img.each(function (i) {
            var oImg = new Image();
            oImg.onload = function () {
                oImg.onload = null;
                num++;
                percent.html(parseInt(num/img.length*100) + "%");
                console.log(percent.html)
            };
            if (img.length === i+1) {
                loader.fadeOut();
            }
            oImg.src = img[i].src;
    })
});