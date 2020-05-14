// Your code here


//  Function Declaration
function saturdayFun(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`;
}

//  Function Expression

let mondayWork = function (activity = 'go to the office') {
	return `This Monday, I will ${activity}.`;
};


function wrapAdjective(adj='*') {
    return function (arg = 'special') {
       return  `You are ${adj}${arg}${adj}!`;
    };
}

const Calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	multiply: function (a, b) {
		return a * b;
	},
    divide: function (a, b) {
        return a / b;
    } 
};

let actionApplyer = function (start, ray) {
	let a = start;

	for (let i = 0; i < ray.length; i++) {
		a = ray[i](a);
	}

	return a;
};