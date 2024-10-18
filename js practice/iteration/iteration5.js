const pepName = ["harsh", "jagjivan", "raghav", "shyam","mohan"]

//#1

// pepName.forEach( function (item) {  // it is callback function jisme name nahi hota ,,, sirf value hota h jaise ki item

//     console.log(item);
    

// } ) 


//#2

 //callback function k ander name nahi hota h,  normal function k ander hota h aur name kuch bhi ho sakta h ,,,,.... see on google 
// it is normal functionpepName.forEach( function name() {} ) 

// pepName.forEach((item) => {     //it is arrow function,, it is basic call back function
//      console.log(item);
     
// }) 


//#3

// function printMe(item){
//     console.log(item);
    
// }
// pepName.forEach(printMe)

//#4

pepName.forEach((item , index, arr) => {
    console.log(item,index,arr);
    
})

//#5


const mycode =[
    {
        languageName:'javscript',
        languagetitle:'scripeted',
        languagemode:'fast'
    },
    {
        languageName:'python',
        languagetitle:'scripeted',
        languagemode:'fast'
    },
    {
        languageName:'java',
        languagetitle:'scripeted',
        languagemode:'fast'
    }
]

//mycode.forEach((item , index, value) => {
mycode.forEach((item ) => {

    console.log(item.languageName);
    
})