function pushSorted(arr,value){
    if(arr.length ==0){
        arr.push(value);
        return arr;
    }
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] > value){
            arr[i+1]=arr[i]
        }else{
            arr[i+1]=value;
            return arr;
        }
    }
    arr[0]=value;
return arr;
}
var arr=[];
pushSorted(arr,3);
console.log(...arr);
pushSorted(arr,1);
console.log(...arr);
pushSorted(arr,4);
console.log(...arr);
pushSorted(arr,2);
console.log(...arr);
pushSorted(arr,7);
console.log(...arr);
pushSorted(arr,6);
console.log(...arr);