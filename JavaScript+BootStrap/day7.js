const prompt = require("prompt-sync")();

// 1//function expression
// 2//we are saving a function in variable to use in another function
// ///hoaisting// we can access function at any 
// //place even before function declaration using 'let' with variablelet Email = prompt('enter email :')
// ///iffi /// fun whith in function
// //callback syntex short ho jata h/scope dedclare krte hain
// let Password = prompt('enter password :')
// let ack = login(Email,Password) 
// function login(Email,Password){
//    if(Email==undefined || Password==undefined){
//    console.log('Please enter Valid Credentials');
// }else if( Email=='awais@gmail.com' && Password =='12345'){
//    return'succesfully login';
//    //console.log('succesfully login');
// }
// }
// ///let ack = login(Email,Password) 
// console.log(typeof ack);

//// function within fun (Iffi)

///if we want to add multiple parameter in to s function
//rest parameter
// function unlimited_param(...data) {
//     let value = data[0]
//     let sum =0
// for (let values of value) {
//     sum = sum +value[values]
//     console.log(sum);
// }
// }
// let sum_numb = prompt('enter num :')

// unlimited_param(sum_numb)

//addition
// function addition() {
//     let a = 0.8
//     let b = 0.9
//     let c = a + b
//     console.log(c);
// }
// addition()
//// ans is 0.300000000004 //ans is not accurate why?
//ruling of naming fun
//"get" ---return a value
//"calc"--- calculate values
///"create"--- create something
//"check"----- check value and return a boolean value

///power function
let pow = calPower(3,3)
console.log(pow);
function calPower(base, expo) {  
    return base*expo
}

////arrow function
//simpler way to write a function
//syntex (arguments)=> expression
let power = (base,expo) => base**expo///**for power;
console.log(power(3,3));
//more shorter with one param
let shortend = base => base**base
console.log(shortend(3));
///recursion 
//callback fun ... in fun call we call another function

//------------------Arrray_ Library--------------