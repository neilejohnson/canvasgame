export function detectCollision(ball, gameObject) {

        let bottomOfBall = ball.position.y + ball.size;
        let topofBall = ball.position.y;

        let topOfObject = gameObject.position.y;
        let leftSideOfObject = gameObject.position.x;
        let rightSideofObject = gameObject.position.x + gameObject.width;
        let bottomOfObject = gameObject.position.y + gameObject.height;

        if(bottomOfBall >= topOfObject &&
            topofBall <= bottomOfObject &&
            //left side of ball is greater than or equal to left side of baddle
            ball.position.x >= leftSideOfObject &&
            //right side of ball is greater than or equal to right side of paddle
            ball.position.x + ball.size <= rightSideofObject
        ) {
            //checking if there is a collision, not what to do with it
            return true;
        } else {
            return false;
        }
};