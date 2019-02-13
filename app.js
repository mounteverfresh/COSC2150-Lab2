//Kyle Leadbetter
//COSC2150-Lab2

function fib(len) {
    var arr;
    if (len <= 1) {
        arr = [1];
    }
    else if (len == 2) {
        arr = [1, 1];
    }
    else {
        arr[len - 1] = arr[len - 2] + arr[len - 3];
    }
    return arr;
}

function printFib(arr) {
    console.log("[ ");
    for (var i = 1; i <= arr.length; i++) {
        console.log(arr[i] + ", ");
    }
    console.log("]");

}

printFib(fib(2));
