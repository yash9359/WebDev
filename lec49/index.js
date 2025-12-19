// //// object cloning

//// dynamic in nature ka means


// let obj = {
//     age:12,
//     wt:68,
//     ht:180
// };


// console.log(obj);

// /// object ko dynamic iss liye kehete kykui hmm uski value run time pe change kar sakte hai
// // ye dekho color run time mai jayega obj ke andar
// obj.color = "white";
// console.log(obj);




/////object cloning

// let a={
//     val:12;
// }

// let b = a; // refrence copy ho raha

// yaha refrence liye hai shallow copy hai yee
// agar hm b mai change karnge to a mai apne app cahnge hoga
// ye cloning nahi hai
// One-line rule (yaad rakh 🔥):
// Primitive = value copy matalb JS me primitive types (number, string, boolean, null, undefined, symbol, bigint) (no shallow/deep)
// Object/Array = reference → shallow / deep ka game


/////// ways of object cloning:

// 1 spread operator ka use (...) ye dot dalne honge 3;


// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest ={...src}; // ho gya clone;

// console.log(src);
// console.log(dest);
// /// dekhe lo koi chnage dest mai karoge vo src mai koi  effect

// dest.color ="red";
// console.log("dest:",dest);
// console.log("src:",src);


/// 2. assign method -> dest = object.assign({destination}, source);


//  let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let src2={
//     pop:"top",
//     price:350

// }

// let dest = Object.assign({},src,src2);

// dest.color ="red";
// src.pata ="kanpur";
// console.log("dest:",dest);
// console.log("src:",src);


/// 3. through iteration src ki key value pair dest mai daal do bss




//  let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest = {};
// //// cloning using iteration;
// for(let key in src){
//     console.log(key);
//     let newKey = key;
//     let newValue = src[key];
//     dest[newKey]=newValue;
// };
// src.age= 90;

// console.log("dest:",dest);
// console.log("src:",src);



///// garbage collector;

// c++ mai heap memory jo hm new keyword se bante hai khud se delete nahi hoti jise hm free karke delete karna hota
// pr js mai garbage collector hota hai 
//hmne koi cde likha jisme koi memory hai jo no longer in use to garbage collecter usse khud hi remove kar deta memory leak se get rid ho jata
// ye gc hmesa background mai run karte rehagea