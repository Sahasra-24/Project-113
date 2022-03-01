function preload()
{

}
function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    fill(61, 209, 202);
    stroke(0,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(30, 117, 113);
    stroke(0,0,0);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
    image(video,230,150,220,200);
}
function take_snapshot()
{
    save("student_name.png");
}
function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
    
}