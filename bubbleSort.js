//Bubble Sort
function bubbleSort(arr){
    console.log("Before:",...arr);//Before: 1 4 2 3
    for(let i=0;i<arr.length;i++){
        for (let j=0; j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] =arr[j+1];
                arr[j+1]=temp;

            }
        }
    }
    console.log("After:",...arr)//After: 1 2 3 4
}
console.log(bubbleSort([1,4,2,3]));