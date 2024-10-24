var solve = function(board) {
    let circled = new Map();
    const m = board.length - 1;
    const n = board[0].length - 1;
    let passed = new Map();
    function interate(i, j) {
        if (((i === 0 || i === m || j === 0 || j === n) && board[i]?.[j] === 'O') || circled.get(`${i}-${j}`)) {
            return true;
        }
        if (i === 3 && j === 3) {
            console.log(i, j)
        }
        if (board[i][j] === 'O' && !passed.has(`${i}-${j}`)) {
            passed.set(`${i}-${j}`, true);
            const up = interate(i - 1, j);
            const down = interate(i + 1, j);
            const left = interate(i, j - 1);
            const right = interate(i, j + 1);
            const result = up || down || left || right;
            // board[i][j] = result ? 'O': 'X';
            circled.set(`${i}-${j}`, result);
            return result
        }
        return false;
    }
    for (let i = 0; i <= m; i++) {
        const row = board[i]
        for (let j = 0; j <= n; j++) {
            const item = row[j];
            if (i === 2 && j === 2) {
                console.log('dddd')
            }
            if (item === 'O' && !circled.get(`${i}-${j}}`)) {
                if (i === 0 || i === m || j === 0 || j === n || circled.get(`${i - 1}-${j}`) || circled.get(`${i + 1}-${j}`) || circled.get(`${i}-${j - 1}`) || circled.get(`${i}-${j + 1}`)) {
                    circled.set(`${i}-${j}`, true);
                    // board[i][j] = 'O';
                } else {
                    interate(i, j);
                }
                
            }
            passed = new Map();
        }
    }
    console.log(circled, 'circled====');
    for (let i = 0; i <= m; i++) {
        const row = board[i]
        for (let j = 0; j <= n; j++) {
            const item = row[j];
            console.log(`${i}-${j}`, circled.get(`${i}-${j}`), 'circled====')
            if (item === 'O' && circled.get(`${i}-${j}`) === false) {
                board[i][j] = 'X';
            }
        }
    }
    // for (value of ) {}
    // console.log(circled.keys())
    return board
};
const A = [
    ["O","X","X","O"],
    ["X","O","X","O"],
    ["X","O","O","X"],
    ["X","O","X","O"],
    ["X","O","O","O"],];
// const B =[
//     ["X","O","X","O","X","O","O","O","X","O"],
//     ["X","O","O","X","X","X","O","O","O","X"],
//     ["O","O","O","O","O","O","O","O","X","X"],
//     ["O","O","O","O","O","O","X","O","O","X"],
//     ["O","O","X","X","O","X","X","O","O","O"],
//     ["X","O","O","X","X","X","O","X","X","O"],
//     ["X","O","X","O","O","X","X","O","X","O"],
//     ["X","X","O","X","X","O","X","O","O","X"],
//     ["O","O","O","O","X","O","X","O","X","O"],
//     ["X","X","O","X","X","X","X","O","O","O"]]
const C = [
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]]
console.log(solve(C));