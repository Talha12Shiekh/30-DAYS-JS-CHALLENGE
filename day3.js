//                               Activity 1

// Task 1
let num1 = 5;
if(num1 > 0){
    console.log("Number is positive");
}else if(num1 === 0){
    console.log("Number is zero")
}else {
    console.log("Number is negative");
}

// Task 2
let age = 15;
if(age >= 18){
    console.log("You are eligible to vote")
}else {
    console.log("You are not eligible to vote")
}

//                               Activity 2

// Task 3
let n1 = 5,n2=4,n3=3;

if(n1 > n2){
    if(n1 > n3){
        console.log("First Number is the largest")
    }else {
        console.log("Third Number is the largest")
    }
}else {
    if(n2 > n3){
        console.log("Second Number is the largest")
    }else {
        console.log("Third Number is the largest")
    }
}

//                               Activity 3

// Task 4

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;    
}

// Task 5
let score = 80;

switch(score){
    case 90:
        console.log("Grade is A");
        break;
    case 80:
        console.log("Grade is B");
        break;
    case 70:
        console.log("Grade is C");
        break;
    case 60:
        console.log("Grade is D");
        break;
    default:
        console.log("Grade is E");
        break;
}


//                               Activity 4

// Task 6
let number = 4;
number % 2 == 0 ? console.log("Number is Even") : console.log("Number is odd");

//                               Activity 5

// Task 7
let year = 2024;
if(year % 100 == 0 ? year % 400 == 0  : year % 4 === 0){
    console.log("Year is a leap year")
}else {
    console.log("Year is not a leap year")
}
