// script.js

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let displayValue = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.value;

        if (value === "=") {
            try {
                displayValue = eval(displayValue); // Evaluate expression
            } catch (error) {
                displayValue = "Error"; // Catch invalid inputs
            }
            display.value = displayValue;
        } else if (value === "clear") {
            displayValue = ""; // Clear the display
            display.value = displayValue;
        } else {
            displayValue += value; // Append input to display
            display.value = displayValue;
        }
    });
});
