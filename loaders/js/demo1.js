/**
 * Created by sk on 2017/8/20.
 */
document.onreadystatechange = function () {
    console.log(document.readyState);
    if(document.readyState == "complete"){
        $(".loader-contain").fadeOut();
    }
};