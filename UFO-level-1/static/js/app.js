// from data.js
var tableData = data;

// YOUR CODE HERE!

function tabulate(data, columns) {
	var	tbody = d3.select('tbody')

	console.log(data)
	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	  .text(function (d) { return d.value; });

      // return table
};

// use function to display data from data.js in a table on index.html page 
tabulate(data, ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']);

// get the filter table to work!
d3.select("#filter-btn")
.on("click", buttonClick);

function buttonClick() {
	var selection = d3.select("#datetime").node().value
	console.log(selection.length);

	d3.select('tbody').html('')

    // if entered date doesn't have a match, display entire empty table (table heading only)
	if( selection.length == 0 ) {
   		tabulate(data, ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']);
	};

    // if there's a match, display record/s from the delection
	var newData = data.filter(function (el) {
  		return el.datetime == selection
	});
	console.log(newData);
	tabulate(newData, ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']);
};
