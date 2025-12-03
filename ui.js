let score = 0;

function incrementScore(amount){
    score += amount;
}

function drawUI(ctx){
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText(`Points: ${Math.floor(score)}`, 20,40);
}

function gameOver(){
    alert(`Kamp over! Poengsummen din: ${Math.floor(score)}`);
    document.location.reload();
}
