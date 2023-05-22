// //------------------Arrray_ Library--------------////
// let display=array=> {
//     console.log(typeof(array)); {
//       for (let value of array) {
//         console.log(value);
//       }  
//     }
// }
// display([1,2,3,4,5,6,7,'awwais',9])

// ///for shortend fun
// let disp = arr=> arr.forEach(element => console.log(element));
// disp([1,3,4,5,6,7,8,'awais','ali'])
//_______forEach loop_________///
// let val1 = [1,3,4,5,6,78,9]
// val1.forEach(element => {
//     console.log(element);
// });
//_________max Value_________
// let calMax = max_value => {
// let max_val = max_value[0]
// for (let key in max_value ) {
//     if(max_value[key]>max_val)
//     max_val = max_value[key]
// }
// console.log(max_val);
// };

// calMax([1,3,4,33,6,7,8,9])
// ///using forEach loop
// let calmax = input_arr =>{
//     let temp = input_arr[0]
//     input_arr.forEach(value => {
//         if(temp<value) temp = value
//     });
//     return temp;
// }
// ///// find multiples in an array
// let calMultiple = (array,number) =>{
//     let arr2= []
//     array.forEach(value => {
        
//         if(value%number==0){
            
//             arr2.push(value)
//         }
        
        
//     });
//    console.log(arr2);  
// }
// calMultiple([1,3,4,5,7,8,9,10,11,12],2)
///________flatten the array________///
let calFlatten = (array2) =>{
    let arr2= []
    array2.forEach(value => {
        
        if(typeof(value)=="object"){
            
            value.forEach(element => {
                array2.push(element)
            });
        }
    
        
    });
  console.log(array2);  
}
calFlatten([1,3,4,5,7,8,[9,10],11,12])
