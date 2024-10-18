const userEmail = [] //also test "" and "haeshit.ai" and see the result must do

if(userEmail){
    console.log("got the user email");
    
}else 
    console.log("dont have user email");
    

    //falsy value

   //note 1: false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN these are falsy number


   //truthy value

   // note 2 : "0" (0 in string) ,,,,, 'false'(single comma false string) ,,,,, " "(space in string),,,,, [] ,,,, {} ,,,,, function(){}
   

//    if(userEmail.length === 0){
//     console.log("Array is empty");
    
//    }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}



//Nullish Coalescing Operator  (??) : null undefined
//must check by your own for better understanding

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 10
val1 = null ?? 10 ?? 14     


console.log(val1);


//  Terinary operator

//condition ? true : false

const icePrice =100
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80");



