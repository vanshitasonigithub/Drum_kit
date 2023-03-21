
var numberofbutton=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofbutton;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

      var buttoninnerhtml=this.innerHTML;
      makesound(buttoninnerhtml);
      Animation(buttoninnerhtml);
      
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    Animation(event.key)
    
}) 

function makesound(key){

    switch(key){
        case"w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    
        case"a":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
    
        case"s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    
        case"d":
        var tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play();
        break;
    
        case"j":
        var tom_2 = new Audio("sounds/tom-2.mp3");
        tom_2.play();
        break;
    
        case"k":
        var tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();
        break;
    
        case"l":
        var tom_4 = new Audio("sounds/tom-4.mp3");
        tom_4.play();
        break;
    
        default:console.log (buttoninnerhtml);
    
    }
}

function Animation(currentkey){
    var activebutton= document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");

    setTimeout (function(){
        activebutton.classList.remove("pressed");
    },100)

}