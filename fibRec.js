//Odin assignment 1. Fibonacci sequence using recursion

let fibArr = []; //initialize an empty array to store the values


function fibRec(n, a = 0, b = 1){ //pass in the first two values of the fibonacci sequence as arguments
    while (n > 0){ //when the length of the array reaches the input the function call stops
        fibArr.push(a) //append to the array
        let c = a + b
        return fibRec(n - 1, a = b, b = c) //recursively call updating the values
    }
    return fibArr 
};

console.log(fibRec(2)); //log the output to the console