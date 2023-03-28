// Get the Belly Button data endpoint
let bellybutton_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Read in JSON data and console log it
d3.json(bellybutton_data).then(function(data) {
  console.log(data);

// Trace for the Belly Button Data

let all_samples = data.samples;
let selection = all_samples[0];

let trace1 = {
  x: selection.sample_values.slice(0,10).reverse(),
  y: selection.otu_ids.slice(0,10).map(item => `${item} id`).reverse(),
  type: "bar",
  orientation: "h"
};

// Data trace array
let traceData = [trace1];

// Render the plot to the div tag with id "plot"
Plotly.newPlot("bar", traceData);
});