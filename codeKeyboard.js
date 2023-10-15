const keyboardDigitButtons = document.querySelectorAll('[data-key="digit"]');
const codeFields = document.querySelectorAll('.code-digit');
const clearCodeButton = document.getElementById('clear-code-button');

let code = '';

function updateCode(digitValue) {
    if (code.length === 4)
        return;

    code += digitValue;

    codeFields[code.length - 1].innerText = digitValue;
}

function removeLastDigit() {
    code = '';

    for (const digitField of codeFields) {
        digitField.innerText = '.';
    }
}

clearCodeButton.addEventListener('click', removeLastDigit);

function bindDigitButtonsToEventClick() {
    for (const digitButton of keyboardDigitButtons) {
        digitButton.addEventListener('click', function() {
            const digit = digitButton.getAttribute('data-num');
            updateCode(digit);
        });
    }
}

bindDigitButtonsToEventClick();