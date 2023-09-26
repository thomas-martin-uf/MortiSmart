// coming soon component used in development
import { constants } from "../constants.js";
const { DEFAULT_RENDER_CONTAINER_ID } = constants;

export const ContentHeader = {
    getElement: (headerText) => {
        const div = document.createElement("div");
        div.classList.add("content-header");
        div.innerText = headerText;
        return div;
    },
    render: (parent_id = DEFAULT_RENDER_CONTAINER_ID) => {
        const parent = document.getElementById(parent_id);
        if (parent) {
            parent.append(ContentHeader.getElement());
        }
    },
};
