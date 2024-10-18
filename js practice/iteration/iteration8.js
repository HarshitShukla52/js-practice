//reduce

const num =[2, 4, 1, 7, 8]

const intialValue = 0

const myTotal = num.reduce(function (accumulator , cuurentValue){
    console.log(`acc: ${accumulator} and currValue: ${cuurentValue}`);
    
    return accumulator + cuurentValue
}, intialValue)

console.log(myTotal);


//#2
const myNum =[2, 4, 1, 3, 7]

const Total = myNum.reduce( (acc , currValue) => acc + currValue , 0)

console.log(Total);

//#3

const shopping = [
    {
        itemname:"javascript",
        price: 999 
    },
    {
        itemname:"java",
        price: 1999 
    },
    {
        itemname:"web dev",
        price: 2999 
    },
    {
        itemname:"python",
        price: 999 
    },
]

const priceToPay = shopping.reduce((acc ,item) => (acc  +  item.price) ,0)
console.log(priceToPay);

