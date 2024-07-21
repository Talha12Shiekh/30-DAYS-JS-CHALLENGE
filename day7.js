// Activity 1

// Task 1

const book = {
    title:"Deep thoughts",
    author:"Talha shiekh",
    year:2024,
    calltitleauthor(){
        console.log(this.title + this.author);
    },
    updateyear(year){
        this.year = year;
    },
    titleandyear(){
        console.log(this.title + this.year);
    }
}

// console.log(book);

// Task 2

// const {title,author} = book;

// console.log(title,author);

// Activity 2

// Task 3

// book.calltitleauthor()

// Task 4

// book.updateyear(2026);
// console.log(book)

// Activity 3

// Task 5

const library = {
    name:"Illetrate Library",
    books:["Physics","Maths","Computer"]
}

// console.log(library);

// Task 6

// const {name,books} = library;

// console.log(name);

// books.forEach(b => console.log(b));

// Activity 4

// Task 7


// book.titleandyear()



// Activity 5

// Task 8

// for(let key in book){
//     console.log(key,book[key]);
// }

// Task 9

const bookkeys = Object.keys(book);
const bookvalues = Object.values(book);
// bookkeys.forEach(k => console.log(k));
bookvalues.forEach(v => console.log(v));