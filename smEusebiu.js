let smEusebiuX = 200;
let smEusebiuY = 400;
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