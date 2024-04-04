let tableWidht= 800;
let tableHeigth=600;

function setup(){
  createCanvas (tableWidht, tableHeigth);  
}
function draw(){
background("yellow");
  checkLimitsSMEusebiu();
  smilefaceEusebiu(smEusebiuX, smEusebiuY);
  checkLimitsSMRafha();
  smilyFaceRafha(smRafhaX,smRafhaY);
  cheklimitSMDavid();
  smilefaceDavid(smDavidX,smDavidY);
  
}