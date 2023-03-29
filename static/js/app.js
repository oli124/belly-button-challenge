// Get the Belly Button data endpoint
let bellybutton_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function createPlot(sample){
// Read in JSON data and console log it
d3.json(bellybutton_data).then(function(data) {
  console.log(data);

// Trace for the Belly Button Data

let allSamples = data.samples;
let selection = allSamples.filter(sampleId => sampleId.id == sample);
let selectionOne = selection[0];

let trace1 = {
  x: selectionOne.sample_values.slice(0,10).reverse(),
  y: selectionOne.otu_ids.slice(0,10).map(item => `${item} id`).reverse(),
  text: selectionOne.otu_labels.slice(0,10).reverse(),
  type: "bar",
  orientation: "h"
};

let trace2 = {
  x: selectionOne.otu_ids,
  y: selectionOne.sample_values,
  text: selectionOne.otu_labels,
  mode: "markers",
  marker: {
    color: [selectionOne.otu_ids],
    // size: [selectionOne.sample_values]
    size: [100,90,80,70,60,50,40,30,20,10]
  }
};


let layout2 = {
  height: 400,
  width: 1000
};

// Data trace array
let traceDataOne = [trace1];
let traceDataTwo = [trace2];

// Render the plot to the div tag with id "plot"
Plotly.newPlot("bar", traceDataOne);
Plotly.newPlot("bubble", traceDataTwo, layout2);
});
}

function init(){

  d3.json(bellybutton_data).then(function(data) {
   
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  let all_names = data.names;
  let value = all_names[0];

  for (i=0; i<all_names.length; i++){
    dropdownMenu.append("option")
    .text(all_names[i])
    .property("value", all_names[i]);

  };
  createPlot(value);
  demographicInfo(value);
  
});
}

// This function is called when a dropdown menu item is selected
function optionChanged(newSample) {
  createPlot(newSample);
  demographicInfo(newSample);
}

init();

function demographicInfo(sample){

  d3.json(bellybutton_data).then(function(data) {

  let metaData = data.metadata;
  let selection = metaData.filter(sampleId => sampleId.id == sample);
  let selectionOne = selection[0];

  let metaInput = d3.select("#sample-metadata");
  metaInput.html("");

  for (key in selectionOne){
    metaInput.append("h6")
    .text(`${key}:${selectionOne[key]}`);
  };

  });
}