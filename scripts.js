document.addEventListener('DOMContentLoaded', function() {
    const filterTables = (tableId, columnIndex, value) => {
        const table = document.getElementById(tableId);
        const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        for (const row of rows) {
            const cell = row.getElementsByTagName('td')[columnIndex - 1];
            if (value === '' || cell.textContent === value) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    };

    const createFilter = (tableId, columnIndex) => {
        const table = document.getElementById(tableId);
        const filterRow = document.getElementById(`filters${tableId.slice(-1)}`);
        if (!filterRow) return; // Check if the filter row exists

        const filterCell = document.createElement('th');
        const select = document.createElement('select');
        const uniqueValues = new Set();
        uniqueValues.add('');
        const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        for (const row of rows) {
            uniqueValues.add(row.getElementsByTagName('td')[columnIndex - 1].textContent);
        }
        for (const value of uniqueValues) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            select.appendChild(option);
        }
        select.addEventListener('change', (e) => {
            filterTables(tableId, columnIndex, e.target.value
