window.onload =function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var p1 = document.getElementsByClassName("p1")[0];
    var p2 = document.getElementsByClassName("p2")[0];
    var p3 = document.getElementsByClassName("p3")[0];
    console.log(audio);
    console.log(p1);
    // 播放完后停止
    audio.addEventListener("ended",function (event) {
        music.setAttribute("class","")
    },false);
    music.addEventListener("touchstart",function (event) {
        if (audio.paused) {
            audio.play();
            // this.setAttribute("class","play")
            this.style.animationPlayState = "running" /* 该方法兼容性很差但交互效果较好 */
        } else {
            audio.pause();
            // this.setAttribute("class","")
            this.style.animationPlayState = "paused" /* 该方法兼容性很差但交互效果较好 */
        }
    },false)
    p1.addEventListener("touchstart",function () {
        p1.style.display = "none";
        p2.style.display = "block";
        p3.style.display = "block";
        p3.style.top = "100%";
        // p1.setAttribute("class","p1 page p1top2");
        // p2.setAttribute("class","p2 page p2_appear");
        setTimeout(function () {
            p2.setAttribute("class","p2 page fadeOut");
            p3.setAttribute("class","p3 page fadeIn");
        }, 5000)
    },false)
};