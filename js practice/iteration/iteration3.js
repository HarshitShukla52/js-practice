//for of loop
//#1

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
       console.log(num);
           
}

//#2

const greeting = 'hello world!'
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
    
}

//#3

// maps

const map = new Map()
map.set('UP' , 'Uttar Pradesh')
map.set('In' , 'India')
map.set('Rs' , 'Russia')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}


//#4
//maps are iteratable but object are not iteratable here,, means object are iteratable but have different method to be iteratable

const myObj ={
    "game1": "NFS",
    "game2": "Spiderman"
}
for (const [key, value] of myObj) {
    console.log(key, ":-", value);  //it show it is not iteratable
}
