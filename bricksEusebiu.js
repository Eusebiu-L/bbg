let bricksEusebiu = []

const bricksRowsEusebiu = 1
const bricksColsEusebiu = 1
const rowBricksNumberEusebiu = 4

function initBricksEusebiu(){
    for(let i = 0;i< bricksRowsEusebiu * rowBricksNumberEusebiu; i++){
        bricksEusebiu.push({
            hit: false,
            x: i*70,
            y: 15,
            color: "blue",
            width: 50,
            height:20
        })
    }
}

function createBricksEusebiu(){
    bricksEusebiu.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}