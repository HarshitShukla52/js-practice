const user = {
    username : "harshit",
    price : 2345,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to our website`);  // this refer current context
        console.log(this);
        
    }

}
// user.welcomeMsg()
// user.username = "harsh"
// user.welcomeMsg()

//console.log(this); // it show empty because we are in node enviornment in which it shoes empty({}) beacause there is no globel context is there

//this is function 1

// function chai(){
//     let userName = "harshit"
//     //console.log(this);
//     console.log(this.username); // it show undefined it work only on object not in function
    
// }
// chai()

//function 2


// const chai1 = function(){
//     let userName = "harshit"

//     console.log(this.username);//it also show undefined

// }

//function 3

// method in es6 is remove function keyword and after perthesis add arrow singn and it become arrow function
const chai1 = () => {
    let userName = "harshit"

    //console.log(this.username); //it also shows undefined in arrow function also
    console.log(this); // it show empty parenteses {} in arrow function

}

chai1() 


// main arrow function is stared


// const addTwo = (num,num2) => {
//     return num + num2 //it is explicit return
// }



//arrow2
//note : >> here if we use curly bracte{} thn we have to write return keyword  and if we use praentises() than no return keyword are used here

//const addTwo = (num,num2) =>  num + num2

const addTwo = (num,num2) => ( num + num2)
                                         //we can run arrow function like this also ,,it is implict function 

console.log(addTwo(5, 7));

//arrow 3

const addNum = (num1, num3) =>( {username:'harshit'})

console.log(addNum(4, 5));   //it return object only

// const myarray = [1, 2, 3, 4, 5, 6, 7]
// myarray.forEach()

