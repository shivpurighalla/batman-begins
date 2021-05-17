const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
var thunder, thunder1,thunder2,thunder3,thunder4; 
var engine, world;
var drops = [];
var rand; 
var maxDrops=100; 
var thunderCreatedFrame=0;
var batman,walk1,walk2,walk3,walk4,walk5,walk6,walk7,walk8;


function preload(){
thunder1=loadImage("images/thunderbolt/1.png");
thunder2=loadImage("images/thunderbolt/2.png");
thunder3=loadImage("images/thunderbolt/3.png");
thunder4=loadImage("images/thunderbolt/4.png");
/*
walk1=loadImage("images/walking/walking_1.png");
walk2=loadImage("images/walking/walking_2.png");
walk3=loadImage("images/walking/walking_3.png");
walk4=loadImages("images/walking/walking_4.png");
walk5=loadImage("images/walking/walking_5.png");
walk6=loadImage("images/walking/walking_6.png");
walk7=loadImage("images/walking/walking_7.png");
walk8=loadImage("images/walking/walking_8.png");
*/
}

function setup(){
createCanvas(800,700);
engine=Engine.create();
world=engine.world;

if (frameCount%150 ===-0){
    for(var i=0;i<=maxDrops; i++){
        drops.push (new Drop(random(0,400),random(0,300)));
    }
}



umbrella=new Umbrella(200,500);
    
}

function draw(){
Engine.update(engine);
background("black");
umbrella.display();

for(var i=0;i<=maxDrops; i++){
drops[i].display();
}

}   

