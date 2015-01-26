function Dragster (){
	this.counter = 0;
	this.state = "off";


}


var car = new Dragster();
Dragster.prototype.state = function(state){
			car.state = "on";
};
var getDragster = document.getElementById('dragster');
getDragster.style.left = "25px";
getDragster.style.top = "80px";
getDragster.style.bottom = "0px";
function addEventListeners(){
window.addEventListener('keyup', function(event){
	if (event.keyCode === 39){
		getDragster.style.left = parseInt(getDragster.style.left, 10) + 5 + 'px';
		counter++;
	} if (event.keyCode === 40 ){
		getDragster.style.top = parseInt(getDragster.style.top, 10) + 5 + 'px';
	}
	if (event.keyCode === 38 ){
		getDragster.style.top = parseInt(getDragster.style.top, 10) - 5 + 'px';
	}
});}






