// Datasets
// FIP codes
// https://www2.census.gov/geo/docs/reference/codes/files/national_county.txt
// https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code

// https://bl.ocks.org/mbostock/4060606
// https://bl.ocks.org/chucklam/f628765b873d707a3d0e44ffc78deab8

//states are in alphabetical order

// creating object list of image links with its respective state ID
var images = {10:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/14341/44171/restricted"},
              12:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/319026/679111/restricted"},
              13:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/504694/1026215/restricted"},
              15:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/313842/666803/restricted"},
              16:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/501204/1023441/main-image"},
              17:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/13763/42442/restricted"},
              18:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503471/1405703/restricted"},
              19:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/319051/676520/main-image"},
              20:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/502604/1899060/restricted"},
              21:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/3740/41072/main-image"},
              22:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/3835/18835/main-image"},
              23:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/14198/34391/restricted"},
              24:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/2672/46295/main-image"},
              25:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/711548/1644433/restricted"},
              26:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/19722/19698/restricted"},
              27:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/4995/16149/main-image"},
              28:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/20144/44092/restricted"},
              29:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/14075/23546/main-image"},
              30:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/318354/667698/main-image"},
              31:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/319102/676513/main-image"},
              33:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/8159/1516965/main-image"},
              34:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/4022/4662/main-image"},
              35:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/319201/676919/main-image"},
              36:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/39/4360/main-image"},
              37:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/21284/1395930/main-image"},
              38:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/319139/679154/restricted"},
              39:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/5154/27348/restricted"},
              40:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/766353/1744198/main-image"},
              41:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/310689/654500/main-image"},
              42:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/10024/10945/main-image"},
              44:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/3124/16358/restricted"},
              45:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/761604/1811375/main-image"},
              46:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/717548/1836219/restricted"},
              47:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/7798/8229/main-image"},
              48:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503458/1019215/restricted"},
              50:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/2544/48909/main-image"},
              51:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/13907/32229/main-image"},
              53:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/319097/678817/restricted"},
              54:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/9337/43645/main-image"},
              55:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/319100/678187/main-image"},
              56:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/21186/49517/main-image"}
              
            };

//creating div for tooltip with styles            
var tooltip = d3.select("body")
.append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("width","60px")                  
    .style("height","28px")                 
    .style("padding","2px")             
    .style("font","0px sans-serif")
    // .style("border","0px")      
    // .style("border-radius","8px")  
    // .style("background", "lightsteelblue")
    .style("visibility", "hidden");
            

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var path = d3.geoPath();

var artwork = d3.map();

// var x = d3.scaleLinear()
//     .domain([1, 10])
//     .rangeRound([600, 960]);

//defining colors for fill
var color1 = "#f3f3f3";
var color2 = "#feedde";
var color3 = "#fdbe85";
var color4 = "#fd8d3c";
var color5 = "#e6550d";
var color6 = "#a63603";
var color7 = "#651f03"
    
// var minColor = "#ffdb00" , maxColor = "#000000";
// var color = d3.scaleLinear()
//     .domain([0, 868])
//     .range([minColor, maxColor]);

// preparing data
d3.queue()
    .defer(d3.json, "https://d3js.org/us-10m.v1.json")
    // .defer(d3.tsv, "unemployment.tsv", function(d) { unemployment.set(d.id, +d.rate); })
    .defer(d3.tsv, "USTEST.tsv", function(d) {artwork.set(d.id, +d.rate); })

    .await(ready);

//function to actively make changes to the dom
//(all previous code is prep and this function puts everything in action)
function ready(error, us) {
  if (error) throw error;


  svg.append("g")
      .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
    //creating fill color for different values
      .attr("fill", function(d) {
        
        // color scale
        d.rate = artwork.get(d.id)
        if(d.rate==0){
          return color1
          
        }else if(d.rate>0 && d.rate<=15){
          return color2
          
        }else if(d.rate>15 && d.rate<=45){
          return color3
          
        }else if(d.rate>45 && d.rate<=170){
          return color4
          
        }else if(d.rate>170 && d.rate<=300){
          return color5
          
        }else if(d.rate>300 && d.rate<=1000){
          return color6
        
        }else if(d.rate==2112){
          return color7
        }
      })
        
      .attr("d", path)
    // .append("title") // Tooltip for displaying artwork count only
    // .text(function(d) { return d.rate; });
    
            //make tooltip visible on mouseover and designate data sources for display of image  
            .on("mouseover", function(d){
			       console.log(d);
	      // 	console.log(images[d.id]);
            tooltip.text(d.id);
            tooltip.append("img")
                    .attr("src",images[d.id].link)
                    // .attr("x", -100)
                    // .attr("y", -8)
                    .attr("width","100px")                  
                    .attr("height","relative"); 
            tooltip.style("visibility", "visible");
        })
        
        //making tooltip positioned by mouse as you move across state
        .on("mousemove", function(){
			return tooltip
			.style("top", (event.pageY-10)+"px")
			.style("left",(event.pageX+10)+"px")
			;})
			
			  //turning off the tooltip when leaving a state
        .on("mouseout", function(){
			return tooltip
			.style("visibility", "hidden");
			});
      
  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "states")
      .attr("d", path)
      
  //     // make tooltip visible on mouseover
  //     .on('mouseover', function (d, i) {
  //   console.log("mouseover on", this);
  //     d3.select(this)
  //     .transition()
  //     .duration(100)
  //     .stateImages(function(d) { return d.stateImages});
 
  // })
  
  // //remove the tooltip on mouseout
  // .on('mouseout', function (d, i) {
  // console.log("mouseout", this);
  // d3.select(this)
  //   .transition()
  //   .duration(100)
  //   .attr('r', 2.5)
  //   .attr('stroke', 'none');
  // div.html('')
  //   .style("opacity", 0)
  //   .style("left", "0px")
  //   .style("top", "0px");
  // });
      
  
      
  // svg.selectAll('.stateImages')
  //   .data(topojson.feature(us, us.objects.states).features)
  //   .enter().append("image")
  //       .attr("xlink:href", (d) => images[d.id]['link'])
  //       .attr("x", "550")
  //       .attr("y", "520")
  //       .attr("width", "100")
  //       .attr("height", "100");

    
  //   svg.selectAll('.stateImages').raise();
}