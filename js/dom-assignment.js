import { assign as assignSection } from "./section.js";
document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".cmp-main-container");
    const sectionTemplate = document.querySelector("template#tmp-section");
    const inputTemplate = document.querySelector("template#tmp-input");
    if (mainContainer === null) {
        throw new Error("Cannot find '.cmp-main-container' in DOM tree.");
    }
    if (sectionTemplate === null) {
        throw new Error("Cannot find '.template#tmp-section' in DOM tree.");
    }
    if (inputTemplate === null) {
        throw new Error("Cannot find 'template#tmp-input' in DOM tree.");
    }
    assignSection(mainContainer, sectionTemplate, inputTemplate);
});
