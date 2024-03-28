let tableWidth =800 ;
let tableHeigh= 600;
let smEusebiuX = 500;
let smEusebiuY = 400;
let directionX= 1;


function setup(){
    createCanvas (tableWidth,tableHeigh); 
}
function draw(){

background("yellow"); 
checkLimitsSMEusebiu();
  smilefaceEusebiu(smEusebiuX, smEusebiuY);
  smilyFaceRafha(400,300);
  smilefaceDavid(400,300);

}

function smilyFaceRafha(x,y){
   
stroke("black");
circle(x,y,50);

//eyes
//circle(390,290,5);
//circle(410,290,5);
stroke("black");
ellipse(x-10,y-10,2);
ellipse(x+110,y-10,2);
//pupils
stroke("blue");
fill("blue");
circle(x-10,y-19,2);
circle(x+10,y-10,2);

//mounth
fill("yellow");
stroke("red");
arc(x, y+7, 20, 10, 0, Math.PI)
//obrajori

}
function checkLimitsSMEusebiu(){
  if(smEusebiuX >= tableWidth)
  directionX *= -1;
  smEusebiuX += directionX;  
}

function smilefaceEusebiu(x,y){
        //body
fill("lime");
stroke("black");
circle(x,y,50);
//eyes
//ellipse(390,290,10,5);
//ellipse(410,290,10,5);

stroke("black");
circle(x-10,y-10,10);
circle(x+10,y-10,10);

//pupils
stroke("blue");
fill("blue");
circle(x-10,y-10,4);
circle(x+10,y-10,4);

//mounth
fill("lime");
stroke("red");
arc(x, y+7.5, 20, 10, 0, Math.PI)
//obrajori 
}

function smilefaceDavid(x,y){
//body
stroke("black");
circle(x, y,50);
//eyes
ellipse(x-10,y-10,10,5);
ellipse(x+10,y-10,10,5);

stroke("black");
circle(x-10,y-10,10);
circle(x+10,y-10,10);

//pupils
stroke("red");
fill("blue");
circle(x-10,y-10,4);
circle(x+10,y-10,4);

//mounth
fill("yellow");
stroke("red");
arc(x, y+10, 20, 10, 0, Math.PI)
//obrajori
}