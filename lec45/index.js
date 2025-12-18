// variable hoisting

// var age =25;
// console.log(age);

// // Hoisting
// SayMyName("yoyo");
// function SayMyName(finalname){
//     console.log(finalname);
// } 
 
//   copy see bhi padhna

///// let and const mai diikat variable hosting mai

// console.log(age);
// let age = 25; /// gives error

// class level hoisting is not possible

// const object1 = new Human();
// class Human{

// }

// // function call stack;

//////////////////////////////////

// let greet = function(){
//     console.log("Greeting for the day");
// }
// greet();

// // fn  pass

// function greetMe(greet,name){
//     console.log("Hello ",name);
//     greet();
// }

// let greet = function(){
//     console.log("Greeting for the day");
// }
// greetMe(greet,"yash");

/// fn returnnig

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans = solve(5);
// let Finalans = ans(10);
// console.log(Finalans);

////// store fn in data structure

// const arr = [
//     function(a, b) {
//         return a + b;
//     },
//     function(a, b) {
//         return a - b;
//     },
//     function(a, b) {
//         return a * b;
//     },
//     function(a, b) {
//         return a / b;
//     },
// ];

// let first = arr[2];
// let firstans = first(4, 6);
// console.log(firstans);



////// fn as object

// let obj={
//     age:25,
//     wt:36,
//     ht:180,
//     greet: ()=>{
//         console.log("Hello Duniya");
//     }
// }

// obj.greet();
// console.log( obj.age);
// console.log(obj["age"]);  


/////fn expression

// console.log(greet)
// var greet = function () {
//     console.log("Nmaste duniya");
// } 
