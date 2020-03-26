function findMinAndRemoveSorted(array){
    return array.shift();
}

//find the smallest item within two sorted array
//return the item and remove it from the array
function findMinAndRemove(array1, array2){
    let minArray1 = array1[0];
    let minArray2 = array2[0];

    if(minArray1 < minArray2){
        return array1.shift();
    }else{
        return array2.shift();
    }
}

//merge two sorted array
function merge(array1, array2){
    let sorted = [];

    while(array1.length !=0 && array2.length !=0 ){
        let currentMin = findMinAndRemove(array1, array2)
        sorted.push(currentMin);
    }

    return sorted.concat(array1).concat(array2);
}

//sort an unsorted array
function mergeSort(array){
    let midPoint = Math.floor(array.length/2);
    let firstHalf = array.slice(0, midPoint);
    let secondHalf = array.slice(midPoint, array.length);

    if(array.length < 2){
        return array;
    }else{
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}

