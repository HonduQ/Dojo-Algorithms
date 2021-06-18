// To Do 2


// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
// function reverseOrder(arr){
//     for (var i = 0; i < arr.length; i ++){
//         if (arr.length-(i+1) < i || arr.length-(i+1) == i){
//             return arr
//         }
//         var temp = arr[arr.length-(i+1)]
//         arr[arr.length-(i+1)] = arr[i]
//         arr[i] = temp
//     }
//     return arr
// }
// console.log(reverseOrder([4,2,5,10,18,-3,14,1,6,9,4,2,5,10,18,-3,14,1,6,9]))

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions. 
// Second: allow negative shiftBy (shift L, not R). 
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. 
// Fourth: minimize the touches of each element.

// function rotateArr(arr, shiftBy){
//     temp = arr[0]
//     for (i=0; i<arr.length; i++){
//         if (i+shiftBy >= arr.length){
//             arr[i] = arr[i+shiftBy - arr.length]
//         }
//         arr[i] = arr[i+shiftBy]
//     }
//     arr[arr.length]=temp
//     return arr
// }
// console.log(rotateArr([1,2,3,4,5],1))
// Couldn't figure this out, moving and will come back to it when I am caught up in other areas

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

// function filterRange(arr, min, max){
//     j=0
//     for (i=min; i<max; i++){
//         arr[j] = arr[i];
//         j++
//     }
//     for (i=j; i<arr.length; i++){
//         arr[i] = null
//     }
//     arr.length = 4
//     return arr
// }
// console.log(filterRange([1,2,3,4,5,6,7,8,9],2,6))

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// function concat(arr1, arr2){
//     arr3=[]
//     for (i=0; i<arr1.length; i++){
//         arr3[i]=arr1[i];
//     }
//     for (i=0; i<arr2.length; i++){
//         arr3[i+arr1.length] = arr2[i];
//     }
//     return arr3
// }
// console.log(concat(['a','b'],[1,2]))