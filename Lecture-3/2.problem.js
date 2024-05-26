

//Problem Statement:  Calculate the area of each circle
let radiusarr = [2,3,4,5,6] // radius of circle

/* ======= Approach = ======= 
1. Area of circle = 3.14*r*r
2. we have to itrate thrigh array for the we have to run a loop
========= */ 

function calculateArea(arr)
{
    let result=[]
    for(i=0; i<arr.length; i++)
        {
            areaofCircle = 3.14*arr[i]*arr[i]
            result.push(areaofCircle)           
        }
     console.log(result)   
}

calculateArea(radiusarr)


//Problem Statement:  Calculate the circumference of each circle

function circofCircle(arr)
{
    resultCir = []
    for(i=0; i<arr.length;i++)
        {
            resultCir.push(2*3.14*arr[i])
        }
    return resultCir;    
}

let circumference = circofCircle(radiusarr);

console.log(circumference)

//Problem Statement:  Diameter of circle

let DiameterofCircle = (arr) =>
{
    let resultDiameter = [];
    for (i=0; i<arr.length;i++)
        {
            resultDiameter.push(2*arr[i])
        }
       return resultDiameter; 
}

let diaofCircle = DiameterofCircle(radiusarr)

console.log(diaofCircle)