// coming soon component used in development
import { constants } from "../constants.js";
const { DEFAULT_FOOTER_RENDER_CONTAINER_ID } = constants;

export const Footer = {
    render: (parent_id = DEFAULT_FOOTER_RENDER_CONTAINER_ID) => {
        const parent = document.getElementById(parent_id);
        if (parent) {
            const body = `<div class="footer"></div>`;
            parent.innerHTML = body;
        }
    },
};
