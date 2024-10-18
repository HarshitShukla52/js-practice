// const tinderUser = new  Object() //this is singleton object
const tinderUser = {} //and this is not singleton object

tinderUser.id = '123qaew'
tinderUser.name ='Harshit'
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regUser = {
    email:"harsh@gmail.com",
    fullname : {
        userfullname:{
            fistname:"harshit",
            lastname:"shukla"
        }
    }
}

console.log(regUser.fullname.userfullname.fistname);

const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}
const obj4= {5:"a", 6:"b"}

//const obj3 = {obj1, obj2} smae problem as array object in object
//const obj3 = Object.assign({}, obj1, obj2, obj4) // through assign we assign object

const obj3= {...obj1, ...obj2}

//console.log(obj3)

const users = [
    {
    id:1,
    email:"haesh@gamil.com"
},
    {
    id:1,
    email:"haesh@gamil.com"
},
    {
    id:1,
    email:"haesh@gamil.com"
}]

users[1].email
console.log(tinderUser);


// console.log(Object.keys(tinderUser)); //it shows array type of data
// console.log(Object.values(tinderUser)); //it shows array type of data
// console.log(Object.entries(tinderUser)); //it shows array type of data

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //shows boolean value



const course = {
    coursename: "js hindi",
    price:"899",
    courseInstructor:"harshit"
}

const {courseInstructor: inst} = course

//console.log(courseInstructor);
console.log(inst);

const navbar = ({comany}) => { //it is for react.  and destructuring of object

}

navbar(comany = "Harshit")
console.log(navbar);


// {
//     "name":"Harshit",
//     "coursename": "js in hindi", //it is json structure which call api please ignore error it is perfect syntax
//     'price':"free"
// }



