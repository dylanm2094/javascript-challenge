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
  var shapeOption = d3.select("#exampleFormControlSelect1");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var shapeValue = shapeOption.property("value");
  console.log(shapeValue)


  var table = document.getElementById("ufo-table");

  for (i = 1; i <= data.length; i++) {
    var tr = table.rows[i];
    var date = tr.cells[0].textContent;
    var shape = tr.cells[4].textContent;
    if (inputValue === "" & shapeValue === "--Select--") {
      tr.style.display = "";
    } else if (date === inputValue & shapeValue === "--Select--") {
      tr.style.display = "";
    } else if (date === inputValue & shape === shapeValue) {
      tr.style.display = "";
    } else if (inputValue === "" & shape === shapeValue) {
      tr.style.display = "";
    } else {
      tr.style.display = "none";
    }
  }
};


var uniqueShapes = []
var sel = document.getElementById('exampleFormControlSelect1');

// create new option element
var opt = document.createElement('option');

data.forEach(ufoSighting => {
  if(uniqueShapes.indexOf(ufoSighting.shape) === -1) {
    uniqueShapes.push(ufoSighting.shape);
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(ufoSighting.shape));
    opt.value = ufoSighting.shape;
    sel.appendChild(opt); 
  }
});

var reset = d3.select("#reset-btn");

reset.on("click", function() {
  document.getElementById("my-form").reset();
  runEnter()
});