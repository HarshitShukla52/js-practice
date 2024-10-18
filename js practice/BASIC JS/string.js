const name ='harshit'
const repoCount = 50


//console.log(name + repoCount + "Value"); old version

console.log(`hello my name s ${name} and repo Count is ${repoCount}`);


const gameName = new String('       Harsh  it      ')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.trimLeft("h"));
console.log(gameName.charAt(1));
console.log(gameName.indexOf("r"));

//go through the several string method by your own
const newName = gameName.substring(0, 4)
console.log(newName);

const newString = gameName.slice(-8, 4)
console.log(newString);

const anStringOne = "    harsh     "
console.log(anStringOne);
console.log(anStringOne.trim());

const url ="https://harshit.com/harshit%20shukla"

console.log(url.replace('%20', '-'))
console.log(url.includes('harsh'));

const by = "har-sh-it"
console.log(by.split('-'));


