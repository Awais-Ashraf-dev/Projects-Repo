// // Asynchronous vs Synchronous

// // Asynchronous = pehly aik request jati phr dosri jati aur agathy reply ata donu ka
// // fawaid of asynchronous is = main thread ko block ni krta  
// // Synchronous = pehly aik request jati phr reply ata aur phr us k baad dosri jati aur phr uska reply ata ha. 
// // JWT = Javascript Web Token
// // cookies = browser cache hota ha
// // 2nd: callbacks = jis mai request aik stack mai jati aur complete hokr wapis ati
// // aesa fuunction jis mai aik aur means k multiple function ho tou wo callback bn jata ha 
// // Pub Sub architecture= publisher subscriber architecture jis mai aik server hota ha aur lakhun requests ko process krta ha
// const prompt = require("prompt-sync")();

// console.log("First")
// console.log("Second")
// console.log("Third")

// // un sequential execution

// console.log("First")
// setTimeout(()=>console.log('Second'),5000);
// console.log("Third");

// const { log } = require("console");
// // file system

const file_system= require('fs')


// file_system.readFile('input.js',(err,data)=>{
//     if (err){
//         console.log("Err")
//     }
//     else 
//     {
//         // data +="ABC"
//         console.log(data.toString());
//     }
// }
//        // Modify the file content
  

// );

// // let modifiedData = data.toUpperCase();

// file_system.writeFile('input.js',(err,data)=>{
//     if (err){
//         throw new 
//         console.log("File hasbeen saved");
//     }
//     else 
//     {
//         data +="Data added through write"
//         console.log(data.toString());
//     }
// }

// )

////promises .then
//read dir
// file_system.readdir("C:/Users/Awais/Desktop/new dir",(err,data)=>{
//     if(err) console.log('err')
//     data.forEach(datas=>console.log(datas));  
// })
///ACEES DATA FROM SERVER
const fetch = require('node-fetch');
const { resolve } = require('path');
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => console.log(response)) 
.then((json) => console.log(json))
////promise code
let promise = new Promise(function(resolve,reject){
    setTimeout(()=> resolve('done'),1000);
})
let failed_promise = new Promise(function(resolve,reject){
    setTimeout(() => reject('whops'),1000);
})
///home work /// koi ik api choose kren r os ko fetch read r promise ko use krna h..