// let arr = [1,3,5,6,8,9,9,4]
// let lowestArr = arr[0] + arr[1]
//    for ( arr[i] = 0; arr[i] < arr[i].length; i++) {
//      for (arr[j] =arr[i]; arr[j] <= arr[i]; j++) 
     
//         if (arr[j]+ arr[j+1] == 0||1||2||3) {
//             console.log('colse value is',arr[j],a[j+1]);
//         }
//         else{
//             continue;
//         }
//    }
sum = 0
array = [[0,1,2],[0,1,2],[0,1,2]];
for( let i=0;i<=Array.length;i++){
    for(let j=0;j<=Array.length;j++){
       if(array[i][j]==array[0][0] || array[i][j]== array[1][1] || array[i][j]== array[2][2] );{
        sum = sum +array[i][j]
       }
    }
}  
console.log(sum); 
