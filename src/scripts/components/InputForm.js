import { utils } from "../utils.js";
import { constants } from "../constants.js";
import { calculations } from "../calculations.js";
import { Results } from "./Results.js";
import { ContentHeader } from "./ContentHeader.js";
// destructure
const { DEFAULT_RENDER_CONTAINER_ID } = constants;
const { USDollar } = utils;

export const InputForm = {
    getInput: (
        labelText,
        inputName,
        inputType = "text",
        isRequired = false
    ) => {
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";

        const label = document.createElement("label");
        label.textContent = labelText;
        label.style.width = "120px"; // Adjust the width as needed for your design
        label.style.marginRight = "10px";
        label.style.textAlign = "right";

        const input = document.createElement("input");
        input.type = inputType;
        input.name = inputName;
        input.id = inputName;
        if (isRequired) {
            input.required = true;
        }
        input.style.flex = "1"; // Expand the input field to fill available space
        input.style.padding = "0.5rem";
        input.style.marginBottom = "1rem";

        container.appendChild(label);
        container.appendChild(input);
        return container;
    },
    getElement: () => {
        // Create a form element
        const { getInput } = InputForm;
        const form = document.createElement("form");
        form.classList.add("loan-form");

        form.appendChild(
            getInput("Loan Amount:", "loanAmount", "number", true)
        );
        form.appendChild(
            getInput("Interest Rate (%):", "interestRate", "number", true)
        );
        form.appendChild(
            getInput("Loan Term (years):", "loanTerm", "number", true)
        );
        /* form.appendChild(
            getInput("Extra Payments:", "extraPayments", "number")
        ); */

        // Create a submit button
        const submitButton = document.createElement("input");
        submitButton.classList.add("btn");
        submitButton.type = "submit";
        submitButton.value = "Calculate";
        submitButton.onclick = (e) => {
            e.preventDefault();

            const loan = document.getElementById("loanAmount").value;
            const interest = document.getElementById("interestRate").value;
            const term = document.getElementById("loanTerm").value;
            //const extra = document.getElementById("extraPayments").value;
            if (loan && interest && term) {
                const fixedMonthlyPayment = calculations.monthlyPayments(
                    loan,
                    interest,
                    term
                );

                const totalInterest = calculations.totalInterest(
                    fixedMonthlyPayment,
                    loan,
                    interest,
                    term
                );

                const totalAmountPaid = calculations.totalAmountPaid(
                    loan,
                    totalInterest
                );
                const resObj = {
                    "Monthly Payment": fixedMonthlyPayment,
                    "Total Interest": totalInterest,
                    "Total Amount Paid": totalAmountPaid,
                };
                const parent = document.getElementById("results-container");

                while (parent.hasChildNodes()) {
                    //if (parent.lastElementChild.classList.contains("results"))
                    parent.removeChild(parent.lastChild);
                }
                parent.append(ContentHeader.getElement("Results"));
                parent.appendChild(Results.getElement(resObj));
            }
        };
        form.appendChild(submitButton);
        return form;
    },
    render: (parent_id = DEFAULT_RENDER_CONTAINER_ID) => {
        const parent = document.getElementById(parent_id);
        if (parent) {
            parent.appendChild(InputForm.getElement(parent));
        }
    },
};
