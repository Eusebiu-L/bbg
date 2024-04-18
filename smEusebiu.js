
let smEusebiu = {
    x: 600,
    y: 400,
    directionX: 8,
    speed: 100,
} 
function checkLimitsSMEusebiu(){
    if(smEusebiu.x >= tableWidth || smEusebiu.x<=0)
    smEusebiu.directionX *= -1;
    smEusebiu.x += smEusebiu.directionX; 
     
  }                     
  function smilefaceEusebiu(x,y){
    //body
  fill("lime");
  stroke("black");
  circle(x,y,50);
  
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
  
  }

