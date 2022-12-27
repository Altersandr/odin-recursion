const unsortedArray = [54, 456, 22, 6, 1, 667, 200, 34];
let i = 0

function merge(left, right, sorted){
    let sA = sorted;
    let i = left.length;
    let j = right.length;

    if(left[i] < right [j]){
        sA.push(left[i])
        console.log('left')
        return sA
    }else{
        sA.push(right[j])
        console.log('right')
        return sA
    }
};

function mergeSort (array){
    let sortedArray = [];
    let ar = array;
    let leftArr;
    let rightArr;
    if(ar.length > 1){
        leftArr = ar.slice(0, ar.length/2);
        rightArr = ar.slice(ar.length/2);
        // console.log(leftArr, rightArr)
        mergeSort(leftArr);
        mergeSort(rightArr);
        sortedArray = merge(leftArr, rightArr, sortedArray);
        console.log(sortedArray)
        // for(let i = 0; i < leftArr.length;){
        //     for(let j = 0; j < rightArr.length;)
        //     if(leftArr[i]<rightArr[j]){
        //         sortedArray.push(leftArr[i++])
        //     }else{
        //         sortedArray.push(rightArr[j++])
        //     }
        // }
        // console.log(leftArr, rightArr)
    }
    console.log(sortedArray)
    // return console.log(sortedArray)
    // return console.log(leftArr, rightArr)
    // return console.log(sortedArray)
    // console.log(leftArr, rightArr)
    
};


mergeSort(unsortedArray);