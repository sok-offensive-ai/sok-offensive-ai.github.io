document.addEventListener("DOMContentLoaded", function() {
    const tables = document.querySelectorAll("table");

    tables.forEach(table => {
        const headers = table.querySelectorAll("th");
        const filters = [];

        headers.forEach((header, index) => {
            const filterOptions = new Set();
            if (index > 1) { // Skip the first two columns (Paper and Year)
                table.querySelectorAll(`tbody td:nth-child(${index + 1})`).forEach(cell => {
                    filterOptions.add(cell.textContent.trim());
                });

                // Create filter dropdown
                const select = document.createElement("select");
                select.innerHTML = `<option value="">All</option>`;
                filterOptions.forEach(option => {
                    select.innerHTML += `<option value="${option}">${option}</option>`;
                });

                select.addEventListener("change", function() {
                    const selectedValue = this.value;
                    table.querySelectorAll(`tbody td:nth-child(${index + 1})`).forEach(cell => {
                        const row = cell.parentElement;
                        row.style.display = (selectedValue === "" || cell.textContent.trim() === selectedValue) ? "" : "none";
                    });
                });

                filters.push(select);
                header.appendChild(select);
            }
        });

        // Append filter dropdowns to the table header row
        const filterRow = document.createElement("tr");
        filters.forEach(filter => {
            const th = document.createElement("th");
            th.appendChild(filter);
            filterRow.appendChild(th);
        });

        table.querySelector("thead").appendChild(filterRow);
    });
});
