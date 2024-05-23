/*========================
 Hositing =
 Question: What is Hoisting?
 Answer:  Hoisting is a concept of moving the function invocation at the TOP.
 If we call a Normal function before its declation. it will run. Thsi particular concept is known as hoisting.


Hositing is not a good thing. to tackle this we will make the functions as a first class citizens.


 =====================*/
console.log(a) // if we console "a" here then value of "a" will be undefined. because on memory allocation phase occures secound phase done not occured.
// It is hoisted with the value undefined.


printName('Amit') // In case of function it will run because whole functionn is saved in the memory allocation phase.
// this function will excute

var a = "Top text"


// simple fucniton
 function printName(name)
{
    console.log(name)
}

printName('Amit')


/*====================
Lets try out with fucntion as a first class citizens
=======================*/


//printNameFC("Pankaj") // this will not work beacuse in this case fucntion will be treated as variabke and if we call it before fucntion this will give error.

var printNameFC = function(name)
{
    console.log(name)
}

printNameFC("Pankaj") // this will work fine

console.log(b);
var b = 5

