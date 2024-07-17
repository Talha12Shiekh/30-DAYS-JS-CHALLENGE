//                               Activity 1

// Task 1


function checkEvenOdd(num){
    if(num % 2 === 0){
        console.log("Number is Even")
    }else {
        console.log("Number is Odd")
    }
}

checkEvenOdd(8);

// Task 2

function square(num){
    return num*num;
}

console.log(square(2))


//                               Activity 2

// Task 3

const CalculateMax = function(n1,n2){
    return Math.max(n1,n2);
}

console.log(CalculateMax(3,4))

// Task 4

const ConcatenateStrings = function(str1,str2){
    return str1+str2;
}
console.log(ConcatenateStrings("Hello"," World"))



//                               Activity 3

// Task 5

const Sum = (n1,n2) => n1 + n2;

console.log(Sum(1,2));

// Task 6

const CheckCharacter = (str,ch) => {
    if(str.length == 0) return;

    return str.includes(ch)
}

console.log(CheckCharacter("Hello World","l"));



//                               Activity 4

// Task 7

function product(n1,n2 = 5){
    return n1 * n2;
}

console.log(product(5,3));

// Task 8

function gretting(name,age = 10){
    return `Hello ${name} you are ${age} years old`;
}

console.log(gretting("Talha",18));

//                               Activity 5

// Task 9

function higherorder(func,num){
    for(let i = 1 ; i <= num ; i++){
        func()
    }
}

higherorder(() => console.log("Hello World"),5);

// Task 10

function final(func1,func2,num){
    let appliedvalue = func1(num);
    let result = func2(appliedvalue);
    return result;
}

const firstfn = (num) => num + 2;
const secondfn = (num) => num;

console.log(final(firstfn,secondfn,2));