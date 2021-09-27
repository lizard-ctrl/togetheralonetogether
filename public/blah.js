let video;
let poseNet;
let poses = [];
var r;
var words = ["✶", "✴", "✣", "✲","✦","⁂"];
var myp5 = new p5(sketch);


function setup() {
  var canvas = createCanvas(600, 500);
  canvas.parent('ML');
 

  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status');
}

function draw() {
  //if u comment from line 29 to line 42 out, also looks cool
   background(116, 168, 25);
  //image(video, 0, 0, width, height);
  
  //edited Gene Kogan Perlin Noise https://genekogan.com/code/p5js-perlin-noise/
 
 
  drawKeypoints();
  drawSkeleton();
}

function drawKeypoints()  {
  
  for (let i = 0; i < poses.length; i++) {

    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
     
      let keypoint = pose.keypoints[j];
     
      if (keypoint.score > 0.2) {
        r = random(50,150);
        fill(r, 0, 255);
        noStroke();
        textSize(60);
        let word = random(words);
        text(word,keypoint.position.x, keypoint.position.y);
      }
    }
  }
}


function drawSkeleton() {
  
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
   
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
    
    }
  }
}
