function selectionSort(arr){
    console.log("Before:",...arr); //Before: 1 4 2 3
    for(let i=0;i<arr.length;i++){
        let minInd=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minInd]){
                minInd = j;
            }
        }
        if(minInd != i){
            arr[minInd] ^=arr[i];
            arr[i] ^=arr[minInd];
            arr[minInd] ^=arr[i];
        }
    }
console.log("After:",...arr)//After: 1 2 3 4
}
selectionSort([1,4,2,3])