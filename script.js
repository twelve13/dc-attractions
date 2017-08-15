var chart = d3.select(".chart");
var svg = d3.select(".chart").append("svg");

svg.attr("width", 1000).attr("height", 400);

//y axis represents size in acres
var y = d3.scaleLinear().domain([0.6, 190]).range([250, 0]);

//x axis represents date opened to public
var x = d3.scaleLinear().domain([1880, 2016]).range([0, 900]);

//radius correlates to annual visitors
//since area = pi*r*r, need to take square root to not inflate the data
var r = d3.scaleSqrt().domain([1.3, 7.9]).range([10, 60]);

// svg.append("circle").attr("fill", "red").attr("r", r(7.9)).attr("cx", x(1922)).attr("cy", y(0.6));
// svg.append("circle").attr("fill", "orange").attr("r", r(7.5)).attr("cx", x(1976)).attr("cy", y(3.7));
// svg.append("circle").attr("fill", "gold").attr("r", r(7.1)).attr("cx", x(1910)).attr("cy", y(34.6));

var data = [
	{fill: "red", radius: r(7.9), xAxis: x(1922), yAxis: y(0.6)},
	{fill: "orange", radius: r(7.5), xAxis: x(1976), yAxis: y(3.7)},
	{fill: "gold", radius: r(7.1), xAxis: x(1910), yAxis: y(34.6)},
	{fill: "limegreen", radius: r(5.3), xAxis: x(1982), yAxis: y(2)},
	{fill: "green", radius: r(4.9), xAxis: x(2004), yAxis: y(7.4)},
	{fill: "aqua", radius: r(4.4), xAxis: x(1997), yAxis: y(7.5)},
	{fill: "blue", radius: r(4.1), xAxis: x(1995), yAxis: y(2.2)},
	{fill: "purple", radius: r(3.8), xAxis: x(1964), yAxis: y(6.9)},
	{fill: "pink", radius: r(3.6), xAxis: x(2011), yAxis: y(4)},
	{fill: "brown", radius: r(3.4), xAxis: x(1943), yAxis: y(1.8)},
	{fill: "gray", radius: r(2.7), xAxis: x(1889), yAxis: y(163)},
	{fill: "black", radius: r(1.3), xAxis: x(2016), yAxis: y(8.2)}
];

for(var i=0; i<data.length; i++){
	svg.append("circle").attr("fill", data[i]["fill"]).attr("r", data[i]["radius"]).attr("cx", data[i]["xAxis"]).attr("cy", data[i]["yAxis"]);
}
