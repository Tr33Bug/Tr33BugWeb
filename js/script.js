var move = false;
var start1 = Math.floor(Math.random() * 1001);
var start2 = Math.floor(Math.random() * 1001);
var start3 = Math.floor(Math.random() * 1001);
var start4 = Math.floor(Math.random() * 1001);
var resetCanvas = false;
var color = "#4E0000"
var randomColor = false;

context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 1000;
context.canvas.width = 1000;
dotWidth = 0;
roundcount = 0;


function panicStop() {

    move = false;

}

function panicGo() {

    move = true;

}

function refresh() {

    resetCanvas = true;


}

function randomColor() {

    if (randomColor) {
        randomColor = false;
    } else randomColor = true;

}



if (randomColor == false) {

    document.getElementById("changeRandomColor").innerHTML = "Change to default color!";
    color = "#" + Math.floor(Math.random() * 1000000)
} else {
    document.getElementById("changeRandomColor").innerHTML = "Change to random color!";
    color = "#FF00FF"
}







loop = function() {



    if (resetCanvas) {
        start1 = Math.floor(Math.random() * 1001);
        start2 = Math.floor(Math.random() * 1001);
        start3 = Math.floor(Math.random() * 1001);
        start4 = Math.floor(Math.random() * 1001);

        dotWidth = 0;
        move = false;

        context.fillStyle = "#000000";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        color = "#" + Math.floor(Math.random() * 1000000)

        resetCanvas = false;

    } else {
        if (roundcount == 5) {
            roundcount = 0;
        }

        if (move && roundcount == 0) {
            dotWidth += 1;
        }





        context.fillStyle = "#000000";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height); // x, y, width, height


        context.fillStyle = color; // hex for red
        context.beginPath();
        context.rect(start1, start4, dotWidth, dotWidth);
        context.fill();

        context.fillStyle = color; // hex for red
        context.beginPath();
        context.rect(start2, start1, dotWidth, dotWidth);
        context.fill();

        context.fillStyle = color; // hex for red
        context.beginPath();
        context.rect(start3, start2, dotWidth, dotWidth);
        context.fill();

        context.fillStyle = color; // hex for red
        context.beginPath();
        context.rect(start4, start3, dotWidth, dotWidth);
        context.fill();


    }
    roundcount += 1;
    window.requestAnimationFrame(loop);
};

window.requestAnimationFrame(loop);