// ================
// Functions as a first class citizens
// ================

// ========
// 1. Simple function
// ===========

function FuctionName()
{
console.log("Hello");
}

//========
// 2. Function as a first class citizes
// =========

let variableNameFC = function()
{
console.log("Hello");
}

// Example:  use first class citizen function and multiply two numbers

let multiplyTwonumbers = function(a,b)
{
console.log(a*b)
}

//Calling a function

multiplyTwonumbers(2,3)

// ==========
// 3. Arrow function
// =============

let VariableName = ()=>
    {
        console.log("Hello, I am arrow function")
    }
    VariableName();
    