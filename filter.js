// Function to initialize the filter for a table
function initializeFilter(tableId) {
    const table = document.getElementById(tableId);
    const headerRow = table.querySelector('thead tr');
    const headerCells = headerRow.querySelectorAll('th');

    // Create input fields for each column
    headerCells.forEach((cell, index) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Filter...');
        input.addEventListener('input', () => filterTable(tableId, index, input.value.toLowerCase()));
        cell.appendChild(input);
    });
}

// Function to filter the table based on input values
function filterTable(tableId, columnIndex, filterValue) {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const cellValue = row.querySelectorAll('td')[columnIndex].textContent.toLowerCase();
        if (cellValue.includes(filterValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Initialize filter for each table
initializeFilter('table1');
initializeFilter('table2');
initializeFilter('table3');
