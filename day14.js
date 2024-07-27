
class Person {
    constructor(name, age,lname) {
        this.name = name;
        this.age = age;
        this.lastName = lname;
    }

    gretting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }

    get fullName() {
        console.log(`${this.name} ${this.lastName}`);
    }

    set updateFName(fname){
        this.name = fname;
    }
    set updateLName(lname){
        this.lastName = lname;
    }

    static sayHelloToPerson(){
        console.log(`Hello how are you`)
    }


    updateAge(age){
        this.age = age;
    }
}

const person1 = new Person("Talha",18,"Shiekh");

// person1.updateAge(20);

person1.updateFName = "Hello"
person1.updateLName = "World";
// Person.sayHelloToPerson()

person1.fullName

class Student extends Person {
    static NumberOfStudents = 0;
    nameofstudent = "Talha shiekh"

    constructor(name,age,id){
        super(name,age);
        this.studentId = id;
        Student.NumberOfStudents++
    }
    giveId(){
        return this.studentId;
    }

    gretting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} with this roll number ${this.studentId}`);   
    }

    static getNumberOfStudents(){
        console.log(`Number of students created are ${Student.NumberOfStudents}`)
    }

}

const student1 = new Student("Talha",18,698);
const student2 = new Student("Shiekh",20,700);

// console.log(student1.nameofstudent)
// console.log(Student.NumberOfStudents)


class Account {
    #balance = 10;

   set deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: $${amount}`);
    console.log(`Your balance is now ${this.#balance}`)
  }

  set withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}`);
      console.log(`Your balance is now ${this.#balance}`)
    } 
    else 
    {
      console.log(`Want to withdrawn: $${amount}`);
      console.log('Insufficient balance');
    }
  }
}

const firstAccount = new Account();


firstAccount.deposit = 20;
firstAccount.withdraw = 40;

