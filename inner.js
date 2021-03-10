// var a = 1;
a = 1;
function outer () {
    var a = 1;
    double = function () {
        this.a*=2;
        console.log('here----')
        console.log(this.a);
    }
    function inner () {
        console.log(a);
    }
    return inner;
}
var result = outer();
result(); // 1
double(); // double is not a function
result(); // 1；
