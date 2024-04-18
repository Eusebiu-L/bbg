let pdEusebiu ={
    x: tableWidth/2,
    y:500,
    color: "red", 
    width: 70,
    heigth:10,
}
function createPaddleEusebiu(){
    fill(pdEusebiu.color)
    pdEusebiu.x = mouseX - pdEusebiu.width/2;
  rect( pdEusebiu.x, pdEusebiu.y, pdEusebiu.width, pdEusebiu.heigth )

}
