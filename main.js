noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Pose Net is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Nose X = " + noseX + "Nose Y = " + noseY + "Difference" + difference);
    }
}

function draw()
{
    background("#8A2BE2");
    document.getElementById("square_side").innerHTML = "Width and Height of a text will be = " + difference;
    fill("#FFF389");
    stroke("FFF389");
    text("Gagan", noseX, noseY);
    text.size(difference);
}