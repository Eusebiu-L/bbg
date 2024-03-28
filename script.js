function setup(){
    createCanvas (800,600);
}
function draw(){
    background("green");
  smilyFaceRafha(400, 300);
}
function smilyFaceRafha(x,y){
    background("white");
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






function setup(){
    createCanvas (800,600);
}
function draw(){
    background("yellow");
    smilefaceEusebiu();
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
fill("lime");
stroke("red");
arc(400, 307.5, 20, 10, 0, Math.PI)
//obrajori
}