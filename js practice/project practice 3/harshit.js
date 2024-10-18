const clock = document.getElementById("clock")
//const clock = document.querySelector("#clock")  in dono me same hi value aaiygi isliye dono me se koi bhi ek use kar sakte h




setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();



}, 2000)

const date = document.getElementById("date")

setInterval(function(){
    let time  = new Date()
    date.innerHTML = time.toLocaleDateString();
    
})