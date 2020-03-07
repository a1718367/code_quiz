var start = document.querySelector("#start");
var timedisp = document.querySelector("#display");



var num1 = 60;

start.addEventListener("click", function(){
    start.disabled = true;
    var x = setInterval(() => {
        num1 --;
        timedisp.innerHTML = num1;
        if(num1 === 0){
            clearInterval(x);
            timedisp.innerHTML == 0;
            start.disabled = false;
            num1 = 60;
             
        }       
    }, 1000);    

})

function deduct(){
    num1 -= 5;
}
