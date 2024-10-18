//loops
//for

for (let i = 0; i < 10; i++) {
    const element = [i];
    if (element == 5){
        //console.log("5  is best number");
        
    }
    //console.log(element);
    
}

//console.log(element);   //show error beacause out of the scope

//intersting must see

for (let i = 0; i <= 10; i++) {

    //console.log(`outer loop value : ${i}`);
    
   for (let j = 0; j <= 10; j++) {
      // console.log(`inner loop value : ${j} and inner loop ${i}`);  //1
      // console.log(i + '*' + j + '=' + i*j);                          //2 check both exercise
       
    
   }
    
}

//array type

let myArray = ["thor", "batman", "spidy", "superman"]
//console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {                     // in array if you use  = than it shows undefined
    const element = myArray[index];
    //console.log(element);
    
    
}



//break and continue

//break statement

// for (let index = 1; index <= 20; index++) {
//     if(index == 5 ){
//         console.log(`detected 5`);
//         break;   // to break the control flow we use break ststement
//     }
   
    
//     console.log(`value of i is ${index}`);
    
    
// }


/// continue
for (let index = 1; index <= 20; index++) {
    if(index == 5 ){
        console.log(`detected 5`);
        continue;   // to break the control flow we use break ststement
    }
   
    
    console.log(`value of i is ${index}`);
    
    
}



