import { utils } from "../utils.js";
const { USDollar } = utils;

export const OutputTable = {
    // creates and returns dom element
    getElement: (data = [1, 2, 3]) => {
        // create table element container and table
        const overflowWrapper = document.createElement("div");
        overflowWrapper.classList.add("overflow-table");

        const table = document.createElement("table");

        // make sure we have an array and that it has some items
        if (Array.isArray(data) && data.length) {
            // create table header row and headers
            const headerRow = document.createElement("tr");
            const year = document.createElement("th");
            const month = document.createElement("th");
            const interest = document.createElement("th");
            const principal = document.createElement("th");
            const balance = document.createElement("th");

            // update the text of the headers
            year.textContent = "Year";
            month.textContent = "Month";
            interest.textContent = "Interest";
            principal.textContent = "Principal";
            balance.textContent = "Balance";

            // add headers to the header row and then the header tow to the table
            headerRow.append(year, month, interest, principal, balance);
            table.appendChild(headerRow);

            // for every item in our data set, build a new table tow
            data.forEach((item) => {
                // create new row
                const tr = document.createElement("tr");

                // create columns
                const year = document.createElement("td");
                year.textContent = item.year;

                const month = document.createElement("td");
                month.textContent = item.month;

                const interest = document.createElement("td");
                interest.textContent = USDollar.format(item.interest);

                const principal = document.createElement("td");
                principal.textContent = USDollar.format(item.principal);

                const balance = document.createElement("td");
                balance.textContent = USDollar.format(item.balance);

                // add colmns to row and row to table
                tr.append(year, month, interest, principal, balance);
                table.appendChild(tr);
                overflowWrapper.appendChild(table);
            });
        }
        return overflowWrapper;
    },

    // renders element to given parent element
    render: (parent_id) => {
        if (parent_id) {
            const parent = document.getElementById(parent_id);
            if (parent) {
                parent.append(OutputTable.getElement());
            }
        }
    },
};
