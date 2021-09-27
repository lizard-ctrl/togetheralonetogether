var socket;

function setup(){
createCanvas(windowWidth,windowHeight);
background(200,20,200);

socket = io.connect('http://localhost:5500');

c1 = color(90, 13, 184);
c2 = color(14, 196, 8);

for(let y=0; y<height; y++){
  n = map(y,0,height,0,1);
  let newc = lerpColor(c1,c2,n);
  stroke(newc);
  line(0,y,width, y);
}

}

function draw(){
fill(200,20,200,10);
ellipse(mouseX,mouseY,60,60);
}

