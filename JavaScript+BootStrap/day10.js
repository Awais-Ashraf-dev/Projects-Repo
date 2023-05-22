//prototype
// let car = {
// tyre : true,
// walk() {

// }
// };
// let electric_car ={
//     battery : true,
//     __proto__: car
// }
// electric_car.walk = function(){
    //console.log{"Electric car has more speed"}
//}

// let head ={
//     glasse : 1
// }
// let table = {
    // pen:3,
//      __proto__:head
//  }
//  let bed = {
//      sheet :1,
//      pillow : 2,
//      __proto__: table
//  };
//  let pocket = {
//      money :2000,
//      __proto__:bed
//  };
//  console.log(pocket.sheet)
//  console.log(pocket['pen'])
//  pocket.bed
//  closures
//  cloures ik aesa fun h jo outr fun ko access kr le
//  all fun are naturally closure
//  iffi concept for concept /// to acces inner function of another fun
// function makeCounter(){
//     let count = 0;
//     return function(){
//         return count++;
//     };
// }
// let counter = makeCounter();////jb tk program execute ho ga counter chlta rhe ga
// //manually counter rokne ke lie hm counter = null 
// console.log(counter())///fun save state or not wipe out
// console.log(counter())///fun save state or not wipe out
// console.log(counter())///fun save state or not wipe out
// counter = null
// console.log(counter())

function counter(){
    let count = 0;
    this.up = function(){///this keyword is used for specific scope
        return ++count;
    };
    this.down = function(){
        return --count;
    };

}
let count = new counter();
console.log(count.up());
console.log(count.up());
console.log(count.down());

////event and state
//_________Event Loop_________