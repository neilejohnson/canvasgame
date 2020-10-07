export default class Paddle {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.width = 150;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            //
            x: GAME_WIDTH / 2 - this.width / 2,
            //game height - this.height would make it flush with bottom. -10 gives it a buffer
            y: GAME_HEIGHT - this.height - 10,
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if(!deltaTime) return;
        this.position.x += this.speed;
    };
};

