var start = document.querySelector("#start");
var timedisp = document.querySelector("#display");
var button = document.querySelector(".choice");

var a = document.getElementById("btn0");
var b = document.getElementById("btn1");
var c = document.getElementById("btn2");
var d = document.getElementById("btn3");




//Timer
var num1 = 60;
var prog = 0
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
//time penalty
function deduct(){
    num1 -= 5;
}

var q = {
    Question: ['What is HTML?', 'What is javascript?'], 
    option: [['option11','option12','option13','option14'],
            ['option21','option22','option23','option24']]
    , answ: ['option13','option24']
}
//populate Q & option
var i = 0;
    button.addEventListener("click",function test(){
    document.getElementById("question").innerHTML = q.Question[i];
    document.getElementById("ans0").innerHTML = q.option[i][0];
    document.getElementById("ans1").innerHTML = q.option[i][1];
    document.getElementById("ans2").innerHTML = q.option[i][2];
    document.getElementById("ans3").innerHTML = q.option[i][3];
    
    i++;
    console.log(i)
    
})


