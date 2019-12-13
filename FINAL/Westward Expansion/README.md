## Westward Expansion
#### A visualization of creative proliferation in America by way of mapping the frequency of artworks by state from the 18th century to the early 20th century.
https://joutwater.github.io/Major-Studio-1/US_OUTPUT/Interactive/


## Quantitative

This aspect of Westward expansion was a lot of data gathering and testing of different visuals. I created a new dataset based on the MET's geographic data, looking at the amount of artwork coming from each state over time. Much of the MET's data was empty in this category, so I had to research and make educated guesses about which state each artwork was from. This took a lot of my time in the first project, so I was only able to create a mock up of where I wanted to go. Thankfully, I had time to pursue this project further in my interactive project, and create a high fidelity visualization. Please see mock ups from different stages of the process and final visuals below:

![alt text](https://github.com/joutwater/Major-Studio-1/blob/master/week04/unnamed.jpg)

![alt text](https://github.com/joutwater/Major-Studio-1/blob/master/week04/bertin.jpg)


### Final Visuals:

![alt_text](https://github.com/joutwater/Major-Studio-1/blob/master/FINAL/Westward%20Expansion/Images/1800-1850.png)

![alt_text](https://github.com/joutwater/Major-Studio-1/blob/master/FINAL/Westward%20Expansion/Images/1851-1900.png)


## Interactive

After my first attempt at conveying American Artistic output in the quantitative project, I couldn't help but use the third project's theme of interactivity to explore the concept further. Interactivity in data visualization has been an incredibly exciting realm so far, mostly because of the amazing narratives that can be told in this way. Coming into the American Art again, I wanted to take the time to thoughtfully define my date ranges of concern, look more deeply into the challenge of showing values with changing borders, and hopefully find interesting insights that could be interesting for us and our friends at the MET.

Technically, one of my goals in this project was to use d3, since I hadn’t used it in any previous projects. Also, I wasn’t expecting it at first, but I got to know html and css much better than I knew before. More than anything, this project taught me what it looks like when multiple programming language types work in harmony to create a data visualization of higher complexity and therefore more effective storytelling.



#### Layout:
Since my writing in this is more stream-of-consciousness than academic, I wanted to offer a framework of the passages below if you want to skip to one or another.

##### Process: Technical
###### Interactive map d3
###### Reflections
###### Scrollytelling in d3
###### Reflections

##### Process: Creative
###### Beginning stages
###### Logic with date ranges and visual representation
###### Choices in borders and color
###### Fonts and formatting

Summary


### Process: Technical

#### Interactive map d3
Starting out on this project, I wasn’t quite sure how I would be using d3, but I knew I wanted to include an interactive map of some kind. By doing research on bostocks bl.ocks and observable sites, I was able to learn about topojson / geojson formats, svgs, enter() update() exit(), and d3 syntax relating to maps. Through the research, I found a few helpful examples of US chloropleth maps with tooltip interactivity and, after reading through the code, editing, and adapting some of my own data and color schemes, I was able to move towards a map revealing artwork totals throughout the US. However, the one aspect I was missing was an interaction involving an image display tooltip. I tried to incorporate images in multiple ways throughout my project, but I was having difficulty with it either because it wasn’t flowing well with the rest of the narrative or I wasn’t able to figure out how to add it to my scrolly-telling maps appropriately. I finally figured out that the best way for me to add the imagery was through the d3 map. This took a lot of time but I finally figured it out! I was trying to add the image tooltip to the same svg as the map until I realized it was better to add the image tooltip to a new div in the body. It was interesting to learn about the .on mouse over, mouse move, and mouse out capabilities

#### Reflections
To offer a self-critique / reflection on the interactive map and the image tooltip, I wish I could have actually included the image tooltip on the scrolly maps because I think it would have worked the best with my story. Secondly, there were a couple ways my code could have been more clean. The fill colors could have been organized with scaleOrdinal but I didn’t get around to employing that method. Another issue was that I wasn’t able to create an image tooltip for every state in the d3 map. I could only get about 42 because some of the ids in the .tsv had a zero in front of it (01), which didn’t allow the corresponding images to work (something having to do with index formats I think).

#### Scrollytelling with d3
Another major component of my visualization was the implementation of scrollytelling. While I was figuring out the best sequence to show each map, it occurred to me that scrollytelling would be an effective way to do so. Before that, I was thinking of adding a clickable arrow that would take you in either direction through the map progression, but I started thinking that users may not look through all of the maps if that was presented to them. Scrolling seemed more natural and even more exciting since it was another opportunity to try out d3. I was able to find a library and good documentation on scrollama, so I started with one of their examples as a base and built in all of my styling, text, images, and customized triggers. One of my favorite parts of the code is how the step-is-active triggers a new data src for an image, and connects that data src to the figure tag where the new image is displayed. It was also cool to see the html and css tie in so closely with the d3 code. There was a lot of formatting, sizing, and alignment in css that allowed for a much cleaner experience while scrolling.

#### Reflections
Some reflections on the scrollytelling: I really enjoyed learning about scrollytelling and think it is an amazing tool for narratives. I definitely want to use it again. I wish I could have improved on the upward scrolling, where I wasn’t quite able to get a trigger for that direction, only down. Secondly, I would have liked to add a tooltip to the maps, as I mentioned before. It was very confusing for me to figure out the logic behind executing that. There are so many variables changing and I was never sure what part of the html was best to host the tooltip, and how I would change the source imagery in each step. On top of this, I was trying to use the illustrator svgs as the individual shapes that would change the tooltip images. I found out that it is much better to draw the svg in d3 (which is what the geojson and topojsons do so well) and then add functionality to it from there. I should have created the custom state borders in GIS, exported as geojson, and drawn an svg from that in d3. This will be a goal for my next scrolly / mapping experience!

### Process: Creative

#### Beginning stages
My first ideas in expressing the differences in maps overtime was through overlaying transparent images, adding while going forward in time and removing if going backward. I tried to even use colors at first in the transparent maps but it did not come out as I had imagined. There was too much going on with the borders changing, color values changing, and saturation changing. This is when I began to move towards a different system of showing the maps. Once I removed the transparency idea and decided to go with click-able arrows and then scrollytelling, I was relieved and excited to focus on each individual map and not have to worry as much about how they would look on top of each other with transparencies.

#### Logic with date ranges and visual representation
As you know, I was working with many different variables in each map. There were different types of borders, moving borders,  multiple fill colors, changing scale ranges, and, my favorite, figuring out symbology for those undefined states that had evidence of artwork origins. With all of these variables I had to be very organized and consistent when creating each map so I could show as accurate a representation of artwork origins as possible. When deciding my date ranges, I researched  historical land purchases, secessions, and times of war to base logical separations through time. This usually did not offer consistent amounts of artwork from each date range, but I felt that having meaningful separations in the date ranges told a better story than just separating by each decade or half century. This of course made it necessary to change the count ranges for each color value in a map so that the values would translate accurately through the progression. In this process, I would look at the totals and make groupings based on natural divides between the numbers.

#### Choices in borders and color
Another fun part of the process was figuring out the border changes and actually drawing them in illustrator. I spent a lot of time with historical maps to figure out the best representation for the beginning of each date range. This aspect coupled with the various border types made it even more of a challenge, especially when thinking about what border type should be more prominent if two types of borders share the same line. And then, adding color into all of this was another fun task. Recently, I have found many chloropleth maps to be in blues, greens, and purples, but I wanted to choose a color scheme that better reflected the feeling of moving west. I spent some time on color brewer to work with different sequences and eventually chose a scheme with a creamy, dusty, and rusty looking, evoking (for me at least) emotions of what colors you would see on one of the trials west.

#### Fonts and formatting
The last major aspect in the design for me was the font choices, alignment, and spacing between each section. This can be a very daunting task for me because there are so many directions to go, but once you start making decisions and experimenting, the visual themes start to come together. The first font choice I made was in the map legend. I used a helvetica style called neue haas grotesk and used the same font in my insights section. I like the straightforwardness of this font for some aspects, but I wanted to add a different font for the titles of each section that better reflected the time period of my story. I looked through google fonts and found a nice serif font called Libre Baskerville. I found this have enough character but not over-flourish so everything was still easily readable. Next was spacing all titles, subtitles, and content. This was when I was able to get my hands dirty with the html and css again, playing with margins, padding, different units of measurement for font sizes, and the syntax for isolating certain classes or ids in the html. Since I am still learning this, there were some areas that could have been more clean. For example, sometimes I would add an empty h4 in order to give more spacing between content if I couldn’t figure it out in css. All around, I was happy with the formatting and visual grouping given my limited experience with this beforehand.  

### Summary:
I feel that I’ve really learned something valuable in this project through the levels of complexity blending the technical and creative processes. It was very challenging but rewarding to see a product that expressed my ideas and hopefully offered others an enjoyable narrative with takeaway insights.
