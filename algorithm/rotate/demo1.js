var rotate = function(matrix) {
    let res = matrix.map(() => []);
    for (let i =0; i< matrix.length; i++) {
        let row = matrix[i];
        for(let j = 0; j < row.length; j++) {
            res[j][row.length -1 -i] = row[j];
        }
    }
   return res;
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));