// let obj = {
//     name:  "Love",
//     "Full name":" Love Baabar",
//     weight : 25,
//     height : "6ft 1inch",
//     greet: function(){
//         console.log("hllo ji kese hai app sabhi log");
//     }

// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj))

// creation of array

// let arr  = [1,2,3,4,5]
// console.log(arr);

// // /// array constructor
//  let brr = new Array('love',1,true);
// console.log(brr);

// console.log(typeof(arr),typeof(brr),);

// builtinfn in array

// brr.push("babbar");
// brr.pop()
// brr.shift() // remove leftmost element;
// brr.unshift("kk")// add value in leftmost side;
// console.log(brr);
// let brr = new Array(10,20,30);
// brr.push(40);
// brr.push(50);
// brr.push(60);
// brr.push(70);
// // console.log(brr);
// // console.log(brr.slice(2,4)); // Slice print karega
// console.log(brr.splice(1,2,'kalsh')); // Splice deleted elements return karta hai Lekin original array MODIFY ho chuki hoti hai
// console.log(brr)

// map fn

// let arr = [10,20,30];
// let ansArray = arr.map(
//     (number)=>{
//         return number*number;
//     }
// )
// console.log(ansArray);

// arr.map(
//     (number,index)=>{
//         console.log(number);
//         console.log(index);
//     }
// )

//  //// Filter fn

// filter() ka rule

// filter() true / false expect karta hai

// true → element include

// false → element exclude

// original array change nahi hota

// let  arr = [1,2,3,4,5,6];

// let evenArray = arr.filter(
//     (number)=>{
//         if(number%2 === 0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// );

// console.log(evenArray);

// let arr = [1, 2, "love", "kunal", null];

// let filterArray=arr.filter((value) => {
//   return typeof(value) === "number";
// });

// console.log(filterArray);

// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acc, current) => {
//   console.log("acc:", acc, " ", "curr: ", current);
//   return acc + current; // acc mai store krta hai
// }, 0);

// console.log(ans);


// let arr = [9,1,7,4,2,8];
// arr.sort();
// console.log(arr);

// comparator;
// arr.sort((a,b)=> a-b);
// console.log(arr);
// arr.sort((a,b) => b-a);
// console.log(arr);


// indexof method

// console.log(arr.indexOf(4));// element ka idx deta

// let ans =arr.find((value)=>{
//     return value ===20; /// index return karega agra hoga too
// });
// console.log(ans);




//////// for each loop

// let arr = [10,20,30];
// let length = arr.length;
// console.log(length);

// arr.forEach((Value,index)=>{
//     console.log("Number: ",Value,"Index: ",index);
// });

//////for in loop =objects pe lgta hai

// let obj = {
//     name:  "Love",
//     "Full name":" Love Baabar",
//     weight : 25,
//     height : "6ft 1inch",
//     greet: function(){
//         console.log("hllo ji kese hai app sabhi log");
//     }
// }

// for(let key in obj){
//     console.log(key," ",obj[key]);
// }


// ////// for of loop == array string ke liye

// let arr = [1,2,3,4,5];
// for(let value of arr){
//      console.log(value);
// }


//// how to pass array in fn


let arr  = [1,2,3,4,5,6];

let  getSum = (arr)=>{

    let sum = 0;

    for(let i = 0; i<arr.length;i++ ){
        sum = sum+arr[i];
    }

    arr.forEach((value) => {
        sum+=value;
        
    });

    return sum;
}

console.log(getSum(arr));
