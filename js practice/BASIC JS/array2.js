 const heroes = ["thor","marvel","iron man","spidy"]
 const heroes2 = ["superman","aquamen","batman","flash"]

// heroes.push(heroes2)
// console.log(heroes);

// console.log(heroes[4][1]);
// const allHero = heroes.concat(heroes2)
// console.log(allHero);


const allNewHero = [...heroes, ...heroes2] //same work as concat . itis spread operator
console.log(allNewHero);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const realArr = anotherArr.flat(Infinity)
console.log(realArr);


console.log(Array.isArray("Harshit"))
console.log(Array.from("Harshit"))
console.log(Array.from({name:"Harshit"})) //shows empty array ...[]


let score1 =200
let score2 =300
let score3 =400

console.log(Array.of(score1, score2, score3));



