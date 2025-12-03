let obstacles = [];
let obstacleTimer = 0;
let speed = 6;


const cactusImg = new Image();
cactusImg.src = 'cactus.png'; 

function spawnObstacle(canvasWidth, groundY){
    const height = 20 + Math.random()*40;
    const width = 20 + Math.random()*20;
    obstacles.push({
        x: canvasWidth,
        y: groundY - height,
        width,
        height
    });
}

function updateObstacles(canvasWidth, groundY){
    obstacleTimer++;
    if(obstacleTimer > 90){
        spawnObstacle(canvasWidth, groundY);
        obstacleTimer = 0;
    }

    for(let i=obstacles.length-1;i>=0;i--){
        obstacles[i].x -= speed;

        
        if(player.x < obstacles[i].x + obstacles[i].width &&
           player.x + player.width > obstacles[i].x &&
           player.y < obstacles[i].y + obstacles[i].height &&
           player.y + player.height > obstacles[i].y){
            gameOver();
        }

        
        if(obstacles[i].x + obstacles[i].width <0){
            obstacles.splice(i,1);
            incrementScore(10);
            speed += 0.05;
        }
    }
}

function drawObstacles(ctx){
    obstacles.forEach(o=>{
        ctx.drawImage(cactusImg, o.x, o.y, o.width, o.height);
    });
}
