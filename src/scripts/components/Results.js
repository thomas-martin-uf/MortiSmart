// coming soon component used in development
import { constants } from "../constants.js";
import { utils } from "../utils.js";
const { USDollar } = utils;
export const Results = {
    getElement: (dataObj) => {
        const div = document.createElement("div");
        div.classList.add("results");
        for (const [key, val] of Object.entries(dataObj)) {
            const innerDiv = document.createElement("div");
            innerDiv.innerHTML = `${key}: <b>${USDollar.format(val)}</b>`;
            div.appendChild(innerDiv);
        }

        return div;
    },
    render: (parent_id) => {
        if (parent_id) {
            const parent = document.getElementById("results-container");
            if (parent) {
                parent.append(Results.getElement());
            }
        }
    },
};
