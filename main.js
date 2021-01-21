noseX=0;
noseY=0;

function preload()
{
  lips=loadImage('https://i.postimg.cc/dVFk0FMk/lips-red-mouth-white-kiss-human-mouth-cartoon-health-png-clipart.jpg')
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    posenet=ml5.poseNet(video,model_loaded)
    posenet.on('pose',gotPosenet);
}

function model_loaded()
{
    console.log("model_loaded");
}

function gotPosenet(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("lipx" + results[0].pose.nose.x);
        console.log("lipy" + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y+15;
    }
}


function draw()
{
   image(video,0,0,300,300);
   image(lips,noseX,noseY,30,30);

}

function take_snapshot()
{
    save('image.png');
}
