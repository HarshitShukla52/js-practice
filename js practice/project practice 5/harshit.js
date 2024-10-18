// going to generate random color

const colorRandom = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color;
}
let IdOfinterval;

//console.log(colorRandom());
const startChangingColor = function(){

    if (!IdOfinterval) {
        IdOfinterval = setInterval(changeBgColor , 500);
    }

    function changeBgColor () {
        document.body.style.backgroundColor = colorRandom();
    }

};


const stopChangingColor = function(){
    clearInterval(IdOfinterval)
    IdOfinterval = null;

};



document.querySelector('#start').addEventListener('click' , startChangingColor )

document.querySelector('#stop').addEventListener('click' , stopChangingColor )
