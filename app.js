const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const range = document.getElementById('jsRange');

const colors = document.querySelectorAll('.controls__color');

const jsMode = document.getElementById('jsMode');
const jsClear = document.getElementById('jsClear');

canvas.width = document.getElementsByClassName("canvas").jsCanvas.offsetWidth;
canvas.height = document.getElementsByClassName("canvas").jsCanvas.offsetHeight;


let painting = false;

function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
    
    if(!painting) {        // 마우스가 캔버스에 들어오면 선을 만들 준비
        ctx.beginPath();   // 경로 생성 
        ctx.moveTo(x, y);  // 경로의 시작점 이동
    }
    if(painting === true) {
        ctx.lineTo(x, y);  //Path의 마지막 점에 연결. => 클릭한 부분이 마지막 Path 이므로 클릭한곳과 연결
        ctx.stroke();  // 실제 선을 그림 
    }
}

function mouseLeave(event) {
    painting = false;
}

function startPainting(event) {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function changeColor(event) {  //default : black
    console.log(event.target.style.backgroundColor);
    ctx.strokeStyle = event.target.style.backgroundColor;
}

function fillCanvas() {
    const myCanvas = document.getElementsByClassName('canvas');
    console.log(myCanvas);
    myCanvas.jsCanvas.style.backgroundColor = ctx.strokeStyle;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.beginPath();
}

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('mouseup', stopPainting);
}

for(let i=0; i<colors.length; i++) {
    let myColor = colors[i];
    myColor.addEventListener('click', changeColor);
}

jsClear.addEventListener('click', clearCanvas);
jsMode.addEventListener('click', fillCanvas);
