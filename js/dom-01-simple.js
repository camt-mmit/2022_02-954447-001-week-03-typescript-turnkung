"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const inputs = [
        ...document.querySelectorAll(".cmp-input-container input[type=number]"),
    ];
    inputs.forEach((elem) => {
        elem.addEventListener("change", () => {
            const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);
            const outputComponent = document.querySelector("output.cmp-result");
            if (outputComponent == null) {
                throw new Error("Cannot find 'output.cmp-result' in DOM tree");
            }
            outputComponent.value = `${total}`;
            //document.querySelector("output.cmp-result").value = total;
        });
    });
});
