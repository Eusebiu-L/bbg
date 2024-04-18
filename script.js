

let tableWidth= 800;
let tableHeigth=600;

function setup(){
  createCanvas (tableWidth, tableHeigth);  
  initBriks
}
function draw(){
 
  background("purple");
  
  checkLimitsSMEusebiu();
  smilefaceEusebiu(smEusebiu.x, smEusebiu.y);

  checkLimitsSMRafha();
  smilyFaceRafha(smRafha.x,smRafha.y);
  

  cheklimitSMDavid();
  smilefaceDavid(smDavid.x,smDavid.y);
  createPaddleEusebiu();

  createBricksEusebiu();

  

   createPaddleRapha();
   createBricksRapha();
}

