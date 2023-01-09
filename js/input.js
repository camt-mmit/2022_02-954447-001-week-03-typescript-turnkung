function calculateTotal(container, resultComponent) {
    /*const inputs = [
      ...container.querySelectorAll<HTMLInputElement>("input[type=number]"),
    ];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);*/
    const inputContainers = [
        ...container.querySelectorAll(".cmp-input-container"),
    ];
    const total = inputContainers
        .map((elem) => elem.querySelector("input[type=number]"))
        .filter((elem) => elem !== null)
        .reduce((carry, em) => carry + em.valueAsNumber, 0);
    resultComponent.value = `${total}`;
}
function rebuildIndex(inputsContainer) {
    const inputContainers = [
        ...inputsContainer.querySelectorAll(".cmp-input-container"),
    ];
    inputContainers.forEach((elem, i) => {
        [...elem.querySelectorAll(".cmp-input-no")].forEach((elem) => {
            elem.innerText = `${i + 1}`;
        });
    });
    [
        ...inputsContainer.querySelectorAll(".cmp-remove-input"),
    ].forEach((elem) => {
        elem.disabled = !(inputContainers.length > 1);
    });
}
function addInput(inputsContainer, resultComponent, template) {
    const fragment = template.content.cloneNode(true);
    inputsContainer.append(fragment);
    rebuildIndex(inputsContainer);
    calculateTotal(inputsContainer, resultComponent);
}
function remove(inputsContainer, resultComponent, inputContainer) {
    inputContainer.remove();
    rebuildIndex(inputsContainer);
    calculateTotal(inputsContainer, resultComponent);
}
export function assign(inputSection, inputTemplate) {
    const inputsContainer = inputSection.querySelector(".cmp-inputs-container");
    const resultComponent = inputSection.querySelector(".cmp-result");
    if (inputsContainer === null) {
        throw new Error("Cannot find '.cmp-inputs-container' in DOM tree.");
    }
    if (resultComponent === null) {
        throw new Error("Cannot find '.cmp-result' in DOM tree.");
    }
    inputSection.addEventListener("click", (ev) => {
        if (ev.target) {
            if (ev.target.matches(".cmp-add-input")) {
                addInput(inputsContainer, resultComponent, inputTemplate);
            }
        }
    });
    inputSection.addEventListener("change", (ev) => {
        if (ev.target) {
            if (ev.target.matches("input[type=number]")) {
                calculateTotal(inputsContainer, resultComponent);
            }
        }
    });
    inputSection.addEventListener("click", (ev) => {
        if (ev.target) {
            const targetElement = ev.target;
            if (ev.target.matches(".cmp-remove-input")) {
                const inputContainer = targetElement.closest(".cmp-input-container");
                if (inputContainer === null) {
                    throw new Error();
                }
                remove(inputsContainer, resultComponent, inputContainer);
            }
        }
    });
    addInput(inputsContainer, resultComponent, inputTemplate);
}
