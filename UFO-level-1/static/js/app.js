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

var tr = d3.select("tr");

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

  tr.remove();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = data.filter(ufoSighting => ufoSighting.datetime === inputValue);

  filteredData.forEach(ufoSighting => {
    var row = tbody.append("tr");
    row.append("td").text(ufoSighting.datetime);
    row.append("td").text(ufoSighting.city);
    row.append("td").text(ufoSighting.state);
    row.append("td").text(ufoSighting.country);
    row.append("td").text(ufoSighting.shape);
    row.append("td").text(ufoSighting.durationMinutes);
    row.append("td").text(ufoSighting.comments);
    });
};