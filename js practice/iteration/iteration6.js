//filter


const coding = ["js", "ruby", "java", "python", "c++"]

const value = coding.forEach((item) => {    //test what if we set  for each in variable
    //console.log(item);
    return item                             //foreach does not return 
    
})
//console.log(value);   //it shows undefined


//1



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter((num) => num > 4 )  //this function in one line fun(()=>)
// const newNums = myNums.filter((num) => {
//     return num > 4   //here if we will not add on return on fun() => {} than it show empty array[] because with curly braces{} we started scope ,,,,that`s why it shows only empty array []
// } )

//2


//from foreach method
const newNums =[]

myNums.forEach(  (num) => {
    if (num > 4) {
        newNums.push(num)
        
    }
})

console.log(newNums);

//3


const book =[
    { title: "Book1" , genre:"Sci-Fic", publish:1998 , edition:2004},
    { title: "Book2" , genre:"Fic", publish:1981 , edition:2019},
    { title: "Book3" , genre:"Sci-Fic", publish:1994 , edition:2022},
    { title: "Book4" , genre:"History", publish:2005, edition:2005},
    { title: "Book5" , genre:"Non-Fic", publish:1990 , edition:2013},
    { title: "Book6" , genre:"Science", publish:2007 , edition:2016},
    { title: "Book7" , genre:"Fic", publish:1988, edition:2025},
];

let userbooks = book.filter((bk) => bk.genre === "Sci-Fic")
 //userbooks = book.filter((bk) => bk.publish >= 2000)
 userbooks = book.filter((bk) => {
    return bk.publish >= 1990 && bk.genre=== 'Sci-Fic'


})  // if we use or open scope{} than we have to return the value otherwise it show undefined


console.log(userbooks);
