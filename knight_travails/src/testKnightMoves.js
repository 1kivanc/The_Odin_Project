const knightMoves = require("./knightMoves");

knightMoves([0, 0], [1, 2]); // [[0,0],[1,2]]
knightMoves([0, 0], [3, 3]); // [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]
knightMoves([3, 3], [0, 0]); // [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]]
knightMoves([0, 0], [7, 7]); // [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or similar
