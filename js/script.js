

var countDownDate = new Date("Aug 17, 2021 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;


    var days =Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours =Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes =Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    var seconds =Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("launch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("launch").innerHTML = "EXPIRED";
    }


}, 1000);


var slideImg = document.getElementById("slideImg");

var images = new Array(

    "images/logo.png",
    "images/amis4.jpg",
    "images/woman-570883_1920.jpg"
   
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}