//Odin assignment 1. Fibonacci sequence using iterators

let fibArr = []; //initialize an empty array to store the values


function fib(n){
    let a = 0, b = 1, c = 0;
    for(let i = 1; i <= n; i++ ){
        fibArr.push(c);
        i == 2? c = 1: c = a+b; //without the ternary operator here the sequence is missing a 1 in the beginning of the sequence
        a = b;
        b = c;
    }
    return fibArr
};

console.log(fib(2)); // log the output to the console
