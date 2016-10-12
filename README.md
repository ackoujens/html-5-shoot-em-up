#HTML 5 SHMUP Game

## How to run
Open `index.html` page in your browser.

## Compatability
There are still allot of issues with in a variety of browsers.
This project has not been tested for cross-browser compatability.

## Project structure
- `index.html`: main html5 page that links all files together
- `phaser-arcade-physics.min.js`: stripped version of 2 other physics engines (you can replace this with the full version if you plan to)
- `app.js`: code that kicks off the app, creates the `Phaser.Game` object and adds the `States`
- `boot.js`, `preloader.js`, `mainMenu.js`, `game.js`: different states of out game, combined together by `app.js`

## App Flow
- `Boot`: Initial state. Set-up additional settings for game, pre-loads image for pre-loader progress bar before passing the game to `Preloader`
- `Preloader`: load all assets before actual game, if done the game proceeds to `MainMenu`
- `MainMenu`: title screen and main menu before actual game
- `Game`: the actual game

## WebGL lag workaround
When WebGL is rendering slow and laggy on your machine, change this line in `app.js`:
`var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameContainer');`
`var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameContainer');`
