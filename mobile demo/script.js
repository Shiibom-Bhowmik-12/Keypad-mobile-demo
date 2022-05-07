console.log("hello this is demo");
let h=document.getElementById('hi');
var k=document.getElementById('display');
var ele=document.getElementsByClassName("b");
var sel=document.querySelectorAll(".b")

for(let i=0;i<ele.length;i++){
  if((ele[i].value>=0 && ele[i].value<=9) || ele[i].value== " * " || ele[i].value== " # "){
      ele[i].style.color="white";
      ele[i].style.backgroundColor="black";
  }
  // else if(ele[i].value==1 || (ele[i].value>=8 && ele[i].value<=9)){
  //   ele[i].style.color="white";
  //   ele[i].style.backgroundColor="violet";
  // }
}

k.style.color="white";


let audio = new Audio("beep.wav");
let message="";
function myf1(){
  document.getElementById("display").value += "1";
  message+="1";
  audio.play();
}

function myf2(){
  document.getElementById("display").value += "2";
  message+="2";
  audio.play();
}

function myf3(){
  document.getElementById("display").value += "3";
  message+="3";
  audio.play();
}

function myf4(){
  document.getElementById("display").value += "4";
  message+="4";
  audio.play();
}

function myf5(){
  document.getElementById("display").value += "5";
  message+="5";
  audio.play();
}

function myf6(){
  document.getElementById("display").value += "6";
  message+="6";
  audio.play();
}

function myf7(){
  document.getElementById("display").value += "7";
  message+="7";
  audio.play();
}

function myf8(){
  document.getElementById("display").value += "8";
  message+="8";
  audio.play();
}

function myf9(){
  document.getElementById("display").value += "9";
  message+="9";
  audio.play();
}

let audio1 = new Audio("Thankyou Full Flute.mp3");
let emr = new Audio("emergency.mp3");
let flag=1;

//CALL
function myf10(){
  if(document.getElementById("display").value == ""){
    alert("Please type a 10 digit number to call or an emergency number to continue!");
  }
  else if(message.length==10 && flag==1){
    document.getElementById("display").value = "CALLING +91 "+message;
    audio1.play();
    flag=0;
    setTimeout(mytemp,30000)
  }
  else if(message.length==3 && message[0]=="1" && message[1]=="0" && flag==1){
    document.getElementById("display").value = "EMERGENCY NUMBER";
    document.getElementById("display").style.backgroundColor="red";
    emr.play();
    flag=0;
    setTimeout(mytemp,8000);
    setTimeout(changecolor,8000);
  }
  else{
    alert("Please enter a valid 10 digit number or valid EMERGENCY NUMBER!")
  }
}

var audio2 = new Audio("disc.mp3");

//DELETE
function myf11(){
  if(document.getElementById("display").value == ""){
    alert("Please type a 10 digit number to call or an emergency number to continue!");
  }
  else if((message.length>=3 && message.length<=10) && flag==0){
    document.getElementById("display").value= "CALL DISCONNECTED!";
    audio1.pause();
    audio1.currentTime=0;
    // audio1.muted=true;
    audio2.play();
    flag=1;
    emr.pause();
    emr.currentTime=0;
    setTimeout(mytemp,6000)
  }
}

var audio3=new Audio("busy tune.mp3")

//END
function myf12(){
  if(document.getElementById("display").value == ""){
    alert("Please type a 10 digit number to call or an emergency number to continue!");
  }
  else if((message.length>=3 && message.length<=10) && flag==0){
    document.getElementById("display").value = "**CALL ENDED**";
    audio2.pause();
    audio2.currentTime=0;
    audio1.pause();
    audio1.currentTime=0;
    // audio1.muted=true;
    // audio2.muted=true;
    audio3.play();
    emr.pause();
    emr.currentTime=0;
    flag=1;
    setTimeout(mytemp,20000)
  }
}


function myf13(){
  document.getElementById("display").value += "*";
  message+="*";
  audio.play();
}

function myf14(){
  document.getElementById("display").value += "0";
  message+="0";
  audio.play();
}

function myf15(){
  document.getElementById("display").value += "#";
  message+="#";
  audio.play();
}

function mytemp(){
  document.getElementById("display").value = "";
}

function changecolor(){
  document.getElementById("display").style.backgroundColor="black";
}
