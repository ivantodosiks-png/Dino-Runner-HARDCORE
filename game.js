const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let groundY;

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

 
    groundY = Math.floor(canvas.height * 0.82);

    initPlayer(canvas.height);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function update(){
    updatePlayer(groundY);
    updateObstacles(canvas.width, groundY);
    score += 0.2; 
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (groundImg.complete) {
        ctx.drawImage(groundImg, 0, groundY, canvas.width, canvas.height - groundY);
    } else {
        ctx.fillStyle = "red";
        ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);
    }    

    // земля
    ctx.fillStyle = '#555';
    ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);

    drawPlayer(ctx);
    drawObstacles(ctx);
    drawUI(ctx);
}


function gameLoop(){
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// старт игры
gameLoop();
