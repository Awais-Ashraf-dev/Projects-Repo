//______________________Problem Solving__________________
 //Problem : Write a function that take string as  input and return the length of substring that contain no repeating character
 //Input : "abcabcabc"
//Output : 3
//____________count the number of  character in string________________
// let str = 'abcabcbb'
// str.split(' ')
// let empty_arr = []
// empty_arr.push(str.split(' ').filter(function(item) {
//     return item.length === 0;
//     }).length)
//     let str_arr = str.split(' ')
//     let arr = []
//     for (let i = 0; i < str_arr.length; i++) {
//         let arr_item = str_arr[i].split('')
//         arr.push(arr_item.filter(function(item) {
//             return arr.indexOf(item) === -1;
//             }).length)
//             }
//             console.log(arr)
//_______________________________________________________
let s = 'abcabcbb'
function lengthOfLongestSubstring(s) {
    var max = 0;
    var start = 0;
    var end = 0;
    var map = {};
    while (end < s.length) {
      if (map[s[end]] === undefined) {
        map[s[end]] = end;
        end++;
      } else {
        max = Math.max(max, end - start);
        start = map[s[end]] + 1;
        end = start;
        map = {};
      }
    }
    console.log(Math.max(max, end - start)) ;
  }
lengthOfLongestSubstring("abcabcbb")
//_______________React Concept________________
// .map() function 
/*

*/