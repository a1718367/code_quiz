var startbtn = document.querySelector("#start");
var timedisp = document.querySelector("#display");
var button = document.querySelector(".choice");
var home = document.querySelector("#home");
var ask = document.querySelector("#ask");
var end = document.querySelector("#end");
var feedback = document.querySelector("#feedback");
var mark = document.querySelector("#score");

var a = document.getElementById("btn0");
var b = document.getElementById("btn1");
var c = document.getElementById("btn2");
var d = document.getElementById("btn3");
var save = document.getElementById("save");

var q = [
    {question: "Inside which HTML element do we put the JavaScript?",
    choise: ["<script>","<js>","<scripting>","<javascript>"],
    ans:"<script>"},
    {question: "What is an Array?",
    choise: ["Tag","Object","Number","Style"],
    ans: "Object"},
    {question: "Where do you put styling for html?",
    choise: ["<footer>","<body>","<header>","<head>"],
    ans: "<head>"},
    {question: "What is the world’s most popular front-end component library?",
    choise: ["Strapboot","Bootstrap","Shoestrap","Strapshoes"],
    ans: "Bootstrap"},
    {question: "How do you call a function?",
    choise: ["call myfunction()","myfunction() call","call.myfunction()","myfunction()"],
    ans: "myfunction()"}
    ]

var i = 0
var score = 0
var num1 = 10;
populate(i);

    
a.addEventListener("click",function(){pick = 0;chkans(pick,i);i+=1;populate(i)});
b.addEventListener("click",function(){pick = 1;chkans(pick,i);i+=1;populate(i)});
c.addEventListener("click",function(){pick = 2;chkans(pick,i);i+=1;populate(i)});
d.addEventListener("click",function(){pick = 3;chkans(pick,i);i+=1;populate(i)});
//save,addEventListener("click",function(){save()});
       
//evaluate response - 
function chkans(pick,i){
if(i<q.length){
var pickans = q[i].choise[pick];
if(pickans == q[i].ans){correct();feedback.textContent = "Correct";}else{deduct();feedback.textContent = "Wrong"}
}else{return}}

//populate question & options

function populate(j){
    if(j<q.length){
    document.getElementById("question").textContent = q[j].question;
    document.getElementById("ans0").textContent = q[j].choise[0];
    document.getElementById("ans1").textContent = q[j].choise[1];
    document.getElementById("ans2").textContent = q[j].choise[2];
    document.getElementById("ans3").textContent = q[j].choise[3];
}else{
    
    finish();
    
}
}
//Timer v2 - end test if finish answering all or time reach 0 
startbtn.addEventListener("click", function(){
    startbtn.disabled = true;
    var x = setInterval(()=>{
    
    if(i<q.length && num1 >= 0){
        num1--;
        timedisp.textContent = num1;
    }else{
        clearInterval(x);
        timedisp.textContent = 0;
        finish();
    }
},1000);
start();
})

//time penalty
function deduct(){
    num1 -= 5;
}

//start quiz hide home and diaplay question
function start(){
    home.style.display = 'none';
    ask.style.display = 'block';
}

//score 
function correct(){
    score += 1
}
//finish div hide question and display end
function finish(){
    ask.style.display = 'none';
    end.style.display = 'block';
    mark.textContent = score;
}

function save(){

}
//Timer

// startbtn.addEventListener("click", function(){
//     startbtn.disabled = true;
//     var x = setInterval(() => {
//         num1 --;
//         timedisp.innerHTML = num1;
//         if(num1 === 0){
//             clearInterval(x);
//             timedisp.innerHTML == 0;
//             //startbtn.disabled = false;
//             //num1 = 60;
//             finish();
//         }       
//     }, 1000);    
// start();
// })