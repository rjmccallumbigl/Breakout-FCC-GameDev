import Paddle from "/src/paddle";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// clear between frames
ctx.clearRect(0, 0, 800, 600);

// red
// ctx.fillStyle = '#f00';
// ctx.fillRect(20, 20, 100, 100);

// blue
// ctx.fillStyle = '#00f';
// ctx.fillRect(360, 200, 50, 50);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
