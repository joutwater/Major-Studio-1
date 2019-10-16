let qual_data;
let img_width = 80;
let margin = 25;
let images = [];
let folder = "images";
let loadedImagesCount = 0;
let imagesToLoad = 40;
var bufferLeft = 200;

let font1;
let font2;
let font3;
let font4;
let font5;

var qualVar = [];
var locPaint = [];

var filters = {
  early:null,
  earlyMid:null,
  middle:null,
  midLate:null,
  late:null,
  
  transition:null,
  
  leiden:null,
  amster:null,
  
  common:null,
  fancy:null,
  costume:null,
  
  copiesExist:null,
  attrDebate:null,
  locationPainted:null
};


function preload(){
      font1 = loadFont('fonts/TheLightFont.otf');
      font2 = loadFont('fonts/Pioggia.otf');
      font3 = loadFont('fonts/Felipa.ttf');
      font4 = loadFont('fonts/DMSerifText-Regular.ttf');
      font5 = loadFont('fonts/BreeSerif-Regular.ttf');
}

function setup() {
	createCanvas(1536,1000);
//  original canvas	
// 	createCanvas(bufferLeft+560,1500);
	qual_data = loadJSON("test.json", loadImages);
	
	var col = color(200);
	
	////////////////////////////////////
	
  //Early Career
	var button = createButton("early");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000"); 
	button.position(20, 190);
	button.mousePressed(function(){
	  if(filters.early==="earlyz"){
	  filters.early=null;
	}else{
	  filters.early="earlyz";
	}
	  drawImages();
	});

	//Early-Mid Career
	var button = createButton("early-mid");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 220);
  button.mousePressed(function(){
	  if(filters.earlyMid==="early_mid"){
	  filters.earlyMid=null;
	}else{
	  filters.earlyMid="early_mid";
	}
	  drawImages();
	});
	
	//Middle Career
	var button = createButton("middle");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 250);
	button.mousePressed(function(){
	  if(filters.middle==="middle"){
	  filters.middle=null;
	}else{
	  filters.middle="middle";
	}
	  drawImages();
	});
	
	//Mid-Late Career
	var button = createButton("mid-late");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 280);
		button.mousePressed(function(){
	  if(filters.midLate==="mid_late"){
	  filters.midLate=null;
	}else{
	  filters.midLate="mid_late";
	}
	  drawImages();
	});
	
	//Late Career
	var button = createButton("late");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 310);
	button.mousePressed(function(){
	  if(filters.late==="latez"){
	  filters.late=null;
	}else{
	  filters.late="latez";
	}
	  drawImages();
	});
	
	//////////////////////////////////////////
	
	//Transition Piece
	var button = createButton("transition piece");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 350);
		button.mousePressed(function(){
	  if(filters.transition==="transition_piece"){
	  filters.transition=null;
	}else{
	  filters.transition="transition_piece";
	}
	  drawImages();
	});
	
	//////////////////////////////////////////
	
	//Location Painted : Leiden
	var button = createButton("on / off");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 420);
		button.mousePressed(function(){
	  if(filters.leiden==="Leiden"){
	  filters.leiden=null;
	}else{
	  filters.leiden="Leiden";
	}
	  drawImages();
	});
	
// 	//Location Painted : Amsterdam
// 	var button = createButton("Amsterdam");
// 	button.style("font-family","inconsolata");
// 	button.style('font-size', '17px');
// 	button.style("background-color", "#000");
//   button.style("color", col);
// 	button.position(20, 450);
// 		button.mousePressed(function(){
// 	  if(filters.amster==="Amsterdam"){
// 	  filters.amster=null;
// 	}else{
// 	  filters.amster="Amsterdam";
// 	}
// 	  drawImages();
// 	});
	
	/////////////////////////////////////////
	
	//Attire: Common
	var button = createButton("common");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 490);
		button.mousePressed(function(){
	  if(filters.common==="common"){
	  filters.common=null;
	}else{
	  filters.common="common";
	}
	  drawImages();
	});
	
	//Attire: Fancy
	var button = createButton("fancy");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 520);
		button.mousePressed(function(){
	  if(filters.fancy==="fancy"){
	  filters.fancy=null;
	}else{
	  filters.fancy="fancy";
	}
	  drawImages();
	});
	
	//Attire: Costume
	var button = createButton("costume");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 550);
		button.mousePressed(function(){
	  if(filters.costume==="costume"){
	  filters.costume=null;
	}else{
	  filters.costume="costume";
	}
	  drawImages();
	});
	
	////////////////////////////////////////////
	
	//Controversy : Copies Exist
	var button = createButton("copies exist");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 620);
		button.mousePressed(function(){
	  if(filters.copiesExist==="copies_exist"){
	  filters.copiesExist=null;
	}else{
	  filters.copiesExist="copies_exist";
	}
	  drawImages();
	});
	
	//Controversy : Attribution Debated
	var button = createButton("attribution debated");
	button.style("font-family","inconsolata");
	button.style('font-size', '17px');
	button.style("background-color", "#000");
  button.style("color", col);
  button.style("border-color", "#000");
	button.position(20, 650);
		button.mousePressed(function(){
	  if(filters.attrDebate==="attribution_debate"){
	  filters.attrDebate=null;
	}else{
	  filters.attrDebate="attribution_debate";
	}
	  drawImages();
	});
	
	
	
  // loadImages();
}


//// Career ///////////////////////////

  function highlightCareerE(x,y,w,h){
    strokeWeight(4);
    stroke('rgba(230, 184, 0, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 200, 8, 8)
  }
  function highlightCareerEM(x,y,w,h){
    strokeWeight(4);
    stroke('rgba(230, 184, 0, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 230, 8, 8);
  }
  function highlightCareerM(x,y,w,h){
    strokeWeight(4);
    stroke('rgba(230, 184, 0, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 260, 8, 8);
  }
   function highlightCareerML(x,y,w,h){
    strokeWeight(4);
    stroke('rgba(230, 184, 0, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 290, 8, 8);
  }
   function highlightCareerL(x,y,w,h){
    strokeWeight(4);
    stroke('rgba(230, 184, 0, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 320, 8, 8);
  }
  
////////// Transition PIECE//////////////

  function highlightTransition(x,y,w,h){
    fill(200);
    noStroke();
    ellipse(x+w-5, y+h-5, 20);
    ellipse(160, 362, 7);
  }
  
///////////LOCATION////////////////////////

  function highlightLeiden(x,y,w,h){
    fill(120);
    noStroke();
    rect(390, 292, 880, 2);
    rect(390, 172, 2, 120);
    textSize(13);
    textFont("inconsolata");
    text('Leiden', 345, 235);
    
    fill(120);
    noStroke();
    rect(390, 297, 880, 2);
    rect(390, 297, 2, 120);
    textSize(13);
    textFont("inconsolata");
    text('Amsterdam', 320, 360);
    
    rect(109.5, 430, 15, 3)
  }
  // function highlightAmster(x,y,w,h){
    
  // }
  
/////////ATTIRE////////////////////////////////

  function highlightCommon(x,y,w,h){
    noStroke();
    fill('rgba(102,166,30, 0.3)');
    rect(x,(y+(h*(2/3))),w,((h/3)));
    rect(112, 500, 8, 8);
  }
  function highlightFancy(x,y,w,h){
  noStroke();
    fill('rgba(231,41,138, 0.3)');
    rect(x,(y+(h*(2/3))),w,((h/3)));
    rect(112, 530, 8, 8);
  }
  function highlightCostume(x,y,w,h){
 noStroke();
    fill('rgba(56,108,176, 0.3)');
    rect(x,(y+(h*(2/3))),w,((h/3)));
    rect(112, 560, 8, 8);
  }
  
///////////////CONTROVERSY////////////////////  
  
  function highlightAttrDb(x,y,w,h){
    strokeWeight(0.5);
    stroke(0);
    fill(255);
    noStroke();
    rect(x+w-20, y+10, 27, 4);
    rect(177, 662, 10, 2)
    // textSize(10);
    // fill(250, 250, 250, 50);
    // text('XXXXXXXX', x-8, y+h-8);

  }
  function highlightCopiesExist(x,y,w,h){
    fill(255);
    noStroke();
    rect(x-5, y-5, 0.7, h);
    rect(x-5, y-5, w, 0.7);
    rect(x-9, y-9, 0.7, h);
    rect(x-9, y-9, w, 0.7);
    rect(x-13, y-13, 0.7, h);
    rect(x-13, y-13, w, 0.7);
    
    rect(130, 623, 0.7, 20);
    rect(134, 623, 0.7, 20);
    rect(138, 623, 0.7, 20);
  }

// load all images
function loadImages(){
    for(var i=0; i<imagesToLoad; i++){
      images[i] = loadImage(folder + "/ZP_" + ("0"+(i+1)).slice(-2)  + ".jpg",   //always taking last two digits
      function(){
          // since these will load asynchronously, we have to keep track how many images have been loaded
          loadedImagesCount++;
          
          console.log (loadedImagesCount);

          // once all have been loaded, draw the images
          if(loadedImagesCount >= imagesToLoad){
          drawImages();
          }
      }
    );
    }
}

// function draw(){
//   noFill();
//   stroke(255, 204, 0);
//   strokeWeight(4);
//   rect(200, 100, 100, 150)
// }



function drawImages(searchTerm) {
  background(0);
  fill(220);
  // textSize(15);
  // textFont(font1);
  let y = margin;
  let x = margin + bufferLeft;
  let maxHeight = 0;
  // let y1 = (margin + img_height + 10);
  for(var i=0; i<imagesToLoad; i++){
    
    const img_ratio = images[i].height/images[i].width;
    const img_height = img_width*img_ratio;
    // const x = margin + (i*img_width) + (i*margin); //play with the const x. each iteration, add to it. change to var
    
    //find max height in each row
    if (img_height > maxHeight){
        maxHeight = img_height;
    }
    
    
    image(images[i], x+200, y+150, img_width, img_height);
    
    
       ////////////////////ATTIRE///////////////////////////////////////////////
    
    if(filters.common && qual_data[i].qualitativevariables.includes(filters.common)){
      push();
      highlightCommon(x+200,y+150, img_width, img_height);
      pop();
    }
    if(filters.fancy && qual_data[i].qualitativevariables.includes(filters.fancy)){
      push();
      highlightFancy(x+200,y+150, img_width, img_height);
      pop();
    }
    if(filters.costume && qual_data[i].qualitativevariables.includes(filters.costume)){
      push();
      highlightCostume(x+200,y+150, img_width, img_height);
      pop();
    }
    
    //////////////Career////////////////////////////////
    
    if(filters.early && qual_data[i].qualitativevariables.includes(filters.early)){
      push();
      highlightCareerE(x+200,y+150, img_width, img_height);
      pop();
    }
     if(filters.earlyMid && qual_data[i].qualitativevariables.includes(filters.earlyMid)){
      push();
      highlightCareerEM(x+200,y+150, img_width, img_height);
      pop();
    }
     if(filters.middle && qual_data[i].qualitativevariables.includes(filters.middle)){
      push(); 
      highlightCareerM(x+200,y+150, img_width, img_height);
      pop();
    }
     if(filters.midLate && qual_data[i].qualitativevariables.includes(filters.midLate)){
      push();
      highlightCareerML(x+200,y+150, img_width, img_height);
      pop();
    }
     if(filters.late && qual_data[i].qualitativevariables.includes(filters.late)){
      push();
      highlightCareerL(x+200,y+150, img_width, img_height);
      pop();
    }
    
    ///////////////TRANSITION////////////////////////////////
    
    
    if(filters.transition && qual_data[i].qualitativevariables.includes(filters.transition)){
      push();
      highlightTransition(x+200,y+150, img_width, img_height);
      pop();
    }
    
    ///////////////////////LOCATION////////////////////////////
    
     if(filters.leiden && qual_data[i].locationpainted.includes(filters.leiden)){
      push();
      highlightLeiden();
      pop();
    }
     if(filters.amster && qual_data[i].locationpainted.includes(filters.amster)){
      push();
      highlightAmster();
      pop();
    }
 
    
    ///////////////////CONTROVERSY///////////////////
    
    if(filters.copiesExist && qual_data[i].qualitativevariables.includes(filters.copiesExist)){
      push();
      highlightCopiesExist(x+200,y+150, img_width, img_height);
      pop();
    }
     if(filters.attrDebate && qual_data[i].qualitativevariables.includes(filters.attrDebate)){
      push();
      highlightAttrDb(x+200,y+150, img_width, img_height);
      pop();
    }
    
    
    //   if(searchTerm && qual_data[i] && qual_data[i].locationpainted.includes(searchTerm)){
    //   // && means "and", both sides have to be true. if search Term and qualdata exists then look for the item in the array/object
    //   strokeWeight(2);
    //   // noFill();
    //   stroke(0, 230, 230);
    //   // line(x+200,y1+150,img_width, img_height);
    //   noStroke();
    // }
    
    // if(searchTerm && qual_data[i] && qual_data[i].qualitativevariables.includes(searchTerm)){
    //   // && means "and", both sides have to be true. if search Term and qualdata exists then look for the item in the array
    //   strokeWeight(2);
    //   noFill();
    //   stroke(230, 230, 0);
    //   rect(x+200,y+150,img_width, img_height);
    //   noStroke();
    // }
    
    //   if(searchTerm && qual_data[i] && qual_data[i].qualitativevariables.includes("transition_piece")){
    //   // && means "and", both sides have to be true. if search Term and qualdata exists then look for the item in the array
    //   strokeWeight(7);
    //   noFill();
    //   stroke(200, 0, 0);
    //   rect(x,y+150,img_width, img_height);
    //   noStroke();
    // }

    
    if(i%8===7){
      //reset for new row. the remainder will always be 4 at index 4, 9, 14, 19... That will be the point at which a new row is started
      x = margin + bufferLeft;

      y += maxHeight + margin;
      if (i ===7){
        y += 25;
      }
      //find new max height on each row
      maxHeight = 0;
    }
    else{
      x += img_width + margin;
    }
    
    // if(i%8===7, i<=7){
    //   //reset for new row. the remainder will always be 4 at index 4, 9, 14, 19... That will be the point at which a new row is started
    //   x = margin + bufferLeft;
    //   y += maxHeight + margin;
    //   //find new max height on each row
    //   maxHeight = 0;
    // }
    // else{
    //   x += img_width + margin;
    // }
    
    // push();
    // text(qual_data[i].filename, x, margin + img_height + margin, img_width, 200);
    // pop();
   

    // text('Career', 20, 80);
    
   
    
    push();
    fill(240);
    textSize(27)
    // textFont("Times New Roman");
    // textAlign(CENTER);
    text('career', 15, 180);
    pop();
    
    push();
    fill(240);
    textSize(27)
    textFont(font4);
    // textAlign(CENTER);
    text('location painted', 15, 410);
    pop();
    
    push();
    fill(240);
    textSize(27)
    textFont(font4);
    // textAlign(CENTER);
    text('attire', 15, 480);
    pop();
   
    push();
    fill(240);
    textSize(27)
    textFont(font4);
    // textAlign(CENTER);
    text('controversy', 15, 610);
    pop();
    
    push();
    fill(180);
    textSize(30)
    textFont(font3);
    // textAlign(CENTER);
    text(' :   ZelfPortret', 800, 50);
    pop();
    
    push();
    fill(180);
    textSize(30);
    textFont(font4); 
    // textAlign(CENTER);
    text('Rembrandt : ', 630, 50);
    pop();
    
    
    // if((i+1)%4===0){
    //   //find the largest height on the row
    
    // }
    
  }

}