// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10                                             
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null	
//                     }
//                 }
//             }
//         }
//     }
// };


// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     append(node){
//         if(!this.head){ // checking if the list is empty 
//             this.head = node; // if the list is empty make the head to first node
//         }else {
//             let current = this.head; // if the list is not empty start from the head of the list
//             while(current.next !== null){
//                 current = current.next;
//             }
//             current.next = node; // add the new node to the end of the list
//         }
//     }

//     delete(data){
//         if(!this.head){
//             return
//         }

//         if(this.head.data === data){
//             this.head = this.head.next;
//             return;
//         }

//         let current = this.head;

//         while(current.next !== null){
//             if(current.next.data === data){
//                 current.next = current.next.next;
//                 return;
//             }

//             current = current.next;
//         }

//     }

//     display(){
//         let current = this.head;
//         let elements = []
//         while(current !== null){
//             elements.push(current.data);
//             current = current.next;
//         }
//         return elements.join(" --> ")
//     }
// }

// let element1 = new Node(1),element2 = new Node(2),element3 = new Node(3),element4 = new Node(4);
// const firstList = new LinkedList();
// firstList.append(element1);
// firstList.append(element2);
// firstList.append(element3);
// firstList.append(element4);
// console.log(firstList.display())
// console.log(firstList)

// console.log(element1)

// class Stack{
//     constructor(items = []){
//         this.items = items
//     }

//     pushItems(item){
//         return this.items.push(item)
//     }

//     isEmpty(){
//         return this.items.length == 0;
//     }

//     pop(){
//         if(this.isEmpty()) return "UnderFlow";
//         return this.items.pop()
//     }

//     peek(){
//         if(this.isEmpty()) return "UnderFlow";
//         return this.items[0];
//     }
// }

// let arr = [1,2,3]

// let firstStack = new Stack(arr);

// console.log(firstStack)

// firstStack.push(4)
// firstStack.pop()
// console.log(firstStack.peek())
// console.log(firstStack)

// function reverseString(str){
//     let stack = new Stack();

//     for(let i =0;i<str.length;i++){
//         stack.pushItems(str[i])
//     }

//     let reversedStr = "";
//     while(!stack.isEmpty()){
//        reversedStr += stack.pop();
//     }
//     return reversedStr;
// }
// let string = "hello";
// let a = reverseString(string);
// console.log(a);

// enqueue : To add elements at the end of the queue.
// dequeue: To remove an element from the front of the queue.
// peek: To get the front element without removing it.
// isEmpty: To check whether an element is present in the queue or not.
// printQueue: To print the elements present in the queue.


// class Queue{
//     constructor(){
//         this.items = [];
//         this.frontIndex = 0;
//         this.backIndex = 0;
//     }

//     enqueue(item){
//         this.items[this.backIndex] = item;
//         this.backIndex++;
//         return item + " addded"
//     }    

//     dequeue(){
//         const item = this.items[this.frontIndex];
//         delete this.items[this.frontIndex];
//         this.frontIndex++;
//         return item + " Deleted";
//     }

//     front(){
//         const firstElement = this.items[this.frontIndex];
//         return firstElement
//     }
// }

// const queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.dequeue()
// console.log(queue.front())


// class PrinterQueue{
//     constructor(){
//         this.jobs = [];
//     }

//     addJobs(job){
//         this.jobs.push(job);
//         return job + " Added to the jobs";
//     }

//     printJobs() {
//         for(let i = 0;i<this.jobs.length;i++){
//             console.log(`Processing ${this.jobs[i]}`)
//         }
//     }
// }

// let firstPrinterQueue = new PrinterQueue();
// firstPrinterQueue.addJobs("Document 1");
// firstPrinterQueue.addJobs("Document 2");

// firstPrinterQueue.printJobs()

class TreeNode{
    constructor(value,left,right){
        this.value = value;
        this.left = left;
        this.right =right;
    }
}

let FirstNode = new TreeNode(1,2,3);

                             //      1
                            //     /  \
                            //    2    3

class BinaryTree{
    
}