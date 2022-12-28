const unsortedArray = [256, 54, 22, 6, 1, 667, 200, 34];

function merge(left, right){
    let sorted = [];

    while(left.length !== 0 && right.length !== 0){
    if(left[0]<=right[0]){
        sorted.push(left[0]);
        left.shift();
    }else{
        sorted.push(right[0]);
        right.shift();
    }
    }

    while(left.length !== 0 ){
        sorted.push(left[0]);
        left.shift();
    }

    while(right.length !== 0 ){
        sorted.push(right[0]);
        right.shift();
    }
    return sorted;


};

function mergeSort (array){
    let left;
    let right;
    if(array.length <= 1) return array 
    else{
        left = array.slice(0, array.length/2);
        right = array.slice(array.length/2);
    }
    left = mergeSort(left); 
    right = mergeSort(right);
    return merge(left, right); 
}

console.log(mergeSort(unsortedArray));