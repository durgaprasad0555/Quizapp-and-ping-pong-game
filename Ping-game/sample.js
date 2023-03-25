
var b= document.querySelector('.ball');
var pl = document.querySelector('.p-l');
var pr = document.querySelector('.p-r');
var game = document.querySelector('.game');
var p1s = document.querySelector('.p1-s');
var p2s = document.querySelector('.p2-s');

var bx = 190;
var by = 100;
var bsx = 4;
var bsy = 4;

var ps = 5;
var ply= 160;
var pry = 160;

var p1sv = 0;
var p2sv = 0;


setInterval(function() {
	
	bx += bsx;
	by += bsy;
	b.style.left = bx + 'px';
	b.style.top = by + 'px';


	if (by< 0 || by > game.clientHeight - b.clientHeight) {
		bsy *= -1;
	}
	if (bx < 0) {
		
		p2sv++;
		p2s.textContent = p2sv;
		resetBall();
	}
	if (bx > game.clientWidth - b.clientWidth) {
	
		p1sv++;
		p1s.textContent = p1sv;
		resetBall();
	}

	
	if (psy >= 0 && keysPressed['w']) {
		paddleLeftY -= ps;
	}
	if (ply <= game.clientHeight - pl.clientHeight && keysPressed['s']) {
		paddleLeftY += ps;
	}
	if (pry >= 0 && keysPressed['ArrowUp']) {
		pry -= ps;
	}
	if (pry <= game.clientHeight - pr.clientHeight && keysPressed['ArrowDown']) {
		pry += ps;
	}
	pl.style.top = ply + 'px';
	pr.style.top = pry + 'px';

	
	if (bsx < 0 && bx<= pl.clientWidth && by + b.clientHeight >= ply && by<= ply + pl.clientHeight) {
		bsx *= -1;
	}
	if (bsx> 0 && bx+ b.clientWidth >= game.clientWidth - pr.clientWidth && by + b.clientHeight >= pry && by <= pry+ pr.clientHeight) {
		bsx *= -1;
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
	bx = 290;
	by = 190;
	bsx *= -1;
}
