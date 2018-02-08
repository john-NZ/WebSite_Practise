let x = 0;
let y = 0;
let spacing = 10;
let p = 0 ;

var canvas;

function setup() {
canvas = createCanvas(300,300);
 background(0);
}    

function draw() {
stroke(255);
p = 0 ;
for ( y = 0; y < height; y = y +spacing) {
stroke(255,y,y) ;   
  //print(y);
x = 0;
while (x < width){
if (random(1) < p) {   

line(x,y,x+spacing,y+spacing);
  
}
else
{line(x+spacing,y,x,y+spacing);}
x = x +spacing ;
}
p = p + 0.015;
print(p);
}
noLoop();

}
function mousePressed() {
  background(0);
    loop();
}

