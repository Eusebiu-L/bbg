function setup(){
    createCanvas (800,600);
}
function draw(){

background("yellow");
smilefaceEusebiu();
smilefaceDavid(200,300);

}
function smilyFaceRafha(){
    background("white");

    
}
function smilefaceEusebiu(){
        //body


stroke("black");
circle(400,300,50);
//eyes
//ellipse(390,290,10,5);
//ellipse(410,290,10,5);

stroke("black");
circle(390,290,10);
circle(410,290,10);

//pupils
stroke("blue");
fill("blue");
circle(390,290,4);
circle(410,290,4);

//mounth
fill("yellow");
stroke("red");
arc(400, 307.5, 20, 10, 0, Math.PI)
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
fill("blue");
stroke("red");
arc(x, y+10, 20, 10, 0, Math.PI)
//obrajori
}