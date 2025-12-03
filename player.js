const player = {
    x: 50,
    y: 0,
    width: 40,
    height: 40,
    vy: 0,
    gravity: 1.5,
    jumpPower: 18,
    jumping: false,
    img: new Image()
};
const groundImg = new Image();
groundImg.onload = () => console.log("Текстура земли загружена");
groundImg.onerror = () => console.log("ТЕКСТУРА ЗЕМЛИ НЕ НАЙДЕНА!");
groundImg.src = 'ground.png'; 



player.img.src = 'dino.png'; 

function initPlayer(canvasHeight){
    player.y = canvasHeight - 120 - player.height; 
}

document.addEventListener('keydown', e => {
    if(e.code === 'Space' || e.code === 'ArrowUp'){
        if(!player.jumping){
            player.vy = -player.jumpPower;
            player.jumping = true;
        }
    }
});

function updatePlayer(groundY){
    player.vy += player.gravity;
    player.y += player.vy;
    if(player.y + player.height >= groundY){
        player.y = groundY - player.height;
        player.vy = 0;
        player.jumping = false;
    }
}

function drawPlayer(ctx){
    ctx.drawImage(player.img, player.x, player.y, player.width, player.height);
}
