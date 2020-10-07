export default class InputHandler {
    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                    paddle.moveRight();
                    break;
            }
        })
    }
}