#HTML 5 SHMUP Game

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
