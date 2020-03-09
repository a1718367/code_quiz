var start = document.querySelector("#start");
var timedisp = document.querySelector("#display");
var button = document.querySelector(".choice");

var a = document.getElementById("btn0");
var b = document.getElementById("btn1");
var c = document.getElementById("btn2");
var d = document.getElementById("btn3");

var q = [
    {question: "what is this animal?",
    choise: ["pig","cat","dog","bat"],
    ans:"pig"},
    {question: "where can you find it?",
    choise: ["zoo","postoffice","sea","farm"],
    ans: "farm"},
    {question: "How many legs do they have?",
    choise: ["1","2","3","4"],
    ans: "4"}
    ]

var i = 0
populate(i);

    
a.addEventListener("click",function(){pick = 0;chkans(pick,i);i+=1;populate(i)})
b.addEventListener("click",function(){pick = 1;chkans(pick,i);i+=1;populate(i)})
c.addEventListener("click",function(){pick = 2;chkans(pick,i);i+=1;populate(i)})
d.addEventListener("click",function(){pick = 3;chkans(pick,i);i+=1;populate(i)}) 
       

function chkans(pick,i){
if(i<q.length){
var pickans = q[i].choise[pick];
if(pickans == q[i].ans){console.log("right")}else{console.log("wrong")}
}else{return}}
    

function populate(j){
    if(j<q.length){
    document.getElementById("question").innerHTML = q[j].question;
    document.getElementById("ans0").innerHTML = q[j].choise[0];
    document.getElementById("ans1").innerHTML = q[j].choise[1];
    document.getElementById("ans2").innerHTML = q[j].choise[2];
    document.getElementById("ans3").innerHTML = q[j].choise[3];
}else{
    return
}
}


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



