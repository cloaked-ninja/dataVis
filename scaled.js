//demo:
https://jsbin.com/xurekuyaso/edit?html,js,output
//data
var dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88]
];

//scaling
var h = 100;
var w = 600;
var padding = 20;

//dynamic scales for data
//x scale
var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
        return d[0];
    })]) //max of first #
    //.range([0, w]);
    .range([padding, w - padding]);

//y scale
var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
        return d[1];
    })]) //max of second
    //.range([0, h]);
    .range([h - padding, padding]);

//set up
var svg = d3.select("body")
    .append("svg")
    .attr("height", h)
    .attr("width", w);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
    return xScale(d[0]);
})
   .attr("cy", function(d){
    return yScale(d[1]);
})
     .attr("r", function(d) {
    return Math.sqrt(h - d[1]);
})
   .attr("fill", "red");

