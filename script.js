window.onload = mainGame;

var dragster = new Car();
var game = new Game();

function Car(){
	this.power = "off";
	this.position = 0;
}

function Game(){


}

function mainGame(){
		var car1 = document.getElementById('dragster')
		car1.style.left = "0px";
		window.addEventListener('keyup', function(event){

			if (event.keycode === 13){
				dragster.power = "on";
			}
			if (dragster.power = "on" && event.keycode === 39){
				car1.style.left = parseInt(car1.style.left, 10) + 5 + "px";
				dragster.position += 5;
			}
		})
}
