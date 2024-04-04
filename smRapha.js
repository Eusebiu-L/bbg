let smRafha = {
    x: 400,
    y: 300,
    directionX: 1,
    directionY: 1,
    speed: 3
  };
  function checkLimitsSMRafha(){
      if(smRafha.x >= tableWidth || smRafha.x <=0)
           smRafha.directionX *=-1;
        smRafha.x += smRafha.directionX * smRafha.speed;
    }
  function smilyFaceRafha(x,y){
fill("yellow");
 stroke("black");
 circle(x,y,50);
 
 //eyes
 //circle(390,290,5);
 //circle(410,290,5);
 stroke("black");
 ellipse(x-10,y-10,2);
 ellipse(x+10,y-10,2);
 //pupils
 stroke("blue");
 fill("blue");
 circle(x-10,y-10,2);
 circle(x+10,y-10,2);
 
 //mounth
 fill("yellow");
 stroke("red");
 arc(x, y+7, 20, 10, 0, Math.PI)
 //obrajori
 
 }
 