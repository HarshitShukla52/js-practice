// Primitive datatype: 7 categories
// 1. string , 2. number, 3. boolean, 4. null, 5.undefined, 6.symbol ,7. BigInt 
//datatypes of return typeof
//1. Number => number , 2.String => string ,3.Boolean => boolean , 4. null => object , 5. undefined => undefined , 6. Symbol => symbol , 7.BigInt => bigint

const score = 100
const scoreValue = 100.33

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 24674867858998698647847878347837483748737n 
console.log(typeof bigNumber)






// Refrence type or Non Premitive type
// array, Objects, function

//return typeof Non Premitive type
//1. Array => object , 2. Function => function , 3.Object => object


const heros =["hgsh","hdhjh","dgtwyg","jshfh"]
let obj = {
    name :'harshit',
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}
//check all type of datatypes by your own


//**********************************************************************starting of memeory **********************************************************************//


// Stack (Primitive),,Heap (non - Primitive)


let myname= "Harshit"



let anothername = myname

anothername = "Shukla Ji"

console.log(myname);
console.log(anothername);

//it is heap:-

let userOne = {
    email: "hdsghdfgshg@gamil.com",
    upiId: "user@ybl"
}

console.table(userOne);

let userTwo = userOne
userTwo.email = "harshit@google.com"
console.log(userOne.email);
console.log(userTwo.email);


