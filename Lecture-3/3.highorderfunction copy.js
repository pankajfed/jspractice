
/* ======= DRY PRINCIPLE = DO NOT REPEAT YOURSELF  ======= 
After resolving some problems in the problem.js file we found that we are repeating more of the code again and again
TO RESOLVE THIS
we use 
=== HIGH ORDER FUNCTIONS====

Questions = What are High order functions?
Answer: These are the functions that can --TAKE ANOTHER function as an argument.

Questions = What are Callback functions?
Answer: These are the functions that can be --PASS AS AN ARUMENT-- to another function. 
========= */ 
let radius = [2,4,5,6,9]

function areaofCircle(radius)
{
    return 3.14*radius*radius
}

function circumferenceofCircle(radius)
{
    return 2*3.14*radius
}

function diameterofCircle(radius)
{
    return 2*radius
}

let calculate = (arr, cbArea) =>
    {
        let result=[];
        for(i=0;i<arr.length;i++)
            {
                result.push(cbArea(arr[i]));
            }
        return result ;
    }

let finalResult = calculate(radius, areaofCircle)
let finalResult1 = calculate(radius, circumferenceofCircle)
let finalResult2 = calculate(radius, diameterofCircle)
console.log(finalResult)
console.log(finalResult1)
console.log(finalResult2)

