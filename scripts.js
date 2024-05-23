document.addEventListener('DOMContentLoaded', function() {
    const filterTables = (columnIndex, value) => {
        ['table1', 'table2', 'table3'].forEach(tableId => {
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
        });
    };

    const createFilter = (tableId, columnIndex) => {
        const table = document.getElementById(tableId);
        const header = table.getElementsByTagName('thead')[0];
        const filterRow = document.createElement('tr');
        const columnCount = table.getElementsByTagName('th').length;
        for (let i = 0; i < columnCount; i++) {
            const filterCell = document.createElement('th');
            if (i === columnIndex) {
                const select = document.createElement('select');
                const uniqueValues = new Set();
                uniqueValues.add('');
                const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
                for (const row of rows) {
                    uniqueValues.add(row.getElementsByTagName('td')[i - 1].textContent);
                }
                for (const value of uniqueValues) {
                    const option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;
                    select.appendChild(option);
                }
                select.addEventListener('change', (e) => {
                    filterTables(columnIndex, e.target.value);
                });
                filterCell.appendChild(select);
            }
            filterRow.appendChild(filterCell);
        }
        header.appendChild(filterRow);
    };

    const columnsToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
