// Activity 1 

// Task 1

let arr = [1,2,3,4,5];

console.log(arr);

// Task 2
let firstElement = arr[0];
let lastElement = arr[arr.length - 1]
console.log(firstElement,lastElement);



// Activity 2

// Task 3

arr.push(6);

console.log(arr);

// Task 4

arr.pop();

console.log(arr);

// Task 5

arr.shift();

console.log(arr);

// Task 6

arr.unshift(0);

console.log(arr);

// Activity 3

// Task 7

const doubledArr = arr.map(e => e * 2);

console.log(doubledArr);

// Task 8

const evenArr = arr.filter(e => e % 2 === 0);

console.log(evenArr);


// Task 9

const sum = arr.reduce((ac,it) => ac += it);

console.log(sum)

// Activity 4

// Task 10

for(let i = 0;i<=arr.length - 1;i++){
    console.log(arr[i]);
}

// Task 11

arr.forEach(e => console.log(e));


// Activity 5

// Task 12

let twoDimArr = [1,2,[3,4]];

console.log(twoDimArr);


// Task 13

let twoDimElement = twoDimArr[2][0];

console.log(twoDimElement)