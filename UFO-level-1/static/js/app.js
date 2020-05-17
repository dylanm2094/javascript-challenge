// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

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