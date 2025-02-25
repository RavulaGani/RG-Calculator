const display = document.getElementById("display");

// Append Value to Display
function appendValue(value) {
    display.value += value;
}

// Clear Display
function clearDisplay() {
    display.value = "";
}

// Remove Last Character (Backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate Result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Handle Keyboard Inputs
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
