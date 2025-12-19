//// error handling
/// it disrupts the normal flow of exicution

// types-> 
// 1. compile time error-> compile(parse time) time mai  code exicute hone se pehle pata chal jaye
// 2. run time error -> error comes at the time of runninf thats called run time error


////// compile time error -> comes at parse time

// sytax error
// console.log(1; // ye dekho pehle bina run kiye hi dikhne laga 

// Run time error
// console.log(x);// x too define nahi kiya at the running time we got it ReferenceError



////// handling of error

// try and  catch block



// try = mai vo code likho jisme error aa  skta hai 
// 1.catch= too catch wala usee pakd leta  and show kar deta and agge ki try ki line exicute nahi hone dega

// try{
//     console.log("try block starts here")
//     console.log(x);
//     // ye line exicute nahi hogi ends wali
//     console.log("try block ends here");
// }

// catch(error){
//     // define krte h , error ke sath aap kya karna chte hai
//     // retry logic
//     // fallback mechanism
//     // logging
//     // cutom error

//     console.log("I am Inside Catch block");
//     console.log("your error is here: ",error);
// }


/// 2. finally block for error handling =  ye kehte tumahra error aye ya naa aye mai to cahlunga hi


// try{
//     console.log("try block starts here")
//     console.log(x);
//     // ye line exicute nahi hogi ends wali
//     console.log("try block ends here");
// }

// catch(error){
//     // define krte h , error ke sath aap kya karna chte hai
//     // retry logic
//     // fallback mechanism
//     // logging
//     // cutom error

//     console.log("I am Inside Catch block");
//     console.log("your error is here: ",error);
// }

// finally{
//     console.log("I will run everytime ,as i am finally block");
// }




///////// we can create custom errors using throw keyword


// try{
//     // Refrence error
//     console.log(x);

// }
// catch(err){
//     throw new Error("Bhai pehle declare karo,fir print karna");
// }

let errorCode = 100;
if(errorCode === 100){
    throw new Error("Invalid Json");
}
