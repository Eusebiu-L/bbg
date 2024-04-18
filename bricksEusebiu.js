let bricksEusebiu = []

const marginEusebiu = 10;
const distanceBetweenBricksEusebiu = 10;
const bricksRowsEusebiu = 3;
const bricksColsEusebiu = 1;
const rowBricksNumberEusebiu = 7;

const brickWidthEusebiu = Math.floor(
    (tableWidth -  marginEusebiu * 2-(rowBricksNumberEusebiu - 1)* distanceBetweenBricksEusebiu)/rowBricksNumberEusebiu);

function initBricksEusebiu(){
    let  x = marginEusebiu;
    for(let i = 0;i< bricksRowsEusebiu * rowBricksNumberEusebiu; i++){
        const row = Math.floor(i/rowBricksNumberEusebiu) +1 ;
        x = x+ brickWidthEusebiu + distanceBetweenBricksEusebiu;
        if(i% rowBricksNumberEusebiu == 0) x = marginEusebiu
        bricksEusebiu.push({
            hit: false,
            x,
            y: row * 35,
            color: "blue",
            width: brickWidthEusebiu,
            height: 20
        });
    }
}

function createBricksEusebiu(){
    bricksEusebiu.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    });
}