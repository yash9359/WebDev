
// Global scope

// var age =15; // we avoid global scoping

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }

// function sayhello(){
//     console.log("hi ",age);
// }
//  sayhello();



//////////////////////////////////


/// variable fn scoping

// function sayhello(){
//     let name = "Earth";
//     console.log(name);
// }
// sayhello();

// not accessible
// console.log(name);


/////////// block scope

//// var block scope nahi hota

// {
//     var height = 180;
// }
// // accessible
// console.log(height);


// ///// let  and const block scope hota hai

// {
//     let he = 130;
//     const hi = 20;
// }
// // gives error 
// console.log(he);
// console.log(hi);





////// temporal dead zone

// app ne hoisting ki variable wali lekin var ki jagh  let ya const ka
//  use kiya  to vo error denge jaha se jaha 


// console.log(marks);
// console.log("hello");
// console.log("killo");
// let marks = 100;
// console.log(marks);


/// line number 69 to 72 temporal dead zone hai kyki marks ka use nahi 
// kar paa rahe