// ================
// Loops
// ================

// Print the square for all the arrays members

let arr= [1,2,3,4,5]

let squaredArray =[] // take a blank array to add new values

for(let i=0; i<arr.length; i++)
    {
        squaredArray.push(arr[i]*arr[i])
    }
    console.log(squaredArray)