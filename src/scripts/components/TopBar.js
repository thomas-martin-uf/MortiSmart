// coming soon component used in development
import { constants } from "../constants.js";
const { DEFAULT_TOP_BAR_RENDER_CONTAINER_ID } = constants;

export const TopBar = {
    getElement: () => {
        const div = document.createElement("div");
        div.classList.add("top-bar");
        const h1 = document.createElement("h1");
        h1.textContent = "MortiSmart";
        div.appendChild(h1);
        return div;
    },
    render: (parent_id = DEFAULT_TOP_BAR_RENDER_CONTAINER_ID) => {
        const parent = document.getElementById(parent_id);
        if (parent) {
            parent.append(TopBar.getElement());
        }
    },
};
