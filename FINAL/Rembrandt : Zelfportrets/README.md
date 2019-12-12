## Process (Qualitative)

At the outset of this project, I knew that I wanted to focus on Dutch Impressionism and imagery, but I wasn't sure of which artist to focus on. After looking at a few of the prominent artists from the time, Rembrandt stood out as having the most unique story, especially through his approximately forty self-portraits. I began researching like crazy, at first looking into all of his portraits, not just self-portraits. I was finding really amazing connections. For example, one of his self-portaits was painted on wood from the same tree as a two-portrait-set he painted of other men. At a certain point, however, I realized there was a very rich story just by looking at his self-portraits, not only becuase there were some interesting commonalities between them, but because I thought it was very interesting how he was telling a story about himself. As you will see, he sometimes characterized himself in a way that was different from his reality.

Almost all of the data for this project was from sources other than the MET, although some of my initial inspiration for the porject was realized through searching MET data. Through my research, I found a few data sources that were the foundation by which I populated a list of categories and subcategories I found common throughout his works. The most reliable of those sources is a Dutch digital art collection website called [RKD](https://rkd.nl/en/explore/images#search=simple&query=rembrandt%20self-portrait&filters[kunstenaar][]=Rembrandt&filters[RKD_algemene_trefwoorden][]=man's%20portrait&filters[objectcategorie][]=painting&filters[periode]=1625%7C%7C1670&start=0&facets[periode][start]=1625&facets[periode][end]=1671&facets[periode][gap]=7) that specializes in artists from the Netherlands. This source had almost all of his self-portraits and had all of the data on controversy and interesting connections to Rembrandt's other portraits. Another source was a [website](http://www.rembrandtpainting.net/complete_catalogue/start_self_portraits.htm) completely dedicated to Rembrants self-portraits. This was helpful as a cross-reference to the primary source and it was nice to see a chronological list of his self-portraits, which was a structure simmilar to what I was planning to employ. There were some works that did not match with RKD, so I had to look at a few other websites to get the final group. There is still a chance that I might be incorrect on a few of the works, but they are mostly vetted! Another huge source was the website of each museum or collection that housed the self-portrait. They didn't always have information about the piece, but when they did, it offered amazing details and as I was categorizing each of his works.

So, I began to compile my own csv. My literal process was to look at each image in the order it was painted, give it a filename, go the the RKD website to obtain the year of creation, location painted, and any controversial data. Then I would search google or the museum website to find more information, which would often help me define the type of attire, find transitions between stages in his career, and find standout pieces that really defined his progression of style as an artist. I collected all of this information in google sheets and created a JSON file so I could link to certain categories in the code and more efficiently trigger selections of images with certain qualities.

The images for this project were all downloaded on either RKD, the Rembrandt self-portraits website, or museum websites, with most images coming from the first two. They are not as consistent as I would like in terms of brightness and quality, but I made some slight edits to some in order to make them seem more cohesive. Once all of this data was collected and ready to go in AWS, I started coding my concept based on the image lab in class.

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
                
Next, I needed to setup a way to have each subcategory symbol draw (the JSON was very helpful in this). This was the hardest part of the code for me because it was a more complex sequence of events than I had created before. The concept is that when each button is pressed, a category string is added to its paired object and is then drawn from a function that specifies how to draw that exact symbol for all images that contain that category. When you click the button again, it removes the string from the object by making it "null" again. I will provide one cateogry as an example below (the code does not exist in this order but I wanted to display it in a way that is most intuitive):

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
            	/////////This controls whether the search term is in the object or not. It starts at null but we add it                         by clicking the button
            	  if(filters.early==="earlyz"){
            	  filters.early=null;
            	}else{
            	  filters.early="earlyz";
            	}
            	  drawImages();
            	});
                
                //////////////////////////////////////////
          
                
I had to make some specific design choices around the symbology in order to make the toggle system logical and aesthetically pleasing:

Career: After iterating a few times, I decided to choose a plain white border for the career eras, having it be the same for each era within. I thought that it would be logical enough to see the symbol next to a clicked button as an indication if a filter was on or off. This choice was instead of making each era unique, which might have been too many colors / retinal values at once along with the other symbols. Alec pushed me in the right direction with this one. 

Transition piece: Luckily, I had already worked most of the other symbols along the periphery of the image itself, so I squeezed a small, light grey symbol inside the bottom left corner of each portrait. I found this strong enough to standout among the other symbols, but not too strong.

Location painted: I decided to separate each group of locations by lines splitting and wrapping the groups. Richard got me thinking of this through another visualization format he recommended which separated the categories more through xy positioning. I thought to use the xy positioning I already had but still show the separation but creating a greater margin between the two groups and drawing the supplemental lines for emphasis.

Attire: This one was tough to figure out. I felt that the only remaining space was to use parts of the portait, but i didnt want to take too much of the space so one could still see the portrait. I played with opacity and the ratio of each portait to create the filled rectangle at the bottom of each. The colors choices were inspired by a range of gold for the golden era of painting around this time, but i made slight adjuistments to make each discernable from the other while not too loud.

Controversy: These were my favorite! I wanted these to stand out the most becasue they reveal the most interesting parts of his story I think. The copies exist were inspired by richard while we were going over formatting ideas. That symbol really makes an impact when you turn it on because it takes up a lot of the margin space and creates a more engaging composition. The attribution debated was also fun. I wanted to create a graphic signature and put it on the top right, almost floating off of the painting to make it seem like it could be his or not his. I ended up moving it more back on the paintings because it was a little bit tough for the eyes to follow it from the painting, over the white border, and onto the black. It was the first time I had used an SVG in p5. I feel like this is a game changer in terms of symbology!!

Thank you for all of the feedback and inspiration Alec and Richard.
