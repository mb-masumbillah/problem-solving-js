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
