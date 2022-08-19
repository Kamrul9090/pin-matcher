//step-1: create a function to get random pin number
function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}
//step-2: create a function to get 4 digits pin number
function getPin() {

    const pin = generatePin() + "";
    const pinNumber = parseInt(pin);

    if (pin.length === 4) {

        return pinNumber;
    }
    else {
        return getPin();
    }
}
//step-7: Create a function to geting input Field

function inputFieldElementById(elementId) {
    const calculateField = document.getElementById(elementId);
    return calculateField;
}

//step-3: add handler in generate button to display pin number inside input field

document.getElementById("generate-pin").addEventListener("click", function () {

    const displayInputField = inputFieldElementById("display-pin");
    displayInputField.value = getPin();
})



//step-4: add bubble handler using by calculatorId
document.getElementById("calculator").addEventListener("click", function (event) {

    const targetValue = event.target.innerText;

    const calculateField = inputFieldElementById("typed-numbers");

    const calculateFieldValue = calculateField.value;

    //step-5: Clear field and remove last number from the calculate field

    if (isNaN(targetValue)) {
        if (targetValue === "C") {
            calculateField.value = "";
        }
        else if (targetValue === "<") {
            const fieldValue = calculateFieldValue.split("");
            fieldValue.pop();
            const newFieldValue = fieldValue.join("");
            calculateField.value = newFieldValue;
        }
    }
    else {
        const newFieldValue = calculateFieldValue + targetValue;
        calculateField.value = newFieldValue;
    }
})

//step-6: add handler in the submit button to verify pin number
document.getElementById("verify-pin").addEventListener("click", function () {

    // display pin field value
    const displayInputField = inputFieldElementById("display-pin")
    const verifyPin = displayInputField.value;

    // Calculate input field value
    const calculateField = inputFieldElementById("typed-numbers");
    const calculateValue = calculateField.value;

    // Pin Success message
    const pinSuccessMessage = document.getElementById("pin-success");
    const pinFailureMessage = document.getElementById("pin-failure");

    if (verifyPin === calculateValue) {
        pinSuccessMessage.style.display = "block"
        pinFailureMessage.style.display = "none"
    }
    else {
        pinFailureMessage.style.display = "block"
        pinSuccessMessage.style.display = "none"
    }
})




