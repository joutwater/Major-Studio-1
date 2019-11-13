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

var filters = {
  
  early:null,
  earlyMid:null,
  middle:null,
  midLate:null,
  late:null,
  
  transition:null,
  
  leiden:null,
  
  common:null,
  fancy:null,
  costume:null,
  
  copiesExist:null,
  attrDebate:null,
};


function preload(){
      font1 = loadFont('fonts/TheLightFont.otf');
      font2 = loadFont('fonts/Pioggia.otf');
      font3 = loadFont('fonts/Felipa.ttf');
      font4 = loadFont('fonts/DMSerifText-Regular.ttf');
      font5 = loadFont('fonts/BreeSerif-Regular.ttf');
      sign = loadImage('SVG/Asset_1.svg');
      title = loadImage('SVG/Asset_2.svg');
}

function setup() {
	createCanvas(2000,1000);
	qual_data = loadJSON("test.json", loadImages);
	
	
	
	var col = color(200);
	
	////////////////////////////////////
	
  //Early Career
	var button = createButton("early");
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	
	
	/////////////////////////////////////////
	
	//Attire: Common
	var button = createButton("common");
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	button.style("font-family","Consolas");
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
	
}


//// Career ///////////////////////////

  function highlightCareerE(x,y,w,h){
   strokeWeight(3);
    stroke('rgba(255,255,255, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 200, 8, 8)
  }
  function highlightCareerEM(x,y,w,h){
   strokeWeight(3);
    stroke('rgba(255,255,255, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 230, 8, 8);
  }
  function highlightCareerM(x,y,w,h){
   strokeWeight(3);
    stroke('rgba(255,255,255, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 260, 8, 8);
  }
   function highlightCareerML(x,y,w,h){
    strokeWeight(3);
   stroke('rgba(255,255,255, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 290, 8, 8);
  }
   function highlightCareerL(x,y,w,h){
    strokeWeight(3);
  stroke('rgba(255,255,255, 1.0)');
    noFill();
    rect(x,y,w,h);
    strokeWeight(1);
    rect(112, 320, 8, 8);
  }
  
////////// Transition PIECE//////////////

  function highlightTransition(x,y,w,h){
    fill(200);
    noStroke();
    ellipse(x+11, y+h-11, 14);
    ellipse(160, 362, 7);
  }
  
///////////LOCATION////////////////////////

  function highlightLeiden(x,y,w,h){
    fill(120);
    noStroke();
    rect(390, 292, 880, 2);
    rect(390, 172, 2, 120);
    textSize(13);
    textFont("Consolas");
    text('Leiden', 345, 235);
    
    fill(120);
    noStroke();
    rect(390, 297, 880, 2);
    rect(390, 297, 2, 120);
    textSize(13);
    textFont("Consolas");
    text('Amsterdam', 320, 360);
    
    rect(109.5, 430, 15, 3)
  }

  
/////////ATTIRE////////////////////////////////

  function highlightCommon(x,y,w,h){
    noStroke();
    fill('rgba(214,192,55, 0.6)');
    rect(x,(y+(h*(3/4))),w,((h/4)));
    rect(112, 500, 8, 8);
  }
  function highlightFancy(x,y,w,h){
  noStroke();
    fill('rgba(216,114,21, 0.6)');
    rect(x,(y+(h*(3/4))),w,((h/4)));
    rect(112, 530, 8, 8);
  }
  function highlightCostume(x,y,w,h){
 noStroke();
    fill('rgba(255,83,90, 0.6)');
    rect(x,(y+(h*(3/4))),w,((h/4)));
    rect(112, 560, 8, 8);
    
  }
  
///////////////CONTROVERSY////////////////////  
  
  function highlightAttrDb(x,y,w,h){

    image(sign,x+w-23,y+7, 22, 6);
    image(sign,177,658, 18, 6);

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



function drawImages(searchTerm) {
  background(0);
  fill(220);
  let y = margin;
  let x = margin + bufferLeft;
  let maxHeight = 0;
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
       
    // if statemetns below:  && means "and", both sides have to be true. if filters.xxxx and qualdata exists,
    //then look for the item in the array/object and draw the selection with the technique defined above.
    
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
    
    
    if(i%8===7){
      //reset for new row. the remainder will always be 7 at index 7, 15, 23, 31... That will be the point at which a new row is started
      x = margin + bufferLeft;
      y += maxHeight + margin;
      
      // making some extra space between first and second row to give the location painted symbols enough room to draw
      if (i ===7){
        y += 25;
      }
      //find new max height on each row
      maxHeight = 0;
    }
    else{
      x += img_width + margin;
    }
    
    push();
    fill(240);
    textSize(27)
    textFont(font4);
    text('career', 15, 180);
    pop();
    
    push();
    fill(240);
    textSize(27)
    textFont(font4);
    text('location painted', 15, 410);
    pop();
    
    push();
    fill(240);
    textSize(27)
    textFont(font4);
    text('attire', 15, 480);
    pop();
   
    push();
    fill(240);
    textSize(27)
    textFont(font4);
    text('controversy', 15, 610);
    pop();
    
    push();
    fill(180);
    textSize(35)
    textFont(font3);
    text(' :   ZelfPortret', 817, 70);
    pop();
    
    push();
    fill(180);
    textSize(35);
    textFont(font4); 
    text('Rembrandt : ', 630, 70);
    pop();

  }

}