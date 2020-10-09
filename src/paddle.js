export default class Paddle {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 150;
        this.height = 30;

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            //
            x: this.gameWidth / 2 - this.width / 2,
            //game height - this.height would make it flush with bottom. -10 gives it a buffer
            y: this.gameHeight - this.height - 10,
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        this.position.x += this.speed;

        //keeps them from going over the edge
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) 
        this.position.x = this.gameWidth - this.width;
    };
};

