import { assign as assignInput } from "./input.js";
document.addEventListener("DOMContentLoaded", () => {
    const inputSection = document.querySelector(".cmp-input-section");
    const inputTemplate = document.querySelector("template#tmp-input");
    if (inputSection === null) {
        throw new Error();
    }
    if (inputTemplate === null) {
        throw new Error();
    }
    assignInput(inputSection, inputTemplate);
});
