// import necessary components and files
import { constants } from "../constants.js";
import { utils } from "../utils.js";
import { InputForm } from "./InputForm.js";
import { OutputTable } from "./OutputTable.js";
import { ContentHeader } from "./ContentHeader.js";

// destructure
const { DEFAULT_RENDER_CONTAINER_ID } = constants;
const { USDollar } = utils;

export const MainContent = {
    currentPage: 1,
    totalPages: 2,

    render: (parent_id = DEFAULT_RENDER_CONTAINER_ID) => {
        const { currentPage, totalPages } = MainContent;
        const parent = document.getElementById(parent_id);
        if (parent) {
            parent.append(ContentHeader.getElement("Loan Terms"));
            parent.appendChild(InputForm.getElement(parent));
        }
    },
};
