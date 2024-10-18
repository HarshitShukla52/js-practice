// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//sometime it is difficult
ssconsole.log("2" > 1);
console.log("02" > 1);
 
console.log(null > 0)
console.log(null >= 0) //it is true beacause of value conversion problem
console.log(null == 0)
// the reason is that an equality check == and comprison >,<,>=,<= work differently.
//comparison convert null to a number., treating it as 0. thats why (3)null >= 0 is true and (1)null > 0 is false..


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// most of the time we avoid this type of all above compsarison

// ===
console.log("2" === 2);
