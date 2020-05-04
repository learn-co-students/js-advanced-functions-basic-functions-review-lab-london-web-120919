// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = (thing="go to the office") => {
    return `This Monday, I will ${thing}.`;
}

const wrapAdjective = (string='*') => {
   return function(par='special'){
        return `You are ${string}${par}${string}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: (a,b) => (a - b),
    multiply: (a,b) => (a * b),
    divide: (a,b) => (a / b)
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }
