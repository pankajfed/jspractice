/*======================
Temporal Dead Zone:(TOZ)
Let says, when you try to access a particular variable before intialization. It keep it in a special area know as TEMPORAL DEAD ZONE.

=======================*/


console.log(a); // this will not allow to access "a". Cannot access 'a' before initialization. It means it knows that a exixts.
// do whre is a right now. This is know a as temporal dead zone.

console.log(b); // const will act same as let

console.log(c); // this will give value of undefined.

let a = 5  // If we use let instead of var.
const b = 6
var c = 7