 const myArray = [1, 2, 3, 4, 5, 6]
 const myHero= ["ddjhs", "hhxh","gjf"] 
 const myArr2 = new Array(1, 2, 3, 4, 5)
 console.log(myArray[4])
 myArray.concat(4)
 console.log(myArray.indexOf(4));

 //array methods

 myArray.push(8)
 myArray.push(9)
 myArray.pop() //last element is deleted so 9 is deleted

myArray.unshift(10)
myArray.shift() //10 is delete when shift method is used

console.log(myArray.includes(11));//shows boolean status
console.log(myArray.indexOf(11)); //shows -1 beacause there is no number of 11 in array

const newArr = myArray.join()


console.log(myArray);
console.log(typeof newArr); //here newArr change myArray in typeof string 


//slice and splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3) //it manipulate original array. here in splice the range element entered i asection is eleminated see in terminal by yourself before going for serious interview
console.log("C ", myArray);
console.log(myn2);







 
 