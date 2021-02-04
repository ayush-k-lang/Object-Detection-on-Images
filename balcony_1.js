var picture,status;
var objects=[];

function preload(){
picture=loadImage("image 1.jpg");
}

function setup(){
canvas=createCanvas(800,600);
canvas.position(550,200);
objectDetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status_button").innerHTML="Status : Detecting objects";
}

function draw(){
image(picture,0,0,800,600);

if(status != ""){
for(var i = 0 ; i < objects.length ; i++){
document.getElementById("status_button").innerHTML="Status : Objects Detected";
fill("blue");
percent=floor(objects[i].confidence*100);
text(objects[i].label + " " + percent + "%" , objects[i].x+15 , objects[i].y+15);
noFill();
stroke("red");
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height); 
}
}

}

function modelloaded(){
    console.log("modelloaded");
    status=true;
    objectDetector.detect(picture,gotResult);
}

function gotResult(error,result){
    if(error){
console.log("error"+error);
    }
    else{
console.log(result);
objects=result;
    }
}