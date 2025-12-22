// Event kya hota hai? (Simple + solid)

// Event = koi action / ghatna jo browser ke andar hoti hai

// Jab bhi user ya browser kuch karta hai, browser bolta hai:

// “Areee! kuch hua hai!”
// 👉 usko event kehte hain

// 🧠 Daily-life analogy (bonus, jaise tumhe pasand hai 😄)

// Socho tum class me baithe ho:

// Teacher ne attendance li → event

// Bell baji → event

// Tumne haath uthaya → event

// Har action = ek event

// Browser bhi bilkul waise hi kaam karta hai.

// 🖱️ Common browser events
// Action (kya hua)	Event name
// Mouse click	click
// Mouse move	mousemove
// Key press	keydown
// Key chhodi	keyup
// Page scroll	scroll
// Input me type	input
// Page load hua	load

// Ab monitorEvents(document) samjho

// Jab tum likhte ho:

// monitorEvents(document);

// Tum browser se bol rahe ho:

// “Jo bhi event ho raha hai, mujhe dikhao 👀”

// Aur console bolta hai:

// unmonitorEvents(document)

///////////////////////////////////////////////////

// function changeText() {
//   let fpara = document.getElementById("fpara");
//   fpara.textContent = "Babbar";
// }

// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click', changeText);


// fpara.removeEventListener('click',changeText);
// isse event remove ho jayega



//// phases of an event

////event object


// function changeText(event) {
//     // console.log(event); yee event click mila 
//   let fpara = document.getElementById("fpara");
//   fpara.textContent = "Babbar";
// }

// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click', changeText);



//// Default action
// <!-- anchor tag ka default behaviour hai ki link kholna click hone ke baad ab wahi badlenge -->

//  let prevent = (event)=>{
//     /// prevent default tag hota jisse default event jo uska hota vo ruk jata event 
//      event.preventDefault();
//      anchorElement.textContent="Click done bhai"
//  }

// let anchorElement  = document.getElementById('fanchor');

// anchorElement.addEventListener('click', prevent );


///////////////////////////////////////////

// avoiding to many listenners

/// mujhe saare para print karne hai

// let paras =  document.querySelectorAll('p');


let alertpara =  (event)=>{

    /// target saari inforamtion dega kaha click kiya
    /// kewal span keliye dikhaye too nodeName karke proprty hoti hai
    if(event.target.nodeName === 'SPAN'){
     alert("You have Clicked on para:" + event.target.textContent);
    }
   
}

// for(let  i =0;i<paras.length;i++){
//     let para = paras[i];
//     console.log("loop cahala "+ (i+1));
//     para.addEventListener('click',alertpara);
// }


/// mapping ki jarrurat h nahi hai kyuki mydiv saare para ko rakti kyu loop lagao
let mydiv = document.getElementById("wrapper");
mydiv.addEventListener('click',alertpara);








// ✅ Correct understanding (ye yaad rakh ⭐)

// Loop sirf EK BAAR chalta hai — page load par
// Click par sirf usi para ka listener chalta hai

// 🔁 Flow ko bilkul seedha samjho
// 1️⃣ Page load hote hi
// for (let i = 0; i < paras.length; i++) {
//     paras[i].addEventListener('click', () => kaamkaro(i));
// }


// 👉 Loop ne ye kaam kiya:

// Para 1 ko bola: “agar tu click hua → kaamkaro(0)”

// Para 2 ko bola: “agar tu click hua → kaamkaro(1)”

// Para 3 ko bola: “agar tu click hua → kaamkaro(2)”

// 📌 Ye kaam ek baar ho gaya.

// 2️⃣ Ab tum click karte ho (maan lo 2nd para)

// Browser bolta hai:

// “Is element ke paas kaunsa function attach hai?”

// Answer:

// () => kaamkaro(1)


// ➡️ Sirf yehi function chalega
// ➡️ Loop dobara nahi chalega

// 🧠 One-line version (exam ready)

// Loop event listener attach karta hai,
// click event sirf attached listener ko trigger karta hai

// 🔔 Analogy (final lock 😄)

// Loop = sab bells lagana

// Click = ek bell bajana

// Bells lagane ka kaam baar-baar nahi hota 😉





// 🔥 DOMContentLoaded ka actual use-case kya hai?

// JS tabhi DOM ko touch kare jab DOM ready ho.

// Bas.
// Isse zyada deep nahi.

// ❌ Problem jo bina iske aati hai
// <script src="index.js"></script>

// <p id="fpara">Hello</p>

// let p = document.getElementById("fpara");
// p.textContent = "Babbar";


// 👉 Error:

// Cannot read properties of null

// Kyun?

// JS pehle load ho gayi

// DOM abhi bana hi nahi

// ✅ Solution: DOMContentLoaded
// document.addEventListener("DOMContentLoaded", () => {
//     let p = document.getElementById("fpara");
//     p.textContent = "Babbar";
// });


// 👉 Ab JS bolegi:

// “DOM ready ho jaaye, tab kaam karunga”

// 🧠 Real-world use-cases (ye yaad rakh ⭐)
// 1️⃣ DOM pe event listeners lagana
// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("button")
//       .addEventListener("click", handleClick);
// });

// 2️⃣ Dynamic DOM manipulation
// document.addEventListener("DOMContentLoaded", () => {
//     document.body.classList.add("loaded");
// });

// 3️⃣ JS file head me ho

// (legacy / old projects)

// <head>
//   <script src="app.js"></script>
// </head>


// ➡️ Tab mandatory hai

// 🆚 Modern best practice (important 🔥)
// ❓ Kya aaj bhi DOMContentLoaded use hota hai?

// 👉 Less, kyunki hum ye use karte hain:

// <script src="index.js" defer></script>

// defer kya karta hai?

// HTML pehle parse

// JS baad me

// DOM ready hone par JS run

// ➡️ Same kaam, cleaner way

// 🎯 Interview-ready one-liner

// DOMContentLoaded ensures JavaScript runs only after the DOM is fully constructed, preventing null reference errors.

// 🔒 Final conclusion (lock kar lo)

// DOM ko safely access karna = DOMContentLoaded

// Modern HTML = defer

// Images ka wait nahi = fast execution