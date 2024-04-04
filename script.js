let tableWidht= 800;
let tableHeigth=600;
let directionX= 1;
function setup(){
  createCanvas (tableWidht, tableHeigth);  
}
function draw(){

background("yellow"); 
checkLimitsSMEusebiu();  
cheklimitSMDavid();
checkLimitsSMRafha();
  
  smilefaceEusebiu(smEusebiuX,smEusebiuY);
  smilefaceDavid(smDavidX,smDavidY);
  smilyFaceRafha(smRafhaX,smRafhaY);

}