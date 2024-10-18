//if statement

const isUserLoggedIn = 'false'
const temperature = 45

// if (temperature === 50){
//     console.log("tem is less then 45");
    
// }
// else{
//     console.log("temp is greater than 45");
    
// }

const score = 300

if (score > 150 ){
    const power = "fly"
    console.log(`user power is: ${power}`);
    
}
//console.log(`user power is: ${power}`); it shows error beacause it is out of scope it is in globel variable and yes var is globle variable beacause it acces out of the scope

const balence = 2000
//if(balence > 500) console.log("test"); //it is implicit scope ..,,isme maan liya jaata hai ki ye ek scope h

//nested if

if(balence < 500){
    console.log("less than 500");
    
}
else if (balence < 760){
    console.log('less then 760');

}
else if (balence < 900){
    console.log('less then 900');

} else {
    console.log("less then 1800");
    
}


//********************************************************************************************************************************************************************** //


const UserLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(UserLoggedIn && debitCard && 2==2){ //all statement should true
    console.log('allow to buy course');
    
}
if (loggedInfromEmail || loggedInfromGoogle ){  // at least one is true
    console.log("user logged in");
    
}


