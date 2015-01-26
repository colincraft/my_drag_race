
  var Game              = function() {
    this.tree = new ChristmasTree();
    this.track = new RaceTrack();
    this.dragster = new Dragster();
    this.attachListeners();
    this.position = 0;
    this.state = "off";
  };
  var ChristmasTree = function() {
    this.$preStageLights = document.getElementsByClassName('lights');
    this.reset();
  };
  var RaceTrack         = function() {
  };
  var Dragster          = function() {
    this.$el = document.getElementById('dragster');
    
    this.$el.style.left = "0px";
    
  };


  Game.prototype.attachListeners = function() {
    var self = this;
    // listen for user input, specifically
    // for the user pressing the right arrow key
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13){
        dragster.state = "On";
      }
      if (dragster.state === "On" && event.keyCode === 39) {
        self.dragster.advance();
        dragster.position += 1;
      }
    });
  };

  Dragster.prototype.advance = function() {
        dragster.style.left = parseInt(dragster.style.left, 10) + 1 + "px";
        
        
  };
  ChristmasTree.prototype.reset = function() {
    // append the css on class to the pre stage lights
    // so that they show up as yellow
    this.$preStageLights.className += " on";
  };
  new Game();
