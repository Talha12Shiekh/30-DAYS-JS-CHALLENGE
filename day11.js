// Activity 1

// Task 1

// const promise = new Promise((res,_) => {
//     setTimeout(() => {
//         res('Resolved')
//     },2000)
// })

// promise.then(res => console.log(res));

// Task 2

// const Erpromise = new Promise((_,rej) => {
//     setTimeout(() => {
//         rej(new Error("Not defined"))
//     },2000)
// })

// Erpromise.catch(err => console.log(err))

// Activity 2

// Task 3

function fetchData(value, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(value);
      res(value);
    }, delay);
  });
}

// fetchData("Data 1",1000).then(() => fetchData("Data 2",2000).then(() => fetchData("Data 3",3000)))

// Activity 3

// Task 4

// async function resolvePromise(){
//     await fetchData("Data 1",1000);
//     await fetchData("Data 2",2000);

//     console.log("Hello World")
// }

// resolvePromise()

// Task 5

// async function handleErrorPromise(){
//     try {
//         await Erpromise
//     } catch (error) {
//         console.log(error)
//     }
// }

// handleErrorPromise()

// Activity 4

// Task 6

// fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => console.log(res))

// Task 7

// async function fetchAPI(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(res);
// }
// fetchAPI()

// Activity 5
// Task 8

// Promise.all([
//   fetchData("First Promise Resolved", 1000),
//   fetchData("Second Promise Resolved", 2000),
//   fetchData("Third Promise Resolved", 3000),
// ]).then((values) => {
//   console.log(values);
// });

// Task 9

Promise.race([fetchData("First Promise",2000), fetchData("Second Promise",1000)]).then((value) => {
});
