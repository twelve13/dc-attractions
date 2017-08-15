var chart = d3.select(".chart");

//create the svg viewport
var svg = chart.append("svg");

svg.attr("width", 1000).attr("height", 500);

//y axis represents size in acres
var y = d3.scaleLog().domain([0.6, 190]).range([400, 20]);

//x axis represents date opened to public
var x = d3.scaleLinear().domain([1880, 2016]).range([0, 900]);

//radius correlates to annual visitors
//since area = pi*r*r, need to take square root to not inflate the data
var r = d3.scaleSqrt().domain([1.3, 7.9]).range([10, 60]);

// svg.append("circle").attr("fill", "red").attr("r", r(7.9)).attr("cx", x(1922)).attr("cy", y(0.6));
// svg.append("circle").attr("fill", "orange").attr("r", r(7.5)).attr("cx", x(1976)).attr("cy", y(3.7));
// svg.append("circle").attr("fill", "gold").attr("r", r(7.1)).attr("cx", x(1910)).attr("cy", y(34.6));

var data = [
	{fill: "red", radius: r(7.9), xAxis: x(1922), yAxis: y(0.6), name: "Lincoln Memorial", visitors: "7.9 million"},
	{fill: "orange", radius: r(7.5), xAxis: x(1976), yAxis: y(3.7), name: "National Air and Space Museum", visitors: "7.5 million"},
	{fill: "gold", radius: r(7.1), xAxis: x(1910), yAxis: y(34.6), name: "National Museum of Natural History", visitors: "7.1 million"},
	{fill: "limegreen", radius: r(5.3), xAxis: x(1982), yAxis: y(2), name: "Vietnam Veterans Memorial", visitors: "5.3 million"},
	{fill: "green", radius: r(4.9), xAxis: x(2004), yAxis: y(7.4), name: "World War II Memorial", visitors: "4.9 million"},
	{fill: "aqua", radius: r(4.4), xAxis: x(1997), yAxis: y(7.5),  name: "FDR Memorial", visitors: "4.4 million"},
	{fill: "blue", radius: r(4.1), xAxis: x(1995), yAxis: y(2.2), name: "Korean War Veterans Memorial", visitors: "4.1 million"},
	{fill: "purple", radius: r(3.8), xAxis: x(1964), yAxis: y(6.9), name: "National Museum of American History", visitors: "3.8 milion"},
	{fill: "pink", radius: r(3.6), xAxis: x(2011), yAxis: y(4), name: "Martin Luther King, Jr. Memorial", visitors: "3.6 million"},
	{fill: "brown", radius: r(3.4), xAxis: x(1943), yAxis: y(1.8), name: "Thomas Jefferson Memorial", visitors: "3.4 million"},
	{fill: "gray", radius: r(2.7), xAxis: x(1889), yAxis: y(163), name: "National Zoological Park", visitors: "2.7 million"},
	{fill: "black", radius: r(1.3), xAxis: x(2016), yAxis: y(8.2), name: "National Museum of African American History & Culture", visitors: "1.3 million"}
];


// for(var i=0; i<data.length; i++){
// 	svg.append("circle").attr("fill", data[i]["fill"]).attr("r", data[i]["radius"]).attr("cx", data[i]["xAxis"]).attr("cy", data[i]["yAxis"]);
// }

var circle = svg.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d) {return "translate("+d.xAxis+","+d.yAxis+")";});

circle.append("circle")
	.attr("fill", function(d) {return d.fill;})
	.attr("r", function(d) {return d.radius;})

circle.append("svg:title")
	.text(function(d) {return (`${d.name}, ${d.visitors}`)})


//create the scale to use for the x axis
var axisScale = d3.scaleLinear().domain([1880, 2016]).range([0, 900]);

//create the axis
var xAxis = d3.axisBottom()
	.scale(axisScale);

//create an svg group element for the axis elements and call the xAxis function
var xAxisGroup = svg.append("g").call(xAxis);

var yAxisScale = d3.scaleLog().domain([0.6, 190]).range([20, 400]);

var yAxis = d3.axisRight()
	.scale(yAxisScale);

var yAxisGroup = svg.append("g").call(yAxis);

