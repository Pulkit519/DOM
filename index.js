var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var dicename= "dice"+randomNumber1+".png";
var targetimage=document.querySelectorAll("img")[0];
targetimage.setAttribute("src",dicename);

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var dicename2="dice"+randomNumber2+".png";
var targetimage2=document.querySelectorAll("img")[1];
targetimage2.setAttribute("src",dicename2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🏁Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins!🏁";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
