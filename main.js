function setup() {
  canvas = createCanvas(350,300);
  canvas.position(500,200);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
  console.log("It WORKED");
}
function draw(){
  image(video,0,0,350,300);
  classifier.classify(video,gotResults);
}
function gotResults(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("magufin").innerHTML=results[0].label;
    document.getElementById("aim").innerHTML=results[0].confidence.toFixed(2)*100+"%"; 
  }
}