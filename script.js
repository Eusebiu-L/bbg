function setup(){
    createCanvas (800,600);
}
function draw(){
    background("green");
  smilyFaceRafha();
}
function smilyFaceRafha(){
    background("white");
stroke("black");
circle(400,300,50);
//eyes
//circle(390,290,5);
//circle(410,290,5);
stroke("black");
ellipse(390,290,10,5);
ellipse(410,290,10,5);
//pupils
stroke("blue");
fill("blue");
circle(390,290,2);
circle(410,290,2);

//mounth
fill("yellow");
stroke("red");
arc(400, 307.5, 20, 10, 0, Math.PI)
//obrajori
}





