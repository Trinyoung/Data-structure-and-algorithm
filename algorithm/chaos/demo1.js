function chaos (arr) {
    let newArr = [];
    function generatorRandom (arr) {
        let random = Math.floor(Math.random() * arr.length);
        return random;
    }
    while (arr.length > 0) {
        let random = generatorRandom(arr);
        newArr.push( ...arr.splice(random, 1));
    }
    return newArr;
}

console.log(chaos([1, 2, 3, 4, 5, 0]));