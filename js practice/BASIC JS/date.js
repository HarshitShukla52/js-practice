// let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toUTCString());
// console.log(myDates.toTimeString());
// console.log(myDates.toISOString());
// console.log(myDates.toLocaleTimeString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.getTimezoneOffset());
// console.log(typeof myDates); //it is an object


// let myNewDate = new Date(2024,10,24) it is shown nov beacause of array stating index is from 0
// let myNewDate = new Date(2024,10,24 ,5,3)
// let myNewDate = new Date("2024-03-16")
let myNewDate = new Date("03-12-2024")
console.log(myNewDate);
console.log(myNewDate.toDateString());
console.log(myNewDate.toLocaleString());

let myTimesStamp= Date.now()

console.log(myTimesStamp);

console.log(myNewDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString("default", {
    weekday:"long",
    
})
console.log(newDate);
