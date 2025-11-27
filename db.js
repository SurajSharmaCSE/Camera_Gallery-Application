// Open a database
// Create objectstore
// Make transactions

// open a database
let db;
let openRequest = indexedDB.open("myDatabase");
openRequest.addEventListener("success",(e)=>{
    console.log("success")
    db = openRequest.result;
})

openRequest.addEventListener("error", (e) => {
    console.log("DB error");
})
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log("DB upgraded and also for initial DB creation");
    db = openRequest.result;

    db.createObjectStore("video", { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });
})

