// play a game

const canva=document.getElementById("snake");
const methods=canva.getContext("2d");

// create a one unit box

const box=18;
const end="Game Over-Score : ";

// load the required images

let ground=new Image();
ground.src="https://hackernoon.com/hn-images/1*uDa6vNhI1zlfkkuqs_MgwA.png"

let fruitimg=new Image();
fruitimg.src="New folder/fruit.png"

const gameover=new Audio();
gameover.src="New folder/gameover.mp3";

const egg = new Audio();
egg.src="New folder/eggsound.mp3";


// create the snake 

 
let snake = [];
snake[0]={
    x : 4*box,
    y : 3*box
}

// create fruit in quadrant

let fruit = {
    x : Math.floor(Math.random()*25+3) * box ,
    y : Math.floor(Math.random()*25+2) * box 
}

// implement score succesively

let score=0;
let d;

document.addEventListener("keydown",direction);
function direction(event){
    if(event.keyCode==37 && d!="RIGHT"){
        d="LEFT";
    }
    else  if(event.keyCode==38 && d!="DOWN"){
        d="UP";
    }
    else  if(event.keyCode==39 && d!="LEFT"){
        d="RIGHT";
    }
    else  if(event.keyCode==40 && d!="UP"){
        d="DOWN";
    } 
}

// collision occurs

function dead(head, array){
    for(let i=0; i<array.length; i++){
        if(head.x==array[i].x && head.y==array[i].y){
            return true;
        }   
    }
    return false;
}


// now implement the function 

function draw(){
    methods.drawImage(ground,0,0)

     for(let i=0;i<snake.length;i++){
         methods.fillStyle=(i==0)? "green" : "green";
         methods.fillRect(snake[i].x,snake[i].y,box,box);
        methods.strokeStyle="red";
        methods.strokeRect(snake[i].x,snake[i].y,box,box)
     }
     

    // create head that changes every time
    methods.drawImage(fruitimg,fruit.x,fruit.y);
      
     let snakeX=snake[0].x;
     let snakeY=snake[0].y;

    
     if(d=="LEFT") snakeX-=box;
     if(d=="RIGHT") snakeX+=box;
     if(d=="UP") snakeY-=box;
     if(d=="DOWN") snakeY+=box;

     // conditions to increas the snake when eats fruit
     if(snakeX==fruit.x && snakeY==fruit.y){
         egg.play();
        score= score+10;
         fruit={
             x : Math.floor(Math.random()*20+3)*box,
             y : Math.floor(Math.random()*25+3)*box
         }
     }else{
        snake.pop();
     }


     let newhead={
        x : snakeX,
        y : snakeY
    }
     

     // rules to quit from game

     if(snakeX < -0.25*box || snakeX >33*box || snakeY <-0.25*box || snakeY > 33*box || dead(newhead,snake)){
        gameover.play();
        methods.fillStyle="black";
        methods.font="45px Changa one";
        methods.fillText(end, 10*box,2*box);
        
       clearInterval(start);
     }

     
     

     // unshift to clear the passed blocks

     snake.unshift(newhead);


     methods.fillStyle="red";
     methods.font="45px Changa one";
     methods.fillText(score, 29*box,2.1*box);
    
   
}

// timer to call the method

let start = setInterval(draw,100);
