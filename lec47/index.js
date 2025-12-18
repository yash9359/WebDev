//  class is blue print

//  blue print ko convert karte asli thing mai to vo object hota hai 

// class Human{
  
//     // properties
     
//     age  = 13; ///  public
//     #wt = 80; /// private by using  # ,, kewal class ke andr chalega
//     ht = 180;

//     // behaviour

//     walking(){
//         // private wale this se print se hote
//         console.log("I am walking ,", "wt:",this.#wt);
//     }

//     running(){
//         console.log("I am running");
//     }
  
  

// };

//  // obj created
// let obj = new Human();

// console.log(obj.wt); // private thing accessing
// obj.walking();



////// mere pass class hai usme maine private ka use kiya properties mai 
////// tooo usko class ke bahar use  karne ke  liye getters and setters ka use karte hai
/////   fetch = getters ka use, update ke liye setters ka use



// class Human{
  
//     // properties
     
//     age ; ///  public
//     #wt = 80; /// private by using  # ,, kewal class ke andr chalega
//     ht = 180;


//     // constructer

//     constructor(newAge,NewHeight,newWeight){

//         // object ko this se access karte newage ko age mai dalna

//         this.age = newAge;
//         this.ht = NewHeight;
//         this.#wt = newWeight;


//     }

//     // behaviour

//     walking(){
//         // private wale this se print se hote
//         console.log("I am walking ,", "wt:",this.#wt);
//     }

//     running(){
//         console.log("I am running");
//     }
    

//     // encapsulation kr diya data protection diya
//     // getters = jab mn kree pvt wale ko use karne ka too getters ka use karo 
//     get fetchWeight(){
//         return this.#wt;
//     }

//     // setters

//     set modifyWeight(val){
//         this.#wt = val;
//     }

// };

//  // obj created
// let obj = new Human(50,190,120);// constructer ko value bhi pass kar di

// // console.log(obj.wt); // private thing accessing but gives error
// console.log(obj.fetchWeight); // accessing by getters
// obj.walking();







/// default parameter

//// allow to use functions with default values
// ye tab use hota jab app fn call karte orr parametr dalna bhul jate then
/// vo jo default parameters leta wahi hai


// function sayName(myName ="Honey Singh", age= 18){

//     /// jab value pass nahi ki tab honey singh ayega and age =18
//     console.log("My Name is:", myName,", age: ", age);

// }
// sayName();
// sayName("yash");
// sayName("yash", 20);



// /// one parameter is dependend on another


// function sayName(fName ="Honey", lName= fName.toUpperCase()){

//     /// jab value pass nahi ki tab honey singh ayega and age =18
//     console.log("My Name is:", fName," ", lName);

// }
// sayName();
// sayName("yash");
// sayName("yash");



/////// default parameter mai object daal diya it is also possible 
// arry bhi insert kar sakte hai

// function solve(value ={age:15,wt:90, ht:190}){
//     console.log("Heloo Jii",value);
// }
// solve();



// function solve(value =[1,2,3,4]){
//     console.log("Heloo Jii",value);
// }
// solve();



///// null and undefind

// // null case;
// function solve(value ="Rahul"){
//     console.log("Heloo Jii",value);
// }
// solve(null);/// sabke sath null print hoga

// // undefind case;

// function solve(value ="Rahul"){
//     console.log("Heloo Jii->",value);
// }
// solve(undefined);/// undefined ke case mai default value print hoga




//// default mai fn bhi passs kar sakte hai

// function getAge(){
//     return 190;
// }
// // fn bhi default value bana di
// function utility(name ="Love",age=getAge()){
//     console.log(name, " ",age);

// }

// utility();