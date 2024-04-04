let smRafhaX=400;
let smRafhaY=300;
function checkLimitsSMRafha(){
    if(smRafhaX >= tableWidth) 
      directionX *=-1;
    smRafhaX+= directionX;
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
 