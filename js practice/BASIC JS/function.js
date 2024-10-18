function sayMyName (){

    console.log("h");
    console.log("a");     
    console.log("r");
    console.log("s");//it is function defination
    console.log("h");
    console.log("i");
    console.log("t");
    
}

//sayMyName()


// function addNumber(num1, num2){ //num1 and num2 are parameter ,basically input
//     console.log(num1+num2);
    
// }

function addNumber(num1, num2){ 
    
    let result = num1 + num2
    // return result // after return no function work
    // console.log("harshit");
    return num1+num2  //we can write like this also
    
}

const result = addNumber(3, 5) //the function which call it is arguments like addNumber here and 3 and null

//console.log("result: ", result);   //console print karne ka mtlb ye nahi ki wo function return karega,, return alag h console alag hai isliye result undefined show kiya h...


function loginUserMsg(username = "Gaurav"){
    if(username === undefined){ //and it can be written as if(!username){} also,,it is same as previous meaning
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`

}

// console.log(loginUserMsg("Harshit"))
// console.log(loginUserMsg("")) //loginUserMsg
//console.log(loginUserMsg()) //undefined

//above all three console are written without if condition 
console.log(loginUserMsg("Harshit")) //it is overriding gaurav

//11111111111

// function calculateCartPrice (...num1){ //...is rest operator or spread due to this all array is printed otherwise only index 1 array is print only
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500));


///222222222222


function calculateCartPrice (val1, val2, val3,...num1){  //it print value only 700 to 12345, it is beacuse 3 value is assined in function of arry
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 700, 3400, 12345));

const user ={
    username: "harshit",
    price:204876476
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username : "gaurav",
    price : 3456
})

///3333333333

const myArr =[200, 300, 400, 150]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArr));
