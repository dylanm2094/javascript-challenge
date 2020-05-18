// Get a reference to the table body
var tbody = d3.select("tbody");

data.forEach(ufoSighting => {
    var row = tbody.append("tr");
    row.append("td").text(ufoSighting.datetime);
    row.append("td").text(ufoSighting.city);
    row.append("td").text(ufoSighting.state);
    row.append("td").text(ufoSighting.country);
    row.append("td").text(ufoSighting.shape);
    row.append("td").text(ufoSighting.durationMinutes);
    row.append("td").text(ufoSighting.comments);
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var shapeOption = d3.select("#shapes");
  var cityOption = d3.select("#cities");
  var stateOption = d3.select("#states");
  var countryOption = d3.select("#countries");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var shapeValue = shapeOption.property("value");
  var cityValue = cityOption.property("value");
  var stateValue = stateOption.property("value");
  var countryValue = countryOption.property("value");
  


  var table = document.getElementById("ufo-table");

  for (i = 1; i <= data.length; i++) {
    var tr = table.rows[i];
    var date = tr.cells[0].textContent;
    var city = tr.cells[1].textContent;
    var state = tr.cells[2].textContent;
    var country = tr.cells[3].textContent;
    var shape = tr.cells[4].textContent;
    if (inputValue === "" & shapeValue === "--Select--" 
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === "--Select--" 
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === shape
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === "--Select--"
    & cityValue === city & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === "--Select--"
    & cityValue === "--Select--" & stateValue === state 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === "--Select--"
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === country) {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === shape
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === "--Select--"
    & cityValue === city & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === "--Select--"
    & cityValue === "--Select--" & stateValue === state 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === "--Select--"
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === country) {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === shape
    & cityValue === city & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === shape
    & cityValue === "--Select--" & stateValue === state 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === shape
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === country) {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === "--Select--"
    & cityValue === city & stateValue === state 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === "--Select--"
    & cityValue === city & stateValue === "--Select--" 
    & countryValue === country) {
      tr.style.display = "";
    } else if (inputValue === "" & shapeValue === "--Select--"
    & cityValue === "--Select--" & stateValue === state 
    & countryValue === country) {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === shape
    & cityValue === city & stateValue === "--Select--" 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === shape
    & cityValue === "--Select--" & stateValue === state 
    & countryValue === "--Select--") {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === shape
    & cityValue === "--Select--" & stateValue === "--Select--" 
    & countryValue === country) {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === "--Select--"
    & cityValue === city & stateValue === state 
    & countryValue === country) {
      tr.style.display = "";
    } else if (inputValue === date & shapeValue === shape
    & cityValue === city & stateValue === state 
    & countryValue === country) {
      tr.style.display = "";
    } else {
      tr.style.display = "none";
    }
  }
};


var uniqueShapes = []
var uniqueCities = []
var uniqueStates = []
var uniqueCountries = []
var sel_shps = document.getElementById('shapes');
var sel_city = document.getElementById('cities');
var sel_state = document.getElementById('states');
var sel_ctry = document.getElementById('countries');

// create new option element
var opt = document.createElement('option');

data.forEach(ufoSighting => {
  if(uniqueShapes.indexOf(ufoSighting.shape) === -1) {
    uniqueShapes.push(ufoSighting.shape);
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(ufoSighting.shape));
    opt.value = ufoSighting.shape;
    sel_shps.appendChild(opt); 
  }
  if(uniqueCities.indexOf(ufoSighting.city) === -1) {
    uniqueCities.push(ufoSighting.city);
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(ufoSighting.city));
    opt.value = ufoSighting.city;
    sel_city.appendChild(opt); 
  }
  if(uniqueStates.indexOf(ufoSighting.state) === -1) {
    uniqueStates.push(ufoSighting.state);
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(ufoSighting.state));
    opt.value = ufoSighting.state;
    sel_state.appendChild(opt); 
  }
  if(uniqueCountries.indexOf(ufoSighting.country) === -1) {
    uniqueCountries.push(ufoSighting.country);
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(ufoSighting.country));
    opt.value = ufoSighting.country;
    sel_ctry.appendChild(opt); 
  }
});

var reset = d3.select("#reset-btn");

reset.on("click", function() {
  document.getElementById("my-form").reset();
  runEnter();
});