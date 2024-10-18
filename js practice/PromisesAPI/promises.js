//fetch ('http://kuchbhi.com').then().catch().finally()

//if response came than it show in .than()
//if error came than it show in .catch()
//in .finally() all thing is come.


//promises #1

const promisesOne = new Promise(function (resolve , reject){
    //do an asyn task
    //DB calls, cryptography, network  //these calls take time to execute
    setTimeout(function(){
        console.log("asynchronous task is successfully complited");
        resolve()   // 2> after calling method see point 1,,, than after it connect to then 
        
    }, 1000)
})

//resolve have connection with .then()..,, it have call back function it automatically recieved argument

promisesOne.then(function(){
    console.log("promise consume"); // 1> in excution it is not shown because we are not calling resolve method,,,
    

})

//promises #2

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2 exexcuted");
        resolve()
        
    }, 2000)

}).then(function(){
    console.log("Async 2 resolved");
    
})

//promises #3

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Harshit' , email:"harshit5768@gmail.com"})

    }, 3000)

})

promiseThree.then(function(user){
    console.log(user);
    

})

//promise #4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true    //false
        if (!error) {
            resolve({username : 'Harshit' , password:"123"})
            
        }else {
            reject('ERROR : somthing went wrong')
        }

    }, 3000)
})


//about call back hell and showing that there no only one then and catch funtion ,,,,,,we can use multiple than catch value
promiseFour.then((user) => {
    console.log(user);
    return user.username
    

}).then((username) => {
    console.log(username);
    

}).catch(function(err){
    console.log(err);
    
}).finally(() => {
    console.log("promises either resolved or rejected");
    
})


//promises #5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true    //false
        if (!error) {
            resolve({username : 'JAVASCRIPT PRACTISE' , password:"123"})
            
        }else {
            reject('ERROR : JS went wrong')
        }

    }, 3000)

})
console.log(typeof promiseFive);


async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

consumePromiseFive()


//here in down code response is not come due to  ..something item take time to execute but at that time we dont understand that valuable
// async function getAllUser() {
//     try {
//     const response = await fetch('http://jsonplaceholder.typicode.com/users')
//     //const data = response.json() //1 . first execute this and see result
//     //console.log(response);       //2 . than execute this and see response of code....it is normal way of taking and executing response like above,,, without json  
    
//     const data = await response.json()  //3 . json take time to convert so we have to use await to execute in above function step 1 this is the issue
//     console.log(data);
//     } catch (error) {
//      console.log("E: " , error);
        
//     }
    
    
// }
//getAllUser()

//with above function if we try to write in .then and .cath formet then we write like this

fetch('http://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)