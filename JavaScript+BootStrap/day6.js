const prompt = require("prompt-sync")();
// let day = +prompt('enter a day number')
// switch (day) {
//     case 2:
//        console.log('ufff tuesday'); 
//         break;
//     case  3:
//         console.log('its wednesday kb ae ga sunday');
//         break;
//     case 4:
//         console.log('its thursday kb ae ga sunday');
//         break;
//     case 5:
//         console.log('its friday kb ae ga sunday');
//         break;
//     case 5:
//         console.log('finaly saturday');
//         break;
//     default:
//         console.log('invalid operator');
//         break;
// }
/////FUNCTIONS
// let a = +prompt('enter a day number 1 :')
// //let b = +prompt('enter a day number 2 :')
// let b;

// function addition(a,b)
//  {
//    if(a == undefined){////we check weather value is undefined or not
//       a=1
//    }else if(b == undefined){
//       b=1
//    }
//    sum = {
//       'value1': a,
//       'value2': b,
//       'sum': a+b
//    }
//    return sum;
// }
// function sub(a,b) {
//    return a-b;
// }
// function mul(a,b) {
//    return 'something';

// }
// c=addition(a,b)
// console.log(`sum is ${c}`);
// // d=sub(a,b)
// e = mul(a,b)

// console.log(""+c.value1);
// // console.log(d);
// console.log(e);//
//defualt parameter
//add(num1,num2==1)if we do not give the value of function then default value is executed.
///login 
let Email = prompt('enter email :')
let Password = prompt('enter password :')
let ack = login(Email,Password) 
function login(Email,Password){
   if(Email==undefined || Password==undefined){
   console.log('Please enter Valid Credentials');
}else if( Email=='awais@gmail.com' && Password =='12345'){
   return'succesfully login';
   //console.log('succesfully login');
}
}
///let ack = login(Email,Password) 
console.log(typeof ack);