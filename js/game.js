class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro'),
        this.gameScreen = document.getElementById('game-screen'),
        this.gameEndScreen = document.getElementById('game-end'),
        this.player = null,
        this.height = '600px',
        this.width = '500px',
        this.obstacles = [],
        this.score = 0,
        this.lives = 3,
        this.gameIsOver = false
    }

    start() {
        this.gameScreen.style.height = this.height;
        this.gameScreen.style.width = this.width;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameLoop();
    }

    gameLoop() {
        if (this.gameIsOver) {
            window.cancelAnimationFrame();
            return;
        }

        this.update();

        window.requestAnimationFrame(this.gameLoop);
        /*
            Runs the game loop by executing the following steps:

            Checks if the gameIsOver flag is set to true. If it is, it interrupts the function to stop the loop.

            Invokes the update() method to update the game state. We will create a update method in the following iteration.

            To ensure that the game loop function runs repeatedly, it should invoke itself (like this.gameLoop()), to create a recursive loop. To ensure a consistent frame rate, use window.requestAnimationFrame() to execute the function.
        */
    }

    update() {
        console.log('updating');
        /*
            This method is responsible for updating the game state during each loop iteration. For now, we will leave it empty and come back to implement it in the upcoming iterations.
        */

    }
}