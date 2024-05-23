document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById("dataTable");
    const headers = table.querySelectorAll("th");
    headers.forEach((header, index) => {
        const select = header.querySelector("select");
        populateDropdown(select, index);
    });
});

function populateDropdown(select, columnIndex) {
    const table = document.getElementById("dataTable");
    const rows = table.querySelectorAll("tbody tr");
    const uniqueValues = new Set();
    rows.forEach(row => {
        const cell = row.querySelectorAll("td")[columnIndex];
        uniqueValues.add(cell.textContent.trim());
    });
    uniqueValues.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

function filterTable(columnIndex) {
    const table = document.getElementById("dataTable");
    const rows = table.querySelectorAll("tbody tr");
    const selects = table.querySelectorAll("thead select");
    rows.forEach(row => {
        let showRow = true;
        selects.forEach((select, index) => {
            const cell = row.querySelectorAll("td")[index];
            if (select.value !== "" && cell.textContent.trim() !== select.value) {
                showRow = false;
            }
        });
        row.style.display = showRow ? "" : "none";
    });
}
