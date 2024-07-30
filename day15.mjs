// function outerFn(){
//     let name = "Talha shiekh";
//     return function(){
//         console.log(name);
//     }
// }

// let innerFn = outerFn();
// innerFn()


// function counter(){
//     let count = 0;
//     function increment(){
//         count++
//     }
//     function getCount(){
//         console.log(count);
//     }

//     return [increment,getCount];
// }

// let [incr,count1] = counter();

// incr()
// incr()
// incr();
// count1()

// function getRandomNumbers(num){
//     return Math.floor(Math.random() * num);
// }

// function generateRandomId(){
//     let id = getRandomNumbers(5);

//     return function(){
//         console.log(id);
//         id++
//     }
// }

// const firstId = generateRandomId()
// firstId()
// firstId()
// firstId()
// firstId()


// function greetUser(name){
//     let userName = name;
//     return function(){
//         return `Hello ${userName} it was nice to meet you`
//     }
// } 
// let firstUserGreet = greetUser("John");
// console.log(firstUserGreet())


// function LogIndex(index){
//     let correctIndex = index;

//     return function(){
//         console.log(correctIndex)
//     }
// }

// let arrOfFunctions = [];

// for (let i = 0; i < 10; i++) {
    
//     arrOfFunctions.push(LogIndex(i));
    
// }

// arrOfFunctions.forEach(fn => fn())


// export function manageItems(){
//      let arr = [];
     
//      function addItems(item){
//         arr.push(item);
//         return arr;
//      }

//      function removeItem(item){
//         const removingIndex = arr.findIndex(el => el === item);
//         if(removingIndex !== -1){
//             arr.splice(removingIndex,1);
//             return arr;
//         }
//      }

//      function listItems(){
//         arr.forEach(item => console.log(item))
//      }

//      return [addItems,removeItem,listItems];
// }


// function sum(a,b){
//     return a+b;
// }

// function memoizerFn(fn){
//     let cache = new Map();
//     return function(x,y){
//         let key = `${x}+${y}`
        
//         if(cache.has(key)){
//             return cache.get(key)
//         }else {
//             let result = fn(x,y);
//             cache.set(key,result);
//             console.log(cache)
//             return result;
//         }
//     }
// }

// let memoizedFn1 = memoizerFn(sum);
// memoizedFn1(2,3)
// memoizedFn1(3,5)
// memoizedFn1(5,8)



// function factorial(n){
//     if(n == 0 || n == 1) return 1;

//     return n * factorial(n - 1);
// }

// function memoizedFactorial(fn){
//     let cache = new Map();
//     return function(n){
//         if(cache.has(n)){
//             return cache.get(n);
//         }else {
//             let result = fn(n);
//             cache.set(n,result);
//             console.log(cache)
//             return result;
//         }
//     }
// }

// let NumberFactorial1 = memoizedFactorial(factorial)
// NumberFactorial1(3)
// NumberFactorial1(4)
// NumberFactorial1(5)
// NumberFactorial1(6)
