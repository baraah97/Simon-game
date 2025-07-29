var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern=[]; 
var userClickedPattern =[];
var level = 0;
var started = false;





function nextSequence(){

    level ++ ; 
    $("#level-title").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4);
   
    var randomChoosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChoosenColor);
    

    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);
    
}

$(".btn").on("click",function(){

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePressed(userChosenColor);
});
  

function playSound(name){
    
        var audio = new Audio("sounds/"+name + ".mp3");
        audio.play();

   
}
function animatePressed(currentColor){
$("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
    
    


} 



$(document).keydown(function(){
    
    if(!started)
        $("#level-title").text("Level "+ level);
    nextSequence();
    started = true;  
});





