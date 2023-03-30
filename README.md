# belly-button-challenge
Module 14 Challenge

Researchers at North Carolina State University undertook a study into the bacteria and arachaea that can be found in the belly buttons of humans and published their research findings in 2012. The dataset compiled during this research process will be referred to as the 'Belly Button Biodiversity dataset'.

Using the Belly Button Biodiversity dataset, we have created an interactive, web-based dashboard which allows its users to analyse the dataset on a sample by sample (or individual by individual basis). The interactive dashboard can be found at the following url: https://oli124.github.io/belly-button-challenge/

This dashboard was created using the following, all of which can be found in the projects repository (https://github.com/oli124/belly-button-challenge.git):
1. The Belly Button Biodiversity dataset ('samples.json')
    - (Provided by: see "Citation_1" below)
2. A HTML file ('index.html')
    - (Provided by: UWA Data Analytics personnel)
3. A JavaScript file ('app.js') - locatoin: static/js/app.js
    - Created by: Oliver King
4. This readme file ('README.md')
    - Created by: Oliver King

The JavaScript libraries used for the creation of this dashboard include:
1. d3.js - to read in JSON data and select HTML features
2. plotly.js - to create h-bar and bubble charts

app.js has been split into functions so that the dashboard:
1. shows data from the first sample in the dataset when first opened (through the init() function), and
2. shows data from the sample selected in the dropdown list (through the optionChanged() funciton)

If a user wants to see the results for a certain individual (or student), they can select the individual's 'Test Subject ID No.' from the dropdown list, located in a grey box on the left-hand side of their screen (below the title). Selecting a different ID from the dropdown list will display:
1. The 'Demographic Info' for that individual;
2. The top 10 most abundant bacteria and arachaea (aka. operational taxonomic units or OTUs) for that individual, using a horizontal bar chart, and;
3. A visual representation of the abundance of the various OTUs found on the individual, using a bubble chart (where the size of the bubble indicates the abundance of the OTU).

"Citation_1": Hulcr, J., Latimer, A. M., Henley, J. B., Rountree, N. R.**, Fierer, N., Lucky, A., Lowman, M. D., Dunn RR 2012. A jungle in there: bacteria in belly buttons are highly diverse, but predictable. PLoS ONE 7(11): e47712. doi:10.1371/journal.pone.0047712