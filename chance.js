var dataset = [{
        "c1": "BV",
        "c2": "BVF",
        "c3": "DFF",
        "c4": "C001455",
        "c5": 25
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "INSP",
        "c4": "CR950-K201-XXX",
        "c5": 26
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "INSP",
        "c4": "CRA-C500",
        "c5": 26
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "Insp",
        "c4": "R-CR1411",
        "c5": 2
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "Insp",
        "c4": "R-CR2611",
        "c5": 1
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "Insp",
        "c4": "R-CR3622",
        "c5": 1
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "Insp",
        "c4": "R-CRA-B4",
        "c5": 9
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "Insp",
        "c4": "R-CRA-B5",
        "c5": 1
    },
    {
        "c1": "CC",
        "c2": "INSP",
        "c3": "Insp",
        "c4": "R-CRA-C31",
        "c5": 1
    }
];

var w = 500;
var h = 50;
var barPadding = 1;

// set up canvas
var svg = d3.select("body")
    .append("svg")
    .attr("height", h)
    .attr("width", w);

//set up svg data

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return i * (w / dataset.length);
    })
    .attr("y", function(d) {
        return (h - d.c5);
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d) {
        return d.c5; //just the data value
    })
    .attr("fill", function(d) {
        return "rgb(0,0, " + (d.c5 * 10) + ")"
    })



svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d.c4;
    })
    .attr("x", function(d, i) {
        return i * (w / dataset.length);
    })
    .attr("y", function(d) {
        return (h - d.c5);
    })
    .attr("font-size", 10);
