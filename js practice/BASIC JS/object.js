// singleton :when declerd some instance as literal than singleton is not made,, with constructor it is always singleton


//Object.create //it is a constructerd method

//object literals
const mySymbol = Symbol("key1")

const user = {
    name:"Harshit",
    'full name': "Harshit Shukla",
    [mySymbol]: "myKey1", //it is symbol  for detail see terminal by run yourself
    //mySymbol: "myKey1" esse nahi likhna, //interviewer confuse you by this. jo symobol ka syntax uper jiasa likha h waisa likha jata h 
    age: 23,
    location: "banglore",
    userEmail: "hsfhshfs@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["monday", "tuesday"]

}

console.log(user.userEmail);
console.log(user["userEmail"]);
console.log(user["full name"]);
console.log( user[mySymbol]);

user.userEmail = "Harshit@gmail.com"
// Object.freeze(user)


user.userEmail = "Harshit1234@gmail.com" // this value is not propogate beacuse above i freeze that value
console.log(user);


user.greeting = function(){
    console.log("hello user");
    
}
user.greeting2 = function(){
    console.log(`hello user, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());

