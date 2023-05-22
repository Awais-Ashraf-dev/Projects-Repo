// let numbers=[1,2,3,4,5]
// for (let number of numbers){
//     let index=numbers.indexOf(number) //return index
//     let check =numbers.includes(number) //check either value is in array or not
//     console.log(check);
// }

//for in loop
// let student_object={'name':'abdul', 
//                     'age' :  12} //object data type when we have multiple datatype value 
// for (const key in student_object){
//     if(key=='age'){
//     const elemenet =student_object[key];
//     console.log(elemenet);
//     }
// }
// let counter = 1;
// do {
//     console.log("hello");
//     counter++;
// }
// while(counter<3);
// let numbers=[]
// for (let index = 1; index <= 20; index++) {
//     numbers.push(index)
//     if(index%3==0){
//         console.log(`${index} Fizz`);
//     }
//     else if(index%5==0){
//         console.log(`${index} BuZZ`);
//     }
//     else{
//         console.log(index);
//     }
// }
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
let username
let user_name