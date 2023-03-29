// Get the Belly Button data endpoint
let bellybutton_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Create function that generates h-bar and bubble plots
function createPlot(sample){
// Read in JSON data and console log it
d3.json(bellybutton_data).then(function(data) {
  console.log(data);

// Create variables that trace data points to be used
let allSamples = data.samples;
// Use filter to set sample id
let selection = allSamples.filter(sampleId => sampleId.id == sample);
let selectionOne = selection[0];

// Create trace for h-bar chart, using only first 10 data points of specified array
let trace1 = {
  x: selectionOne.sample_values.slice(0,10).reverse(),
  y: selectionOne.otu_ids.slice(0,10).map(item => `${item} id`).reverse(),
  text: selectionOne.otu_labels.slice(0,10).reverse(),
  type: "bar",
  orientation: "h"
};

// Create variables for bubble chart formatting
let sampleVals = selectionOne.sample_values;
let otuIds = selectionOne.otu_ids;

// Create trace for bubble chart
let trace2 = {
  x: selectionOne.otu_ids,
  y: selectionOne.sample_values,
  text: selectionOne.otu_labels,
  mode: "markers",
  marker: {
    color: otuIds,
    size: sampleVals,
    sizeref: 1.5
  }
};

// Set size of bubble chart
let layout2 = {
  height: 400,
  width: 1000
};

// Data trace array
let traceDataOne = [trace1];
let traceDataTwo = [trace2];

// Render the plots to theier relevant div tags
Plotly.newPlot("bar", traceDataOne);
Plotly.newPlot("bubble", traceDataTwo, layout2);
});
}

// Create function that establishes initial sample id and chart outputs
function init(){
  // Read in JSON data
  d3.json(bellybutton_data).then(function(data) {
   
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  
  // Create variables that trace data points to be used
  let all_names = data.names;
  let value = all_names[0];
  
  // Run for loop to append sample id's to dropdown list
  for (i=0; i<all_names.length; i++){
    dropdownMenu.append("option")
    .text(all_names[i])
    .property("value", all_names[i]);

  };

  // Create function that generates data for demographic info window
  function demographicInfo(sample){
    // Read in JSON data
    d3.json(bellybutton_data).then(function(data) {
    
    // Create variables that trace data points to be used
    let metaData = data.metadata;
    // Use filter to set sample id
    let selection = metaData.filter(sampleId => sampleId.id == sample);
    let selectionOne = selection[0];
  
    // Select and clear contents of demographic info window (prior to repopulating)
    let metaInput = d3.select("#sample-metadata");
    metaInput.html("");
      
    // Run for loop that appends key and object datapoints of selected sample id
    for (key in selectionOne){
      metaInput.append("h6")
      .text(`${key}: ${selectionOne[key]}`);
    };
  
    });
  }

  // Generate plots and demographic info window with the first sample id in the dataset
  createPlot(value);
  demographicInfo(value);
  
});
}

// Call init function so that dashboard presents data when first visited
init();

// Create function that is called when a new dropdown menu item is selected
function optionChanged(newSample) {
  createPlot(newSample);
  demographicInfo(newSample);
}


