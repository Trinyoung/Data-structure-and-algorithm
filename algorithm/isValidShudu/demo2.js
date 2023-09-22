var isValidSudoku = function (board) {
    const size = board.length;
    const rowSet = new Set();
    const colSet = new Set();
    for (let i = 0; i < size; i++) {
      rowSet.clear();
      colSet.clear();
      for (let j = 0; j < size; j++) {
        const rowij = board[i][j];
        const colij = board[j][i];
        if (
          (rowij !== "." && rowSet.has(rowij)) ||
          (colij !== "." && colSet.has(colij))
        ) {
          return false;
        }
        rowSet.add(rowij);
        colSet.add(colij);
      }
    }
  
    for (let i = 0; i < size; i += 3) {
      for (let j = 0; j < size; j += 3) {
        rowSet.clear();
        for (let k = 0; k < 3; k++) {
          for (let m = 0; m < 3; m++) {
            const cur = board[i + k][j + m];
            if (cur !== "." && rowSet.has(cur)) {
              return false;
            }
            rowSet.add(cur);
          }
        }
      }
    }
    return true;
  };