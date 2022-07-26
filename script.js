var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var jumpKeys = jump;

//add more keys to jump, spacebar.
//prevent game from lauching until keydown
//add highscore
//add table for scores
//alert username input highscore table


function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },400);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over, Try again. Score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";         
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
