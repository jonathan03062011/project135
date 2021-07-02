function preload()
{
 image=loadImg("background.jpeg");
}

function setup()
{
canvas=createCanvas(400,350);
canvas.position(480,250);
video.hide();
}

function draw()
{
 image(video,0,0,400,350);
}