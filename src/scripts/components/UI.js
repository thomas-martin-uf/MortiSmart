import { ComingSoon } from "./ComingSoon.js";
import { MainContent } from "./MainContent.js";
import { constants } from "../constants.js";

const { DEFAULT_RENDER_CONTAINER_ID, DEFAULT_COMING_SOON } = constants;

export const UI = {
    render: (parent_id = DEFAULT_RENDER_CONTAINER_ID) => {
        const parent = document.getElementById(parent_id);
        if (parent) {
            // if we're showing coming soon, then render that component and return
            if (DEFAULT_COMING_SOON) {
                return ComingSoon.render();
            } else {
                MainContent.render();
                //parent.append(OutputTable.getElement());
            }
        }
    },
};
