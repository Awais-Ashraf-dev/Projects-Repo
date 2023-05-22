const prompt = require("prompt-sync")();
// let height = null;
// height = height ?? 1;
// console.log(typeof height);
// const prompt = require('prompt-sync')();
// let numb= prompt("enter number: ");
// if (numb%2==0){
//     console.log(`${numb} is even`);
// }
// else{
//     console.log(`${numb} odd`);
// }
// let counter=1;

// while(counter<6){
//     console.log("sit");
//     counter=counter+1
//     counter++;
//     counter+=1;
// }
// let choices=['rock','paper','scissors']
// let choice2 = Math.random(choices)
// console.log(choice2);
// let choice1=prompt("enter your choice FOR Player1:")
// if(choice1==choice2){
//     console.log("Tie");
// }
// if (choice2 < 0.34) {
//     choice2 = "rock";
// }
// if (choice2 < 0.56) {
//     choice2 = "paper";
// }
// else{
//     choice2="scissors"
// }
// if((choice1=='paper')&&(choice2=='rock')||(choice1=='scissors')&&(choice2=='paper')||(choice1=='rock')&&(choice2=='scissors')){
//         console.log('Player 1 wins');
// }
// else{
//     console.log('Cpu wins');
// }
//while
//random
//length
let arr=['a','b','c','d']
let i=arr.length-1;
let new_arr=""
while(i>=0)
{
    new_arr+=arr[i];
    i--
}
console.log(new_arr);