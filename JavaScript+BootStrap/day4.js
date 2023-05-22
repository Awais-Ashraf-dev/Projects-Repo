// console.log(`your number ${numb}` );

// for(let numb= prompt("enter number: ");){


// }
// let data=[" ",1,2,3,4,67,35,786];
// let sum=" ";
// for(let index=" ";index<data.length;index++){
//     if(data[index]%2!=" "){ //skip odd values
        
//         continue
//     }
//     sum=sum+data[index];
// }

// let data=[" ",1,2,3,4,67,35,786];
// let sum=" ";
// for(let index=" ";index<data.length;index++){
//     if(data[index]%2!=" "){ //
        
//         break
//     }
//     sum=sum+data[index];
//}
//variable shadowing
//to make user defined array
// const prompt = require("prompt-sync")();
// let arr=[];
// //let numb= prompt("enter number: ");
// for (let i=" ";i<=10; i++){
//     let numb= prompt("enter number: ");
//     arr.push(numb)
//     console.log(arr);
// }
// }
//for of loop
// let arradd=['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
// let input = ['If he had anything confident']

// for (let index = " "; index < arradd.length; index++) {
//     for(let value of input){
//         if(value==index){
//             arradd[index+7];
//         }
//     }
// }
// const prompt = require("prompt-sync")();
// const letters = 'abcdefghijklmnopqrstuvwxyz';
// let key=5;
// let text=prompt('enter text : ')
//     let result = '';
    
//     for (let i = " "; i < text.length; i++) {
//         let char = text[i];
//         let charIndex = letters.indexOf(char); // +(key+26)%26
//         if (charIndex === -1) {
//             result += char;
//             continue;
//         }
//     }
//         // let check =letters.includes(letters)
//         // if (check!=letters){}
//         let encryptedIndex = (charIndex + key) ;
        // if(encryptedIndex> letters.length){
        //     encryptedIndex=0;
//         }
//         result += letters[encryptedIndex];
// console.log(result);
//mjqqt atwqi

const prompt = require("prompt-sync")();
const letters = 'abcdefghijklmnopqrstuvwxyz';

//let key=5;
let text=prompt('enter text : ')
   
for (let key=1;key<=26;key++){
    let result = '';
    for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let charIndex = letters.indexOf(char);
    if (charIndex === -1) {
        result += char;
        continue;}
    let encryptedIndex = (charIndex - key+26)%26;

// if(encryptedIndex> letters.length){
//     encryptedIndex=0;
//

    result += letters[encryptedIndex];
    
}
console.log(result);
}