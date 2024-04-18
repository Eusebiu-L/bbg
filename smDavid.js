
let smDavid={
    x: 400,
    y: 400,
   directionX: 1,
}
function cheklimitSMDavid(){
    if(smDavid.x >= tableWidth || smDavid.x<=0)
    smDavid.directionX *= -1;
    smDavid.x += smDavid.directionX;
  }
  function smilefaceDavid(x,y){
    //body
    fill("blue");
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

