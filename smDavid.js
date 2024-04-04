let smDavidX= 400;
let smDavidY= 300;
function cheklimitSMDavid(){
    if(smDavidX >= tableWidht)
    directionX *= -1;
    smDavidX += directionX;
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