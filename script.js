const buttons9 = document.querySelector("#nine");
const buttons8 = document.querySelector("#eight");
const buttons7 = document.querySelector("#seven");
const buttons6 = document.querySelector("#six");
const buttons5 = document.querySelector("#five");
const buttons4 = document.querySelector("#four");
const buttons3 = document.querySelector("#three");
const buttons2 = document.querySelector("#two");
const buttons1 = document.querySelector("#one");
const buttons0 = document.querySelector("#zero");
const dash = document.querySelector(".dash");
const divide = document.querySelector("#divide");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const Clear = document.querySelector("#clear");

let firstNum = "";
let secondNum = "";
let operand = ""; 

add.addEventListener("click" , ()=> {
  operand = "+";
  secondNum = "";
  dash.innerHTML += "<p>"+ operand+ "</p>";
});

divide.addEventListener("click" , ()=> {
  operand = "/";
  secondNum = "";
  dash.innerHTML += "<p>"+ operand+ "</p>";
});

subtract.addEventListener("click" , ()=> {
  operand = "-";
  secondNum = "";
  dash.innerHTML += "<p>"+ operand+ "</p>";
});

multiply.addEventListener("click" , ()=> {
  operand = "*";
  secondNum = "";
  dash.innerHTML += "<p>"+ operand+ "</p>";
});

buttons1.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "1";
    dash.innerHTML += "<p>" + "1" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "1";
    dash.innerHTML += "<p>" + "1" + "</p>";
  }
});

buttons2.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "2";
    dash.innerHTML += "<p>" + "2" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "2";
    dash.innerHTML += "<p>" + "2" + "</p>";
  }
  console.log(dash.innerHTML); 
});

buttons3.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "3";
    dash.innerHTML += "<p>" + "3" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "1";
    dash.innerHTML += "<p>" +  "3"  + "</p>";
  }
});

                        
buttons4.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "4";
    dash.innerHTML += "<p>" + "4" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "4";
    dash.innerHTML += "<p>" +  "4"  + "</p>";
  }
});

buttons5.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "5";
    dash.innerHTML += "<p>" + "5" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "5";
    dash.innerHTML += "<p>" +  "5"  + "</p>";
  }
});


buttons6.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "6";
    dash.innerHTML += "<p>" + "6" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "6";
    dash.innerHTML += "<p>" +  "6"  + "</p>";
  }
});

buttons7.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "7";
    dash.innerHTML += "<p>" + "7" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "7";
    dash.innerHTML += "<p>" +  "7"  + "</p>";
  }
});


buttons8.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "8";
    dash.innerHTML += "<p>" + "8" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "8";
    dash.innerHTML += "<p>" +  "8" + "</p>";
  }
});


buttons9.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "9";
    dash.innerHTML += "<p>" + "9" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "9";
    dash.innerHTML += "<p>" +  "9"  + "</p>";
  }
});
buttons0.addEventListener("click", () => {
  if (operand === "") {
    firstNum += "0";
    dash.innerHTML += "<p>" + "0" + "</p>";
    console.log(firstNum);
  } else {
    secondNum += "0";
    dash.innerHTML += "<p>" +  "0"  + "</p>";
  }
});


function operate (){
  console.log("dash", dash)
  console.log("firstNum", firstNum)
  console.log("operant", operand)
  console.log("secondNum", secondNum)
  let number1 =  Number(firstNum);
  let number2 = Number(secondNum);
  let result ;
  if(operand == "+"){
     result = number1 + number2 ; 
    dash.innerHTML =  result ;
    firstNum = result;
    console.log("lol", firstNum)
    
} else if (operand == "-"){
    result = number1 - number2 ; 
    dash.innerHTML =  result ;
    firstNum = result;
    console.log("lol", firstNum)
  
} else if (operand == "/"){
    result = number1 / number2 ; 
    dash.innerHTML =  result ;
    firstNum = result;
    console.log("lol", firstNum) 
  
}else if (operand == "*"){
    result = number1 * number2 ; 
    dash.innerHTML =  result ;
    firstNum = result;
    console.log("lol", firstNum) }}



Clear.addEventListener("click",()=>{
  
  dash.innerHTML =  "";
  firstNum = "";
  secondNum = "";
  operand = ""; 
});