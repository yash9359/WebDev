// 1️⃣ document.getElementById("spara")
// let paraElement = document.getElementById("spara")


// 👉 Browser ne element dhoondh liya, isliye koi error nahi aaya.
// Console me undefined isliye dikhta hai kyunki assignment ka return value kuch nahi hota.

// 2️⃣ paraElement print kiya
// paraElement


// Output:

// <p id="spara" style="background-color: orange; padding: 0.8rem;">
//   second para
// </p>


// 👉 Matlab:

// Tu actual DOM element pakad chuka hai

// Ye ek <p> tag hai jisme inline CSS already lagi hui hai

// 3️⃣ paraElement.style
// console.log(paraElement.style);


// Output:

// CSSStyleDeclaration {
//   0: 'background-color',
//   1: 'padding-top',
//   2: 'padding-right',
//   3: 'padding-bottom',
//   4: 'padding-left',
//   ...
// }

// Important baat 🧠

// style ek object hota hai jisme:

// sirf inline styles

// aur jo JS se lagayi ja sakti hain

// 👉 CSS file wali styles yahan nahi dikhti

// 4️⃣ Background color change kiya
// paraElement.style.backgroundColor = "blue";


// Output:

// "blue"

// Iska matlab:

// JS ne value set kar di ✅

// "blue" return hua kyunki assignment ka result wahi value hota hai

// Aur DOM me ab element aisa ho gaya:

// <p id="spara" style="background-color: blue; padding: 0.8rem;">


// 🎉 Orange → Blue

// ⚠️ Ek common confusion clear kar deta hoon
// CSS me:
// background-color

// JavaScript me:
// backgroundColor


// 👉 Hyphen ❌
// 👉 camelCase ✅

// Examples:

// font-size      → fontSize
// margin-top    → marginTop
// border-radius → borderRadius




// 📘 style.cssText — COMPLETE NOTES (Only This Topic)
// 1️⃣ cssText hota kya hai?
// cssText = inline CSS ka pure ka pure text form


// 👉 Ye string hoti hai
// 👉 Sirf INLINE styles ko represent karti hai
// 👉 CSSStyleDeclaration ka property hai

// 📌 Location:

// element.style.cssText   ✅
// element.cssText         ❌

// 2️⃣ Tumhara example (base)
// <div id="sdiv"
//      style="background-color: rgb(222, 255, 37); padding: 1.2rem;">
// </div>

// 3️⃣ Direct access kyu fail hota hai?
// secondElement.cssText; // ❌ undefined


// ❌ Reason:

// cssText DOM element ka property nahi

// Ye style object ke andar hota hai

// ✔️ Correct:

// secondElement.style.cssText;

// 4️⃣ Read mode (get cssText)
// secondElement.style.cssText;


// Output:

// "background-color: rgb(222, 255, 37); padding: 1.2rem;"


// 📌 Matlab:

// Saari inline CSS

// Same order me

// Ek hi string ke form me

// 5️⃣ Write mode (set cssText)
// secondElement.style.cssText =
//   "background-color:black; color:white; padding:0.5rem;";


// 📌 Ye kya karta hai?

// Puri inline CSS ko overwrite

// Naya style apply

// 6️⃣ ⚠️ MOST IMPORTANT BEHAVIOUR
// cssText = FULL REPLACEMENT


// Example:

// Pehle
// background-color: rgb(222, 255, 37);
// padding: 1.2rem;

// Baad me
// element.style.cssText = "color:white;";

// Final result
// color: white;


// ❌ background-color gayab
// ❌ padding gayab





// 📘 setAttribute() — COMPLETE EXPLANATION (Your Example)
// 1️⃣ Element select kiya
// let firstElement = document.querySelector("#fdiv");


// Element mil gaya

// undefined normal hai (assignment return nahi karta)

// <div id="fdiv" style="background-color:aqua; padding:2rem;"></div>

// 2️⃣ setAttribute('class', 'divClass')
// firstElement.setAttribute('class','divClass');


// ✔️ Kya hua:

// class attribute add ho gaya

// Agar pehle class hoti → overwrite ho jaati

// <div id="fdiv" class="divClass"></div>


// 📌 Rule:

// setAttribute hamesha overwrite karta hai

// 3️⃣ Dubara class set ki
// firstElement.setAttribute('class','secondDivClass');


// ✔️ Result:

// class="secondDivClass"


// ❌ divClass gayab
// ➡️ kyunki overwrite

// 4️⃣ ❌ Ye error kyu aaya?
// firstElement.setAttribute('class','secondDivClass,);

// ❌ Error:
// Uncaught SyntaxError: Invalid or unexpected token

// 🧠 Reason:

// String close nahi hui

// Ending ' missing hai

// JS isko aise padh raha:

// 'secondDivClass,)

// ✅ Correct:
// firstElement.setAttribute('class','secondDivClass');

// 5️⃣ ❌ style set karte waqt error
// firstElement.setAttribute('style',"background-color:blue;"

// ❌ Error:
// SyntaxError: missing ) after argument list

// 🧠 Reason:

// Function call complete nahi hua

// ) missing hai

// ❌ Tumne likha:
// setAttribute( 'style', "background-color:blue;"

// ✅ Correct:
// firstElement.setAttribute('style',"background-color:blue;");

// 6️⃣ Same mistake dobara
// firstElement.setAttribute('style',"padding:0.5rem;"


// ❌ Error same
// 🧠 Reason same → ) missing

// ✅ Correct:
// firstElement.setAttribute('style',"padding:0.5rem;");

// 7️⃣ ⚠️ Very Important Behaviour (style attribute)
// firstElement.setAttribute('style',"padding:0.5rem;");

// ❌ Kya gaya?
// background-color:aqua;  ❌ removed

// ✔️ Kya bacha?
// padding:0.5rem;


// 📌 Rule:

// setAttribute('style', ...) = FULL overwrite

// 8️⃣ setAttribute vs .style.property
// ❌ Risky
// setAttribute('style',"padding:0.5rem;");

// ✅ Safe
// firstElement.style.padding = "0.5rem";


// ✔️ Background safe
// ✔️ Sirf padding change

// 9️⃣ setAttribute vs classList
// ❌ Avoid
// setAttribute('class','box');

// ✅ Prefer
// firstElement.classList.add("box");


// ✔️ Old classes safe
// ✔️ Industry standard

// 🔟 One-line rules (yaad rakh)
// setAttribute overwrite karta hai
// style attribute pura reset hota hai
// string quotes + brackets perfect hone chahiye

// 🔥 Interview line

// "setAttribute sets or replaces an attribute completely; it does not merge values."



// $0, className, classList — COMPLETE EXPLANATION (Your Case)
// 1️⃣ $0 kya hota hai?
// let fpara = $0;


// ✔️ $0 = Chrome DevTools me last selected element
// ✔️ Inspect (Elements tab) me jis element pe click kiya → wahi $0

// Isliye:

// undefined


// normal hai (assignment return nahi karta)

// 2️⃣ ❌ fapara error
// fapara

// ❌ Error:
// Uncaught ReferenceError: fapara is not defined

// 🧠 Reason:

// Variable ka naam galat type ho gaya

// Tumne banaya: fpara

// Tum call kar rahe: fapara

// 📌 JavaScript case + spelling sensitive hoti hai

// ✅ Correct:

// fpara

// 3️⃣ fpara check kiya
// fpara


// Output:

// <p id="fpara" class="goku" style="background-color: green; padding: 1rem;">


// ✔️ Element sahi pakda gaya

// 4️⃣ className kya deta hai?
// fpara.className


// Output:

// "goku"


// 📌 className:

// Element ki saari classes ek string me deta hai

// Space-separated hoti hain

// 5️⃣ ❌ Comma wali mistake
// fpara.className = "Gohan,Bulbul";


// Output:

// "Gohan,Bulbul"

// 🧠 Important samjho:

// HTML me class separator = SPACE, comma ❌

// Isliye browser ne maana:

// Ek hi class hai → "Gohan,Bulbul"

// 6️⃣ classList check ki
// fpara.classList


// Output:

// DOMTokenList ['Gohan,Bulbul']


// ✔️ Proof:

// Browser ne comma ko split nahi kiya

// Ek hi class treat hui

// 7️⃣ ❌ Typo mistake
// fpara.clasName


// Output:

// undefined


// 🧠 Reason:

// Property ka naam galat

// Sahi spelling: className

// JavaScript silently undefined de deti hai

// 8️⃣ ✅ Correct multiple classes
// fpara.className = "Gohan Bulbul";


// Output:

// "Gohan Bulbul"


// 📌 Ab browser samjhega:

// 2 classes:
// ✔️ Gohan
// ✔️ Bulbul

// 9️⃣ className vs classList
// className
// fpara.className = "A B";


// ❌ Purani classes overwrite

// ❌ String handling risky

// classList (BEST)
// fpara.classList.add("A");
// fpara.classList.add("B");
// fpara.classList.remove("A");
// fpara.classList.toggle("dark");


// ✔️ Safe
// ✔️ Clean
// ✔️ Industry standard

// 🔟 One-line yaad rakh (🔥 exam ready)
// $0 = last selected element in DevTools
// className = string (space separated)
// comma is NOT valid in class
// classList is preferred
// JS is spelling + case sensitive

// 🧠 Final analogy

// className = poora naam replace

// classList = naam me add/remove

// comma = illegal separator

// Agar bole to next isi chain me:

// classList.add/remove/toggle

// setAttribute vs className vs classList

// real project mistake patterns

// Bas bol 😎





// 📘 classList — Step-by-Step (Your Example)
// 1️⃣ Element select kiya
// let fpara = document.querySelector("#fpara");

// <p id="fpara" class="firstclass secondclass"></p>

// 2️⃣ classList kya deta hai?
// fpara.classList


// Output:

// DOMTokenList(2) ['firstclass', 'secondclass']


// 📌 Meaning:

// classList ek array-like object hai

// Har class alag-alag token hoti hai

// Space-separated classes ko tod deta hai

// 3️⃣ add() — class add karna
// fpara.classList.add("thirdClass");


// Result:

// ['firstclass', 'secondclass', 'thirdClass']


// ✔️ Existing classes safe
// ✔️ Duplicate add nahi hota

// 4️⃣ remove() — class hatana
// fpara.classList.remove("firstclass");


// Result:

// ['secondclass', 'thirdClass']


// ✔️ Sirf wahi class remove hoti hai
// ✔️ Baaki untouched

// 5️⃣ toggle() — on/off switch
// Case 1: class present thi
// fpara.classList.toggle("secondclass");


// Output:

// false


// Result:

// ['thirdClass']


// 📌 Rule:

// Agar class thi → remove → return false

// Case 2: class absent thi
// fpara.classList.toggle("secondClass");


// Output:

// true


// Result:

// ['thirdClass', 'secondClass']


// 📌 Rule:

// Agar class nahi thi → add → return true

// 6️⃣ ❗ Case-sensitivity (VERY IMPORTANT)
// fpara.classList.contains("secondclass"); // false
// fpara.classList.contains("secondClass"); // true


// 📌 Reason:

// classList case-sensitive hota hai

// secondclass ≠ secondClass

// 7️⃣ contains() — check karna
// fpara.classList.contains("thirdClass");


// ✔️ true → class present
// ❌ false → class absent

// 🔑 One-Line Rules (Yaad rakh)
// classList = array-like (DOMTokenList)
// add() = add safely
// remove() = remove safely
// toggle() = on/off + boolean return
// contains() = check (true/false)
// class names are CASE-SENSITIVE

// 🧠 Final Analogy

// add → chipka do

// remove → hata do

// toggle → switch jaisa

// contains → check kar lo

// ✅ Best Practice (Real World)

// ✔️ Use classList always
// ❌ Avoid className & setAttribute for classes