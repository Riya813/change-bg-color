const clickMe = document.getElementById("click-me");
// function color(){
//     return Math.floor(Math.random() * 255);
// } 

clickMe.addEventListener("click", mypop);
// clickMe.reset();

function mypop(){
    // need to find random number every time this function is called.
    // we can but this looks more readable otherwise line 17-18 will be very long
    // no this will work, 
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var a = Math.random();
    
    clickMe.style.animation = "pop 0.5s 1";
    clickMe.style.backgroundColor = "rgba(" + b + "," + r + "," + g + "," + a + ")";
    document.body.style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    setTimeout(function(){
        clickMe.style.animation = "";
    },500)
}
