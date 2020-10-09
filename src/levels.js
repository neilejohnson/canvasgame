import Brick from './brick.js'

export function buildLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            let position = {
                //width of brick times the brick index, which is the index within the row of bricks
                x: 80 * brickIndex, 
                //50 is buffer at top. 24 is the height * the rowIndex. there are 4 row indexes from top to bottom
                y: 50 + 24 * rowIndex
            };
            if(brick === 1) {
                bricks.push(new Brick(game, position));
            }
        });
    });
    //in game we are doing 'bricks=buildLevel(game, level)'. Return value is necessary for that variable to reeive something 
    return bricks;
}

export const level1 = [
    [0,1,1,1,0,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];