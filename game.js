
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {

  // TODO - Temp code for development
  preload: function() {
    // Loads an image and assigns it a name for later use
    this.load.image('sea', 'assets/sea.png');
    this.load.image('bullet', 'assets/bullet.png');
  },

  create: function () {

    this.sea = this.add.tileSprite(0, 0, 800, 600, 'sea');

    // Accepts x-y-coords of our sprite and the name of the sprite which we assigned in load.image()
    this.bullet = this.add.sprite(400, 300, 'bullet');

  },

  update: function () {
    //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
