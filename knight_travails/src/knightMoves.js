const Graph = require("./graph");

const knightMoves = (start, end) => {
  const boardSize = 8;
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const isValid = (x, y) => x >= 0 && x < boardSize && y >= 0 && y < boardSize;

  const graph = new Graph();

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      const current = `${x},${y}`;
      graph.addVertex(current);

      directions.forEach(([dx, dy]) => {
        const [nx, ny] = [x + dx, y + dy];
        if (isValid(nx, ny)) {
          graph.addVertex(`${nx},${ny}`);
          graph.addEdge(current, `${nx},${ny}`);
        }
      });
    }
  }

  const bfs = (start, end) => {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
      const path = queue.shift();
      const node = path[path.length - 1];

      if (node === end) {
        return path;
      }

      for (let neighbor of graph.getNeighbors(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
  };

  const startStr = `${start[0]},${start[1]}`;
  const endStr = `${end[0]},${end[1]}`;
  const path = bfs(startStr, endStr).map((coord) =>
    coord.split(",").map(Number)
  );

  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
  path.forEach((square) => console.log(square));
  return path;
};

module.exports = knightMoves;
