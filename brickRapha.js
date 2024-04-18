
let bricksRapha =[]

const bricksRowsRapha=1
const bricksColsRapha=1
const rowBricksNumberRapha= 4

function initBriks(){
    for(let i=0;i< bricksRowsRapha * rowBricksNumberRapha;i++){
        bricksRapha.push({
             hit:false,
             x:i*70,
             y:15,
             color:"#0000ff",
             width:50,
             height: 20,
        })
    }
        
}
      

function createBricksRapha(){
     bricksRapha.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y , brick.width, brick.height)
     })
}
