
var ball = document.querySelector('.ball');
var paddleLeft = document.querySelector('.paddle-left');
var paddleRight = document.querySelector('.paddle-right');
var gameScreen = document.querySelector('.game-screen');
var player1Score = document.querySelector('.player1-score');
var player2Score = document.querySelector('.player2-score');

var ballX = 190;
var ballY = 190;
var ballSpeedX = 4;
var ballSpeedY = 4;

var paddleSpeed = 5;
var paddleLeftY = 100;
var paddleRightY = 100;

var player1ScoreValue = 0;
var player2ScoreValue = 0;


setInterval(function() {
	
	ballX += ballSpeedX;
	ballY += ballSpeedY;
	ball.style.left = ballX + 'px';
	ball.style.top = ballY + 'px';


	if (ballY < 0 || ballY > gameScreen.clientHeight - ball.clientHeight) {
		ballSpeedY *= -1;
	}
	if (ballX < 0) {
		
		player2ScoreValue++;
		player2Score.textContent = player2ScoreValue;
		resetBall();
	}
	if (ballX > gameScreen.clientWidth - ball.clientWidth) {
	
		player1ScoreValue++;
		player1Score.textContent = player1ScoreValue;
		resetBall();
	}

	
	if (paddleLeftY >= 0 && keysPressed['w']) {
		paddleLeftY -= paddleSpeed;
	}
	if (paddleLeftY <= gameScreen.clientHeight - paddleLeft.clientHeight && keysPressed['s']) {
		paddleLeftY += paddleSpeed;
	}
	if (paddleRightY >= 0 && keysPressed['ArrowUp']) {
		paddleRightY -= paddleSpeed;
	}
	if (paddleRightY <= gameScreen.clientHeight - paddleRight.clientHeight && keysPressed['ArrowDown']) {
		paddleRightY += paddleSpeed;
	}
	paddleLeft.style.top = paddleLeftY + 'px';
	paddleRight.style.top = paddleRightY + 'px';

	
	if (ballSpeedX < 0 && ballX <= paddleLeft.clientWidth && ballY + ball.clientHeight >= paddleLeftY && ballY <= paddleLeftY + paddleLeft.clientHeight) {
		ballSpeedX *= -1;
	}
	if (ballSpeedX > 0 && ballX + ball.clientWidth >= gameScreen.clientWidth - paddleRight.clientWidth && ballY + ball.clientHeight >= paddleRightY && ballY <= paddleRightY + paddleRight.clientHeight) {
		ballSpeedX *= -1;
	}
}, 20);

var keysPressed = {};
window.addEventListener('keydown', function(event) {
	keysPressed[event.key] = true;
});
window.addEventListener('keyup', function(event) {
	keysPressed[event.key] = false;
});


function resetBall() {
	ballX = 290;
	ballY = 190;
	ballSpeedX *= -1;
}
