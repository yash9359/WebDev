// async function getdata() {
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     },3000);
// }
// let opt = getdata();

// await -?

//fetch API

// async,await ka use mai tabhi karunga jab mujhe promise ko handle karna hoga ye hmesa ek promise return karega

// //fetch API

// get request in fetch api

// async function getData(){

//     // agar fn async mark nahi kara to app await ka ise nahi kar skte hai
//     // get request- asyncronus opertaion hai to usse await mark karo

//    let responce= await fetch('https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/comments?postId=1');

//   /// parse json- async
//   let data = await responce.json();

//    console.log(data);
// }
// getData();

// secnario
// prepare url-> sync
// await -> jab jak data nahi ata tab tak niche nahi jayega//fetch data-> network call->async
//process data->sync
// https://jsonplaceholder.typicode.com/posts

// post request

// 🔁 HTTP request ke 3 main parts

// 1️⃣ URL – kahan bhejna
// 2️⃣ Headers – kaise samjhun
// 3️⃣ Body – kya bhejna

async function postData() {
  try {
     let res = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Yash Gupta->I am in love with anonymous .",
        userId: 5,
        /* other post data */
      }),
    });

    const data = await res.json();
    console.log("Post data response:", data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

async function getData() {
  try {
    let responce = await fetch(
      "https://dummyjson.com/posts/user/252"
    );

    let data = await responce.json();

    console.log("Get Data resposne:", data);
  } catch (err) {
    console.log("error: ", err.message);
  }
}
async function processData() {
  await postData();
  await getData();
}
processData();

// ✅ Basic POST request (Fetch API)
// fetch("https://example.com/api/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "Yash",
//         age: 21
//     })
// })
// .then(res => res.json())
// .then(data => {
//     console.log("Success:", data);
// })
// .catch(err => {
//     console.log("Error:", err);
// });

// 🧩 Isme kya ho raha hai (line by line)
// 1️⃣ URL
// fetch("https://example.com/api/users", { ... })

// ➡️ Jahan data bhejna hai (server ka address)

// 2️⃣ method
// method: "POST"

// ➡️ Bata rahe ho: “Bhai main data bhejne aaya hoon”

// 3️⃣ headers
// headers: {
//     "Content-Type": "application/json"
// }

// ➡️ Server ko bol rahe ho:

// “Data JSON format me bhej raha hoon”

// 4️⃣ body (MOST IMPORTANT ⚠️)
// body: JSON.stringify({
//     name: "Yash",
//     age: 21
// })

// 👉 JavaScript object ❌
// 👉 JSON string ✔️

// Isliye JSON.stringify() compulsory hota hai.
