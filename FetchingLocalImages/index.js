/*async function catchRainbow(){
    const response = await fetch('galaxy.jpg');
    const blob = await response.blob();
    document.getElementById('galaxy').src = URL.createObjectURL(blob);
}
catchRainbow();
*/

/*
fetch('galaxy.jpg')
.then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('galaxy').src = URL.createObjectURL(blob);
})
.catch(error=>{
    console.log('error!');
    console.error(error);
});

*/

//Get the canvas element and its context
async function catchRainbow(){
    const response = await fetch('galaxy.jpg');
    const blob = await response.blob();
    document.getElementById('galaxy').src = URL.createObjectURL(blob);
}

async function catchDog(){
    const response = await fetch("https://dog.ceo/api/breeds/"+"image/random");
    const blob = await response.blob();
    document.getElementById('galaxy').src = URL.createObjectURL(blob);
}
catchDog();
//catchRainbow();

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
const rectWidth = 50;
const rectHeight = 50;

const speed = 5;

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawRectangle(){
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, rectWidth, rectHeight);
}

function update(){
    clearCanvas();
    drawRectangle();
}

document.addEventListener("keydown", (event) =>{
    switch(event.key){

        case "ArrowUp":
            y-=speed;
            break;

        case "ArrowDown":
            y+=speed;
            break;

        case "ArrowLeft":
            x-=speed;
            break;
        
        case "ArrowRight":
            x+=speed;
            break;
    }
    update();
});

