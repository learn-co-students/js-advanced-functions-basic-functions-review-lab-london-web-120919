// Your code here
const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (job = "go to the office") => {
    return `This Monday, I will ${job}.`
}

const wrapAdjective = (flare="*") => {
    return (adj="special") => {
        return `You are ${flare}${adj}${flare}!`
    }
}

const Calculator = {
    add: (a, b) => { return a + b },
    subtract: (a, b) => { return a - b },
    multiply: (a, b) => { return a * b },
    divide: (a, b) => { return a / b }
}

const actionApplyer = (int, arr) => {
        return arr.reduce((total, func) => func(total), int)
}