// Datasets
// FIP codes
// https://www2.census.gov/geo/docs/reference/codes/files/national_county.txt
// https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code

// https://bl.ocks.org/mbostock/4060606
// https://bl.ocks.org/chucklam/f628765b873d707a3d0e44ffc78deab8

//states are in alphabetical order
var images = {1:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/310689/654500/main-image"},
              2:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/310688/673562/main-image"},
              4:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/310690/654501/main-image"},
              5:{link: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/310691/678103/main-image"}
            };
            

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var path = d3.geoPath();

var artwork = d3.map();

var x = d3.scaleLinear()
    .domain([1, 10])
    .rangeRound([600, 960]);

var color1 = "#f3f3f3";
var color2 = "#feedde";
var color3 = "#fdbe85";
var color4 = "#fd8d3c";
var color5 = "#e6550d";
var color6 = "#a63603";
var color7 = "#651f03"
    
var minColor = "#ffdb00" , maxColor = "#000000";
var color = d3.scaleLinear()
    .domain([0, 868])
    .range([minColor, maxColor]);

// preparing data
d3.queue()
    .defer(d3.json, "https://d3js.org/us-10m.v1.json")
    // .defer(d3.tsv, "unemployment.tsv", function(d) { unemployment.set(d.id, +d.rate); })
    .defer(d3.tsv, "1862-1914.tsv", function(d) {artwork.set(d.id, +d.rate); })

    .await(ready);

function ready(error, us) {
  if (error) throw error;

//creating fill color for different values
  svg.append("g")
      .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
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
    .append("title") // Tooltip
      .text(function(d) { return d.rate; });
      
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
      
  
      
  svg.selectAll('.stateImages')
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("image")
        .attr("xlink:href", (d) => images[2]['link'])
        .attr("x", "550")
        .attr("y", "520")
        .attr("width", "100")
        .attr("height", "100");

    
    svg.selectAll('.stateImages').raise();
}