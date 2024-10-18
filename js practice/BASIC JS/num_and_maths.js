const score = 500
console.log(score);


const balance = new Number(100)

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(3));
console.log(balance.toFixed(3).length);

const otherNum = 123.67387
const otherNum1 = 12123.67387
console.log(otherNum.toPrecision(4));
console.log(otherNum1.toPrecision(4)); //shows a expoential value beacause of big range round of value


const hundred = 100000000
console.log(hundred.toLocaleString('en-IN'));

//  ************************************maths******************************************************//

console.log("now mats is started");
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.44,6));
console.log(Math.ceil(4,2));
console.log(Math.floor(4,9));
console.log(Math.min(4, 9, 3, 2, 6));
console.log(Math.max(4, 9, 3, 2, 6));
console.log(Math.random()); //value always come in between 0 and 1
console.log((Math.random()*10)+1); //value always come in between 0 and 1
console.log(Math.random()*10+1); //value always come in between 0 and 1


const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
console.log(Math.floor(Math.random() * (max - min + 1)) - min )

