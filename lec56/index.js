// // let firstPromise = new Promise((resolve ,reject)=>{
// //     console.log("yash");
// //     // resolve(1001);
// //     reject(new Error("Internal Server Error"));
// // });


// /// Asyncronus code


// // function sayMyNmae(){
// //     console.log("Yash Gupta");
// // }
// // // milii seconds 1sec = 1000ms
// // setTimeout(sayMyNmae,10000); 


// // // asyncrouns with promise

// function sayMyNmae(){
//     console.log("Yash Gupta");
// }


// let firstPromise = new Promise((resolve ,reject)=>{
//     setTimeout(sayMyNmae,10000); 
//     resolve(1);
// });



// let promise1 = new Promise((resolve,reject)=>{

//     let success  = false;
//     if(success){
//         resolve("Promise Fullfilled");
//     }
//     else{
//         reject("promise Rejected");
//     }

// });

// promise1.then((message)=>{
//     console.log("Then ka message is : "+message);
// }).catch((error)=>{
//     console.log("Error: "+ error);
// })


//// multiple then(promise chaining)

// promise1.then((message)=>{
//     console.log("first: "+message);
//      return "promise fulfilled second message";
// }).then((message)=>{
//     console.log("second"+message);
//     return "promise fulfilled third message";
// }).then((message)=>{
//     console.log("third "+message)
// }).catch((error)=>{
//     console.log("error: "+error)
// }).finally((message)=>{
//     console.log("mai finally hu hmesha chalunga chae resolve ho ya reject")
// })



let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third");
})



//// if we have to handle multiple promises then we should use promise.all

// nyaya promise bnega ye tab fullfil hoga jab  saare promise resolve honge agra ek bhi reh gya reject to ye bhi reject

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
});
