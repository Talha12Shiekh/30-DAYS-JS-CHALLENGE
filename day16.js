// function factorial(n){
//     if(n==1 || n==0) return 1;

//     return n * factorial(n - 1);
// }

// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

// function fabonacci(n){
//     if(n==1 || n== 2) return 1;

//    return fabonacci(n - 2) + fabonacci(n - 1);
// }   


// console.log(fabonacci(9))

// function sumOfArray(arr,length){
//     if(length <= 0) return 0;

//     return sumOfArray(arr,length - 1) + arr[length - 1];
// }
// let arr = [1,2,3];
// console.log(sumOfArray(arr,arr.length))


// function reverseString(str,length){
//     if(length <= 0) return "";
  
//     return str[length - 1] + reverseString(str,length - 1);
// }

// let string = "Talha"

// console.log(reverseString(string,string.length))

// function findMax(arr, length) 
// { 
    
//     if (length == 1) 
//         return arr[0]; 
//     return Math.max(arr[length-1], findMax(arr, length-1)); 
// } 

// let arr = [1,2,13,4,5];
// console.log((findMax(arr,arr.length)))



// function binarySearch(arr, low, high, x)
// {
//     if (high >= low) {
//         let mid = Math.floor((low + high) / 2)

//         // If the element is present at the middle
//         // itself
//         if (arr[mid] == x)
//             return mid;

//         // If element is smaller than mid, then
//         // it can only be present in left subarray
//         if (arr[mid] > x)
//             return binarySearch(arr, low, mid - 1, x);

//         // Else the element can only be present
//         // in right subarray
//         return binarySearch(arr, mid + 1, high, x);
//     }

//     // We reach here when element is not
//     // present in array
//     return -1;
// }

// let arr = [1,2,5,10,18];

// console.log(binarySearch(arr,0,arr.length - 1,5));
  

// function countOccurences(arr,target,index = 0){
//     if(index >= arr.length){
//         return 0
//     }

//     if(arr[index] == target){
//         return 1 + countOccurences(arr,target,index + 1)
//     }else {
//         return countOccurences(arr,target,index + 1)
//     }
// }

// let arr = [1,2,2,2,2,4];

// console.log(countOccurences(arr,2))


