let smEusebiu = {
    x: 100,
    y: 200,
    ray:50,
    directionX: 1,
    directionY: 1,
    speedX:  2,
    speedY: 2 , 
}
function checkLimitsSMEusebiu(){
 
      // verificare pe dreapta + stanga
      if (smEusebiu.x >= tableWidth - smEusebiu.ray || smEusebiu.x <= 0 + smEusebiu.ray) {
        smEusebiu.directionX *= -1;
  }
  smEusebiu.x += smEusebiu.directionX * smEusebiu.speedX;
  // verificarea pe sus
  if(smEusebiu.y<=0 + smEusebiu.ray){
    smEusebiu.directionY *= -1;
  }
  //Verifica paleta
  if (  smEusebiu.y >= pdEusebiu.y - smEusebiu.ray &&
    smEusebiu.y <= pdEusebiu.y + pdEusebiu.heigth &&
    smEusebiu.x >= pdEusebiu.x - smEusebiu.ray &&
    smEusebiu.x <= pdEusebiu.x + pdEusebiu.width + smEusebiu.ray) {
      
             smEusebiu.directionY *= -1;
  }
  smEusebiu.y += smEusebiu.directionY * smEusebiu.speedY;

}
     
                      
  function smilefaceEusebiu(x,y){
    //body
  fill("lime");
  stroke("black");
  circle(x,y,smEusebiu.ray);
  
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