// function outerFun(){
//     let count = 0
//     return function(){
//         console.log(count)
//     }
// }

// let result = outerFun();
// result()

// function counter(){
//     let count = 0;
//     function increment () {
//         count++;
//     }
//     function getCount(){
//         console.log(count);
//     }
//     return [increment,getCount];
// }

// let firstCounter = counter();
// let secondCounter = counter();

// secondCounter[0]();
// secondCounter[0]();
// secondCounter[1]();

// firstCounter[0]()
// firstCounter[0]()
// firstCounter[0]()
// firstCounter[0]()
// firstCounter[1]()


// export function generateId(){
//     // let string = "lkfjadljfala";
//     let randomId = 0;
//     return function(){
//         randomId++;
//         // return string + randomId;
//         return randomId
//     }
// }

// const randomId = generateId();
// console.log(randomId())


// function greetUser(name){
//     let UserName = name;
//     return () => {
//         console.log(`Hello ${UserName} nice to meet you !`)
//     }
// }

// const firstUser = greetUser("Ahmed");
// console.log(firstUser())

// function logIndex(num){
//     let index = num;
//     return () => {
//         return index;
//     }
// }

// let arrofFunctions = [];

// for(let i = 0;i<=10;i++){
//     arrofFunctions.push(logIndex(i))
// }

// arrofFunctions.forEach(fn => console.log(fn()))


// export function manageItems(item,arr){
//     let array = arr;
//     const singleItem = item;

//     function addItems(){
//         return array.push(singleItem)
//     }

//     function removeItems(id){
//         return array.filter(it => it["id"] !== id);
//     }

//     function listItems(){
//         return array.forEach(item => {
//                 console.log(item);
//         });
//     }

//     return {addItems,removeItems,listItems};
// }





