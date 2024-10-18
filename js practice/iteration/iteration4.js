//object of iteration with loop
//#1

const myObj ={
    js:"javascript",
    cpp: "c++",
    rb : "ruby",
    swift:"swift by apple"
}
//#2

for (const key in myObj) {
    //console.log(key);
    
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

//#3
//forin loop for array

const prog = ["js", "java", "py", "c++"]
for (const key in prog) {
    //console.log(key);
    console.log(prog[key]);
    
    
}

//#4

const map = new Map()
map.set('UP' , 'Uttar Pradesh')
map.set('In' , 'India')
map.set('Rs' , 'Russia')

for (const key in map) {
    console.log(key);
    
}

// here map are not iteratable,,but iske liye dusra tarika h iterate karne k liye for in loop me,,hm aage padhenge