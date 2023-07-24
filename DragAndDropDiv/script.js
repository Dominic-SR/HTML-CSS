const wrapper = document.querySelector(".wrapper");

const header = wrapper.querySelector("#imgPrime");

wrapper.addEventListener("mousedown", function() {
    document.onmousemove = function(e) {
        console.log("X____>",e.clientX,'Y_____>',e.clientY)
        var x = e.clientX;
        var y = e.clientY;
        // x = 480
        // y = 180
        console.log(x > 300 && y > 100);
        if(x > 300 && y > 100){
        wrapper.position = "relative";
        wrapper.style.left = x + "px";
        wrapper.style.top = y + "px";
        }
    };
});

document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});