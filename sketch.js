function setup() {
    createCanvas(700, 700);
    background('purple');
  }
  
  function draw() {
    
    stroke("blue");
    fill("greem");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
    } 
    
  }