mustacheX=0;
mustacheY=0;


function preload(){
    clown_mustache = loadImage('https://i.postimg.cc/mZmhdDtP/MUSTAGE.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
    
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_mustache, mustacheX, mustacheX, 25, 25);
}

function take_snapshot(){
    save("my_picture.png");
}

function gotPoses(results) {
    if(results.length > 0) {
        mustacheX = results[0].pose.nose.x-10;
        mustacheY =  results[0].pose.nose.y-15;
        console.log("nose x = " + mustacheX);
        console.log("nose y = " + mustacheY);
    }
}