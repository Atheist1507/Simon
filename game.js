var gamePattern=[];
 
var buttonColours=["red", "blue", "green", "yellow"];
 
function nextSequence(){
 
var randomNumber1=Math.random();
 
randomNumber1=Math.floor(randomNumber1*4);
 
var randomChosenColour=buttonColours[randomNumber1];
 
gamePattern.push(randomChosenColour);
 
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
 

var audio=new Audio("sounds/"+randomChosenColour+".mp3")
audio.play();

 
 
}
 

