var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors")
var demo = document.getElementById("demo");

var cp = ['rock','paper','scissors'];

rock.addEventListener("click",function(){
  var mathone = Math.floor(Math.random() * 3);
  var res = demo.innerHTML = cp[mathone] 
  if(cp[0] === res){
    console.log('draw')
  }
  else if(res == "scissors"){
    console.log("win")
  }
  else {
    console.log("lose")
  }
})
paper.addEventListener("click",function(){
  var mathone = Math.floor(Math.random() * 3);
  var res = demo.innerHTML = cp[mathone] 
  if(res == "paper"){
    console.log('draw')
  }
  else if(res == "rock"){
    console.log('win')
  }
  else if(res == 'scissors'){
    console.log("lose")
  }
})
scissors.addEventListener("click",function(){
  var mathone = Math.floor(Math.random() * 3);
  var res = demo.innerHTML = cp[mathone] 
  if(res == "scissors"){
    console.log('draw')
  }
  else if(res == "rock"){
    console.log('lose')
  }
  else if(res == 'paper'){
    console.log("win")
  }
})