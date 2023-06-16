const board = Array(8)
  .fill()
  .map(() => Array(8).fill(false));

function Node(position, path) {
  return { position, path };
}

function isValid(position) {
  return (
    position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8
  );
}

function knightsTravails([x, y], [a, b]) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
  ];

  const queue = [Node([x, y], [[x, y]])];
  board[x][y] = true;

  while (queue.length !== 0) {
    const current = queue.shift();

    if (current.position[0] === a && current.position[1] === b) {
      console.log(
        `You made it in ${current.path.length - 1} moves! Here's your path:`
      );
      current.path.forEach((path) => console.log(path));
      return;
    }

    moves.forEach((move) => {
      const newRow = current.position[0] + move[0];
      const newCol = current.position[1] + move[1];
      const newPosition = [newRow, newCol];

      if (isValid(newPosition) && !board[newPosition[0]][newPosition[1]]) {
        const newNode = Node(newPosition, current.path.concat([newPosition]));
        queue.push(newNode);
        board[newPosition[0]][newPosition[1]] = true;
      }
    });
  }
}

knightsTravails([3, 4], [5, 6]);
// You made it in 4 moves! Here's your path:
// [ 3, 4 ]
// [ 1, 3 ]
// [ 2, 5 ]
// [ 3, 7 ]
// [ 5, 6 ]
