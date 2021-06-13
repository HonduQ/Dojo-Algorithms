// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
// var myNumber = 42;
// var myName = "Cliff";
// var temp = myNumber;
// myNumber = myName;
// myName = temp;
// console.log(myNumber)
// console.log(myName)


// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

// function printNumbers(lowNum, highNum){
//     for (var i = lowNum; i < highNum+1; i++){
//         console.log(i);
//     }
// }
// printNumbers(-52, 1066)

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

// function beCheerful(){
//     for (var i = 0; i < 98; i ++){
//     console.log("good morning!")
//     }
// } 
// beCheerful()

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// function multiplesOfThree(){
//     for (var i = -300; i <1; i = i + 3){
//         if (i != -3 && i != -6){
//             console.log(i);
//         }
//     }
// }
// multiplesOfThree()


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

// function whileIntegers(){
//     var i = 2000;
//     while (i < 5281){
//         console.log(i)
//         i ++;
//     }
// }
// whileIntegers()

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

// function birthday(num1, num2){
//     if (num1 == 04 && num2 == 17){
//         console.log("How did you know?")
//     }
//     if (num2 == 04 && num1 == 17){
//         console.log("How did you know?")
//     }
//     else {
//         console.log("Just another day....")
//     }
// }
// birthday(01,21)
// birthday(04,17)
// birthday(17,04)
// birthday(17,21)

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

// function leapYear(year){
//     if (year % 400 == 0){
//         return true;
//     }
//     if (year % 4 == 0){
//         if (year % 100 == 0){
//             return false;
//         }
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(leapYear(2001))
// console.log(leapYear(2400))
// console.log(leapYear(2100))
// console.log(leapYear(2012))
// console.log(leapYear(400))
// console.log(leapYear(100))
// console.log(leapYear(104))

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

// function integersOfFive(){
//     var count = 0;
//     for (var i = 512; i < 4097; i ++){
//         if (i % 5 == 0){
//             console.log(i);
//             count ++;
//         }
//     }
//     console.log(count,"integers")
// }
// integersOfFive()

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

// function multiplesOfSix(){
//     var i = 6;
//     while (i < 600001){
//         console.log(i);
//         i += 6;
//     }
// }
// multiplesOfSix()

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

// function countingDojo(){
//     for (var i = 1; i < 101; i ++){
//         if (i % 5 == 0){
//             console.log("Coding");
//         }
//         if (i % 10 == 0){
//             console.log(" Dojo")
//         }
//         if (i % 5 != 0) {
//             console.log(i)
//         }
//     }
// }
// countingDojo()


// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

//  function printParameter(parameter){
//      console.log(parameter);
//  }
// printParameter("That's insane.")
// printParameter(99)
// printParameter([100, "really?", true])
// printParameter({100: "really?", nope: true})


// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

// function hugeSucker(){
//     var sum = 0;
//     for (var i = -300000; i < 300001; i ++){
//         if (i % 2 != 0){
//             sum += i;
//         }
//     }
//     console.log(sum)
// }
// hugeSucker()

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

//  function countdown(){
//     var i = 2016;
//     while (i > 0){
//         console.log(i);
//         i -= 4;
//     }
//  }
// countdown()


// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

// function flexCountdown(lowNum, highNum, mult){
//     for (var i = highNum; i >= lowNum; i --){
//         if (i % mult == 0){
//             console.log(i);
//             i --;
//         }
//     }
// }
// flexCountdown(2, 9, 3)


// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function fourParameters(param1,param2,param3,param4){
    var i = param2;
    if (i >= 0){
        while (i < param3){
            if (i % param1 == 0){
                if (i != param4){
                    console.log(i);
                }
            }
            i ++;
        }
    }
    if (i <= 0){
        while (i > param3){
            if (i % param1 == 0){
                if (i != param4){
                    console.log(i);
                }
            }
            i --;
        }
    }
}
fourParameters(3,5,17,9)
fourParameters(-3,-5,-17,-9)