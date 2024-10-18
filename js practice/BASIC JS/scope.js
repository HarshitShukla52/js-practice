

// if(true){
//     let a = 34
//     const b = 20
//     var c = 80

// }



// //console.log(a);
// //console.log(b);
// console.log(c);


let a =300
var e = 350 // see in result why we not using var
if(true){
    let a = 34
    const b = 20
    console.log("Inner : ", a);
    var e = 45
    

}



console.log(a);
console.log(e);

//console.log(b);
//console.log(c);


//nested scope

function one(){
    const username = "harshit"

    function two(){
        const website = "google"
        console.log(username);
        
    }

    //console.log(website);

    two()
    
}

//one()

if(true){
    const username ="harshit"
    if(username === "harshit"){
        const website ='google'
        console.log(username + website);
        
    }
    //console.log(website); shows error
    
}
//console.log(username);shows error


console.log( addOne(5)); //it does not show error because it only declered function

function addOne (value){
    return value + 1
}

//addOne(5)


addtwo(6) //this shows error becuse we declered  a function and hold in veriable like addtwo
 const addtwo = function(value){ 
    return value + 2
 }

 //addtwo(6)