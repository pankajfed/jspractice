/* =================

Callback Function:  Callback Function is a function that can be pass as an argument to another funtion. 

===================*/

function printFirstName(firstname, cb , cbage) // cb here is call back function
{
    console.log(firstname)
    cb("kumar")
    cbage(25)
}


function printLastName(lastname)
{
    console.log(lastname)
}

function printAge(age)
{
    console.log(age)
}

printFirstName('Amit', printLastName, printAge ); // passing function here as an arguments


