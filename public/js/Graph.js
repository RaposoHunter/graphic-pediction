const canvas = document.getElementById('canvas')// as HTMLCanvasElement;
const width = canvas.width = 1000;
const height = canvas.height = 500;

const context = canvas.getContext('2d');

context.translate(0, height);
context.scale(1, -1);

/* X-axis */
context.beginPath();

context.moveTo(0, 0);
context.lineTo(width, 0);
context.stroke();

context.closePath();

/* Y-axis */
context.beginPath();

context.moveTo(0, 0);
context.lineTo(0, height);
context.stroke();

context.closePath();

/* Horizontal Base-Lines */
for(let i = width / 10; i < width; i += width / 10) {
    context.beginPath();

    context.moveTo(i, 0);
    context.lineTo(i, height);
    context.stroke();

    context.closePath();
}

/* Verical Base-Lines */
for(let i = height / 5; i < height; i += height / 5) {
    context.beginPath();

    context.moveTo(0, i);
    context.lineTo(width, i);
    context.stroke();

    context.closePath();
}

