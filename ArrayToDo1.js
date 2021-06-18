// To Do 1


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// function pushFront(arr, num){
//     arr.push(arr[arr.length-1])
//     console.log(arr)
//     for (i = 0; i < arr.length; i++){
//         temp = arr[i]
//         arr[i] = num
//         num = temp
//     }
//     console.log(arr)
// }
// pushFront([345,"sd",345,[34,56,67],45],true)

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// function popFront(arr){
//     value = arr[0]
//     for (var i=0; i < arr.length; i++){
//         arr[i] = arr[i+1];
//     }
//     arr.pop()
//     console.log(arr)
//     return value
// }
// console.log(popFront([1,2,3]))

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function insertAt(arr, index, val){
//     arr[arr.length]=null;
//     for (i=index; i < arr.length; i++){
//         if (i == index){
//             temp=arr[i];
//             arr[i]=val;
//         }
//         else {
//             temp2=arr[i]
//             arr[i]=temp
//             temp=temp2
//         }
//     }
//     return arr
// }
// console.log(insertAt([1,2,3,4,5],2,"abc"))

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// function removeAt(arr,index){
//     value = arr[index]
//     for (i=index; i<arr.length-1; i++){
//         arr[i] = arr[i+1];
//     }
//     arr.pop()
//     console.log(arr)
//     return value
// }
// console.log(removeAt(["abc",4,3,2,1],0))

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    
}

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.


// Second: Solve this without using any nested loops.