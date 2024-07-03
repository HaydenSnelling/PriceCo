// Get DOM elements
const amount1Input = document.getElementById('amount1');
const price1Input = document.getElementById('price1');
const amount2Input = document.getElementById('amount2');
const price2Input = document.getElementById('price2');
const pricePerUnit1 = document.getElementById('pricePerUnit1');
const pricePerUnit2 = document.getElementById('pricePerUnit2');
const betterValueText = document.getElementById('betterValueText');
const product1Div = document.querySelector('.product:nth-of-type(1)');
const product2Div = document.querySelector('.product:nth-of-type(2)');

// Event listeners for input fields
amount1Input.addEventListener('input', updatePricePerUnit);
price1Input.addEventListener('input', updatePricePerUnit);
amount2Input.addEventListener('input', updatePricePerUnit);
price2Input.addEventListener('input', updatePricePerUnit);

// Function to update price per unit and compare products
function updatePricePerUnit() {
    // Calculate price per unit for product 1
    if (amount1Input.value && price1Input.value) {
        const pricePerUnit = price1Input.value / amount1Input.value;
        pricePerUnit1.textContent = pricePerUnit.toFixed(2);
    } else {
        pricePerUnit1.textContent = '';
    }

    // Calculate price per unit for product 2
    if (amount2Input.value && price2Input.value) {
        const pricePerUnit = price2Input.value / amount2Input.value;
        pricePerUnit2.textContent = pricePerUnit.toFixed(2);
    } else {
        pricePerUnit2.textContent = '';
    }

    // Compare and highlight better value
    if (amount1Input.value && price1Input.value && amount2Input.value && price2Input.value) {
        const pricePerUnit1Value = parseFloat(pricePerUnit1.textContent);
        const pricePerUnit2Value = parseFloat(pricePerUnit2.textContent);

        if (pricePerUnit1Value < pricePerUnit2Value) {
            product1Div.classList.add('better-value');
            product2Div.classList.remove('better-value');
            betterValueText.textContent = 'Better Value: Product 1';
        } else if (pricePerUnit1Value > pricePerUnit2Value) {
            product1Div.classList.remove('better-value');
            product2Div.classList.add('better-value');
            betterValueText.textContent = 'Better Value: Product 2';
        } else {
            product1Div.classList.remove('better-value');
            product2Div.classList.remove('better-value');
            betterValueText.textContent = 'Both are of equal value.';
        }
    } else {
        product1Div.classList.remove('better-value');
        product2Div.classList.remove('better-value');
        betterValueText.textContent = '';
    }
}
