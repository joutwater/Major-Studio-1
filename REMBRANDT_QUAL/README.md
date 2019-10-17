## Process

At the outset of this project, I knew that I wanted to focus on Dutch Impressionism and imagery, but I wasn't sure of which artist to focus on. After looking at a few of the prominent artists from the time, Rembrandt stood out as having the most unique story, especially through his approximately forty self-portraits. I thought, "there must be an interesting story to tell here." I began researching like crazy, at first looking into all of his portraits, not just self-portraits. I was finding really amazing connections. For example, one of his self-portaits was painted on wood from the same tree as two portrait set he painted of other men. At a certain point, however, I realized there was a very rich story just by looking at his self-portraits, not only becuase there were some interesting commonalities between them but I thought it was very interesting how he was telling a story about himself. As you will see, he sometimes characterized himself in a way that was different from his reality.

Almost all of the data for this project was from sources other than the MET, although some of my initial inspiration for the porject was realized through searching MET data. Through my research, I found a few data sources that were the foundation of populating a list of categories and subcategories I found common in his works. The most reliable of those sources is a Dutch digital art collection website called RKD that specializes in artists from the Netherlands. This source had almost all of his self-portraits and had all of the data on controversy and interesting connections to Rembrandt's other portraits. Another source was a website completely dedicated to Rembrants self-portraits. This was helpful as a cross-reference to the primary source and it was nice to see a chronological list of his self-portraits, which was a structure simmilar to what I was planning to employ. There were some works that did not match with RKD, so I had to look at a few other websites and google to get the final group. There is still a chance that I might be incorrect on a few of the works, but they are mostly vetted! Another huge source in the previous method and in general was the website of each museum or collection that housed the self-portrait. They didn't always have information about the piece, but they often did and it usually offered amazing details and context for me as I was categorizing each of his works.

So, I began to compile my own csv. My literal process was to look at each image in the order it was painted, give it a filename, go the the RKD website to obtain the year of creation, location painted, and any controversial data. Then I would search google or the webiste of the museum that holds the piece and find more information, which would often help me define the type of attire, find transitions between stages in his career, and find standout pieces that really defined his progression of style as an artist. I collected all of this information in google sheets over 6+ hours with all of the back and forth between websites and secondary verifications. After this, I created a JSON file from google sheets so I could link to certain categories in the code and more efficiently trigger selections of images with certain qualities.

The images for this project were all downloaded on either RKD, the Rembrandt self-portraits website, or museum websites, with most images coming from the first two. They are not as consistent as I would like in terms of brightness and quality, but I made some slight edits to some in order to make them seem more cohesive. Once all of this data was collected and ready to go in AWS, I started coding my concept based on the image lab in class. Below if how I made edits to different groups of the code in order to display my data.

            function setup() {
            	createCanvas(2000,1000);
            	qual_data = loadJSON("test.json", loadImages);
            	
            ////////////////////////////////////////////////////	
            
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
            
            /////////////////////////////////////
            
            
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
                
            /////////////////////////////////////////////
            
After loading the images, I had to find a way to start a new row after each line of eight images was drawn. I used modulus, margin value, and the maxHeight of each previous row to define the starting point of the next.

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
                
Next, I needed to setup a way to have each subcategory symbol draw (the JSON was very helpful in this). This was the hardest part of the code for me because it was a more complex sequence of events than I had created before. The concept is that when each button is pressed, a category string is added to its paired object and is then drawn from a function that specifies how to draw that exact symbol for all images that contain that category. I will provide one cateogry as an example below (the code does not exist in this order but I wanted to display it in a way that is more intuitive for myself):

                // if statements below:  && means "and", both sides have to be true. if filters.xxxx and qualdata exists,
                //then look for the item in the array/object and draw the selection with the defined technique.
                if(filters.early && qual_data[i].qualitativevariables.includes(filters.early)){
                  push();
                  
                  //////// this calls the function to draw the symbol
                  highlightCareerE(x+200,y+150, img_width, img_height);
                  pop();
                }
                
                ////////////////////////////////////////////////////
                
                function highlightCareerE(x,y,w,h){
                strokeWeight(3);
                stroke('rgba(255,255,255, 1.0)');
                noFill();
                rect(x,y,w,h);
                strokeWeight(1);
                rect(112, 200, 8, 8)
                }
                
                ///////////////////////////////////////////////////////
                
                  //Early Career
            	var button = createButton("early");
            	button.style("font-family","inconsolata");
            	button.style('font-size', '17px');
            	button.style("background-color", "#000");
                button.style("color", col);
                button.style("border-color", "#000"); 
            	button.position(20, 190);
            	button.mousePressed(function(){
            	/////////This controls whether the search term is in the object or not. It starts at null but we add it by clicking the button
            	  if(filters.early==="earlyz"){
            	  filters.early=null;
            	}else{
            	  filters.early="earlyz";
            	}
            	  drawImages();
            	});
                
                //////////////////////////////////////////