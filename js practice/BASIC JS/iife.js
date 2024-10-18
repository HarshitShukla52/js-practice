//immediately invoked function expression


// function tea(){
//     console.log(`DB CONNECTED`); //this is normal function
    
// }
// tea()
 

// two iife together

(function tea(){     ///it is iife function inthis we have to not call the execution function like in above function eg.,tea()..fun immediatly execute
   //named iife
    console.log(`DB CONNECTED`);
    
})(); // point 1 : see the point 2 why we use ; in function excuation to stop the function to end the run of code

//must use ; in last inexcution of function


//(function aurcode() {
((name) => {
    console.log(`DB connected two ${name}`); //point 2: this show error beacause this function immediately invoke but not know where to stop  so in this situstion we have to end that line by (;)
    
})("harshit")



// globel scope k polution se problem occur hoti h kai baar,, toh us globle scope ke jo variables h ya jo bhi waha decleartion h uske pollution ko hatne k liye hmne iife ka use kiya