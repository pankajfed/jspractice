
/* ======= IN-BUILD = HIGH ORDER METHODS(FUNCTIONS) ======= 

** Methods are function which is build some where already for conveinence of developer.
** High order methods can only be used with arrays

MAP
FILTER
REDUCE
========= */ 



/*===== MAP Method (Arithmetic operations) ===== Map is a high order function that takes a fuction as an argument.
It also take care of looping each and every element one by one and take
care of applying the logic to it as well and it also returns a new array.*/

let numbersArray=[2,3,4,5,6,7]

let sqroot = (num)=>
    {
        return num*num
    }

let finalResult = numbersArray.map(sqroot)

//console.log(finalResult)




const transations = [1000,3000,4000,2000,-898,3800,-4500];
const inrtousd = 80;

let inrtrans = (num)=>
    {
    return  num*80
    }

let ibrtrabsation = transations.map(inrtrans)
//console.log(ibrtrabsation)    


/*======= Filter Method ===== To check, to filter, if else conditions*/

// find even numbers in the array and push that ven numbers in a new array

let numberArray =[2,4,5,66,76,77,89,97,98];

//function to check evern number

let evenNumberArr = (arr)=>
    {
        return arr % 2==0;
    }

let evenResult = numberArray.filter(evenNumberArr);

//console.log(evenResult)


// filter all posotive numbers
const allNumbers = [1000,3000,4000,2000,-898,3800,-4500];

let positiveNumber = (arr)=>
    {
        return arr>0;
    }

let postNumber = allNumbers.filter(positiveNumber);
//console.log(postNumber)



/*======= Reduce Method = Give result in single digit
** Reduce takes 2 parameters
** accumulator , number
in Multiplication accumulator is 1 not 0, becausse anything multiply by 0 is 0
=============== */

// let numbersArrays = [1,2,3,4,5,6,7]
// calculate sum of all the arrays elements


// let sumofNumbers = (arr)=>
//     {
//         let intSum = 0;

//         for(i=0;i<arr.length;i++)
//             {
//               intSum = intSum + arr[i]
//             }
//       return intSum
//     }


//let finalre = numbersArrays.filter(sumofNumbers)
//console.log(sumofNumbers(numbersArrays))    
let numbersArrays = [1,2,3,4,5,6,7]

let sumofNumbers2 = (arr, acc)=>
    {
        
        return acc + arr
  
    }

 let qwe =  numbersArrays.reduce(sumofNumbers2,0)  
 console.log(qwe)