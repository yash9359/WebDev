/// java script dom manipulation

/// 1. window  object = global object hota main window of web page,highest hierarchy
//// koi bhi global variable hai to  vo window object ki property mana jaweyga
//// global method bhi window obj ka behaviour mana jayega


/// 2 . DOM = document objevt model 
/// html code ko js object mai badal diya to vo dom kehlata documnet kehlaata
/// <>(tags)->token->node->dom(tree like structure);
// ye window ka hi bachaa hai means child, window ke anadar hi sbb lay karta hai


//// BOM= Browser object Model= jo bhi interaction browser ke sath ho rahihai html content
// ko chod kar , neavigtaion karna  and vo browser object model ke andar ata

// 🔹 BOM kya karta hai?

// BOM JavaScript ko browser ki cheezon ko control karne deta hai, jaise:

// browser window

// URL

// history (back / forward)

// alert, confirm, prompt

// screen size

// 📌 Ye HTML se related nahi hota (wo DOM hai)


//// agar HTML se related to vo dom ke anadar ata



//// 1. access(fetch any tag or element) it has many method
////// a. id basies pe, class base pe,tag name pe access,in respone singal o/p
//////// multiple o/p posssible




// // 1. div select karo
// let mydiv = document.querySelector("#mydiv");

// // 2. naya element banao
// let newElement = document.createElement("h1");

// // 3. text daalo (PROPERTY hai, function nahi)
// newElement.textContent = "ha bhai daal diya";

// // 4. DOM me insert karo
// mydiv.insertAdjacentElement("beforebegin", newElement);


// // div select
// let mydiv = document.querySelector("#mydiv");

// // naya element banao
// let newElement = document.createElement("span");

// // text daalo
// newElement.textContent = "naya daal diya";

// adjacent insert (element version)
// mydiv.insertAdjacentElement("beforebegin", newElement);
// mydiv.insertAdjacentElement("afterbegin", newElement);
// mydiv.insertAdjacentElement("beforeend", newElement);
// mydiv.insertAdjacentElement("beforebegin", newElement);

let parent = document.getElementById("mydiv");
let child= document.querySelector("#fpara");
let pet = child.parentElement;
console.log(pet);
parent.removeChild(child);
