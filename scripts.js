function filterTable() {
  // Get the table and the dropdowns
  var table = document.getElementById('table1');
  var dropdowns = ['mitreFilter', 'otherFilter', 'focusFilter', 'counterFilter', 'offensFilter', 'targFilter', 'realToyFilter', 'socialFilter', 'benefitFilter', 'costFilter', 'baselineFilter', 'codeFilter'];

  // Loop through the table rows
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var showRow = true;

    // Loop through the dropdowns
    for (var j = 0; j < dropdowns.length; j++) {
      var dropdown = document.getElementById(dropdowns[j]);
      var cell = row.cells[j + 2];
      var value = cell.textContent || cell.innerText;

      // If the dropdown has a value and the table cell doesn't match, hide the row
      if (dropdown.value && dropdown.value !== value) {
        showRow = false;
        break;
      }
    }

    // Show or hide the row
    row.style.display = showRow ? '' : 'none';
  }
}

// Add an event listener to each dropdown
var dropdowns = ['mitreFilter', 'otherFilter', 'focusFilter', 'counterFilter', 'offensFilter', 'targFilter', 'realToyFilter', 'socialFilter', 'benefitFilter', 'costFilter', 'baselineFilter', 'codeFilter'];
for (var i = 0; i < dropdowns.length; i++) {
  document.getElementById(dropdowns[i]).addEventListener('change', filterTable);
}
