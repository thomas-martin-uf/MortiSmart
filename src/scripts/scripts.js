import { UI } from "./components/UI.js";
import { TopBar } from "./components/TopBar.js";
import { Footer } from "./components/Footer.js";
import { OutputTable } from "./components/OutputTable.js";

// main jumping off point of application
(() => {
    TopBar.render();
    UI.render();
    Footer.render();
})();
