
let smRafha = {
      x: 400,
      y: 300,
      ray: 20,
      directionX: 1,
      directionY: 1,
      speedX: 3,
      speedY: 5
};
function checkLimitsSMRafha() {
      // verificare pe dreapta + stanga
      if (smRafha.x >= tableWidth - smRafha.ray || smRafha.x <= 0 + smRafha.ray) {
            smRafha.directionX *= -1;
      }
      smRafha.x += smRafha.directionX * smRafha.speedX;
      // verificarea pe sus
      
      //Verifica paleta
      if ( smRafha.y <= 0 + smRafha.ray || 
            smRafha.y >= pdRapha.y - smRafha.ray && smRafha.y <=pdRapha.y +pdRapha.height + smRafha.ray && smRafha.x >= pdRapha.x - smRafha.ray && smRafha.x <= pdRapha.x + pdRapha.width - smRafha.ray) {
                 smRafha.directionY *= -1;
      }
      smRafha.y += smRafha.directionY * smRafha.speedY;

}
function smilyFaceRafha(x, y) {
      fill("yellow");
      stroke("black");
      circle(x, y, smRafha.ray * 2);

      //eyes
      stroke("brown");
      ellipse(
        x - (smRafha.ray * 2) / 5,
        y - (smRafha.ray * 2) / 5,
        (smRafha.ray * 2) / 5,
        (smRafha.ray * 2) / 10
      );
      ellipse(
        x + (smRafha.ray * 2) / 5,
        y - (smRafha.ray * 2) / 5,
        (smRafha.ray * 2) / 5,
        (smRafha.ray * 2) / 10
      );
      //pupils
      stroke("black");
      fill("black");
      circle(
        x - (smRafha.ray * 2) / 5,
        y - (smRafha.ray * 2) / 5,
        (smRafha.ray * 2) / 25
      );
      circle(
        x + (smRafha.ray * 2) / 5,
        y - (smRafha.ray * 2) / 5,
        (smRafha.ray * 2) / 25
      );

      //mounth
      stroke("red");
      fill("gray");
      arc(
        x,
        y + (smRafha.ray * 2) / 5,
        (smRafha.ray * 2) / 1.6,
        (smRafha.ray * 2) / 5,
        0,
        Math.PI
      );
      //obrajori
      stroke("pink");
  fill("pink");
  circle(
    x + (smRafha.ray * 2) / 2.5,
    y + (smRafha.ray * 2) / 10,
    (smRafha.ray * 2) / 7.14
  );
  circle(
    x - (smRafha.ray * 2) / 2.5,
    y + (smRafha.ray * 2) / 10,
    (smRafha.ray * 2) / 7.14
  );
}




