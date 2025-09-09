/* 
    The Simple String Calculator
    Your Goal: Write a program that can calculate the sum of numbers found inside a string.
    How it Works
    Your program will take a single string of text. Inside this string, there will be numbers separated by plus signs (+) and letters. You must find all the numbers and add them together.
    Rules
    Your program will read one string as input.
    The program must only add together numbers.
    Letters and other symbols should be ignored.

    Input String-----Final Sum
    10+20+30-------60
    10+20a+30--------60
    1+2+hello+3+4-----10
*/


let symbols = "!@#$%^&*()-_=+[]{}\\|;:'\",<.>/?`~";

const sumFunction = (input) => {
    let temporary = input
    let sum = 0

    for (let i = 0; i < symbols.length; i++) {
        temporary = temporary.split(symbols[i]).join('+')
    }

    for (const singleData of temporary.split("+")) {
        if (!isNaN(parseInt(singleData))) {
            sum += parseInt(singleData)
        }
    }

    return sum
}

const first = sumFunction('1-2+hello=3+4')
const second = sumFunction('10+20+30')
const third = sumFunction('10+20a+30')

console.log({ first }, { second }, { third })
