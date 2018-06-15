function search(row, column, grid) {
  if (
    row < 0 ||
    column < 0 || // handle undefined (negative indexes)
    row > grid.length - 1 ||
    column > grid[row].length - 1 || // outside of grid
    grid[row][column] === 0
  ) {
    return 0;
  }
  grid[row][column] = 0; // turn to 0 to avoid repitition

  // check spaces recursively
  return (
    1 +
    search(row - 1, column, grid) + // left
    search(row, column - 1, grid) + // down
    search(row + 1, column, grid) + // right
    search(row, column + 1, grid) // up
  );
}

function obstacleCheck(grid) {
  let obstacles = 0;
  let largest = 0;
  let size = 0;
  let location;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === 1) {
        obstacles++;
        size = search(row, column, grid);
        if (size > largest) {
          location = [row, column];
          largest = size;
        }
      }
    }
  }
  //   return obstacles !== 0 ? [obstacles, largest, location] : "No obstacles :)";
  if (obstacles === 0) {
    return "No obstacles :)";
  } else {
    return (
      `There are ${obstacles} obstacle(s).` +
      `The largest has a size of ${largest} and is located at ${location}`
    );
  }
}

/******** Tests  *****************/

var test1 = [
    [0, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
];
var test2 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];
var test3 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
var test4 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

console.log(obstacleCheck(test1));
console.log(obstacleCheck(test2));
console.log(obstacleCheck(test3));
console.log(obstacleCheck(test4));
