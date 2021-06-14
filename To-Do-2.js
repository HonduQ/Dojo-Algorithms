// To Do 2

// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

// function arrCountDown(num) {
//     var arr = []
//     for (var i = num; i >= 0; i = i-1){
//         arr.push(i)
//     }
//     return arr.length
// }
// console.log(arrCountDown(9))


// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the seconds.

// function printReturn(num1, num2){
//     console.log(num1)
//     return(num2)
// }
// var x = printReturn(5,111)
// console.log(x)

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

// function givenArray(arr){
//     return arr[0]+arr.length
// }
// arr2=[true, 5,7,3,5, "blueberries"]
// console.log(givenArray(arr2))


// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

// function valsGreaterThanSecond(arr){
//     count=0
//     for (var i=0; i<arr.length; i++){
//         if (arr[i] > arr[1]){
//             console.log(arr[i])
//             count ++
//         }
//     }
//     return count
// }

// var x =valsGreaterThanSecond([1,3,5,7,9,13])
// console.log(x)

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

// function valsGreaterThanSecondGeneralissimo(arr){
//     count = 0
//     for (var i=0; i<arr.length; i++){
//         if (arr[i]>arr[1]){
//             count ++
//         }
//     }
//     if (count==0){
//         console.log("Please enter an array with more than one value")
//         return null
//     }
//     console.log(count)
    
// }
// valsGreaterThanSecondGeneralissimo([1,6,9,4,33])

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

// function thisThat(num1, num2){
//     var arr = []
//     if (num1 == num2){
//         console.log("Jinx!")
//     }
//         for (var i = 0; i < num1; i++){
//             arr.push(num2)
//         }
//     return arr
// }
// console.log(thisThat(4,4))

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

// function fitTheFirst(arr){
//     if (arr[0] > arr.length){
//         console.log("Too big!")
//     }
//     else if (arr[0] < arr.length){
//         console.log("Too small!")
//     }
//     else {
//         console.log("Just right!")
//     }
// }
// fitTheFirst([1,3,21,6])

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

// function fahrenheitToCelsius(fDegrees){
//     cDegrees = (fDegrees - 32) * 5/9
//     console.log(cDegrees)
// }
// fahrenheitToCelsius(3456)


// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

// function celsiusToFahrenheit(cDegrees){
//     fDegrees = (9/5 * cDegrees) + 32
//     console.log(fDegrees)
// }
// celsiusToFahrenheit(1000)


// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

function evaluateCAndF(){
    cDegrees = 200
    fDegrees = 0
    while (fDegrees != cDegrees && cDegrees > -500){
        fDegrees = (9/5 * cDegrees) + 32
        if (cDegrees == fDegrees) {
            console.log("Success! "+cDegrees+" Celsius and "+fDegrees+" Farenheit are the same!")
            return
        } 
        cDegrees --
    }
}
evaluateCAndF()