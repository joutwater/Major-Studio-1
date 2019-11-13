// Datasets
// FIP codes
// https://www2.census.gov/geo/docs/reference/codes/files/national_county.txt
// https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code
//
// Unemployment rates
// https://www.bls.gov/lau/#tables

// https://bl.ocks.org/mbostock/4060606

//states are in alphabetical order
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var path = d3.geoPath();

var unemployment = d3.map();

var x = d3.scaleLinear()
    .domain([1, 10])
    .rangeRound([600, 960]);

// var color = d3.scaleThreshold()
//     .domain(d3.range(0,20))
//     .range(d3.schemeOranges[9]);

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
// Create element for legend
var g = svg.append("g")
    .attr("class", "key")
    .attr("transform", "translate(0,40)");

// Legend color scale
// g.selectAll("rect")
//   .data(color.range().map(function(d) {
//       d = color.invertExtent(d);
//       if (d[0] == null) d[0] = x.domain()[0];
//       if (d[1] == null) d[1] = x.domain()[1];
//       return d;
//     }))
//   .enter().append("rect")
//     .attr("height", 8)
//     .attr("x", function(d) { return x(d[0]); })
//     .attr("width", function(d) { return x(d[1]) - x(d[0]); })
//     .attr("fill", function(d) { return color(d[0]); });

// Legend title - "Number of Artworks (1862-1914)"
g.append("text")
    .attr("class", "caption")
    .attr("x", x.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text("Cumulative : 8000 American Artworks (1783-1945)");

// Legend markings - 2%, 3%, etc.
// g.call(d3.axisBottom(x)
//     .tickSize(13)
//     // .tickFormat(function(x, i) { return i ? x : x + "%"; })
//     .tickValues(color.domain()))
//     .select(".domain")
//     .remove();

d3.queue()
    .defer(d3.json, "https://d3js.org/us-10m.v1.json")
    // .defer(d3.tsv, "unemployment.tsv", function(d) { unemployment.set(d.id, +d.rate); })
    .defer(d3.tsv, "1862-1914.tsv", function(d) {unemployment.set(d.id, +d.rate); })
    .await(ready);

function ready(error, us) {
  if (error) throw error;

  svg.append("g")
      .attr("class", "counties")
    .selectAll("path")
    // .data(topojson.feature(us, us.objects.counties).features)
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
      .attr("fill", function(d) {
        // console.log(d);
        d.rate = unemployment.get(d.id)
        if(d.rate==0){
          return color1
        //   (d.rate = unemployment.get(d.id));
          
        }else if(d.rate>0 && d.rate<=15){
          return color2
        //   (d.rate = unemployment.get(d.id));
          
        }else if(d.rate>15 && d.rate<=45){
          return color3
        //   (d.rate = unemployment.get(d.id));
          
        }else if(d.rate>45 && d.rate<=170){
          return color4
        //   (d.rate = unemployment.get(d.id));
          
        }else if(d.rate>170 && d.rate<=300){
          return color5
        //   (d.rate = unemployment.get(d.id));
          
        }else if(d.rate>300 && d.rate<=1000){
          return color6
        //   (d.rate = unemployment.get(d.id));
        
        }else if(d.rate==2112){
          return color7
        //   (d.rate = unemployment.get(d.id));
        }
      })
        
        
    //     return color(d.rate = unemployment.get(d.id));
    //   })
      .attr("d", path)
    .append("title") // Tooltip
      .text(function(d) { return d.rate; });

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "states")
      .attr("d", path);
}