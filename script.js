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
    let pricePerUnit1Value = null;
    let pricePerUnit2Value = null;

    // Calculate price per unit for product 1
    if (amount1Input.value && price1Input.value) {
        pricePerUnit1Value = price1Input.value / amount1Input.value;
        pricePerUnit1.textContent = pricePerUnit1Value.toFixed(4);
    } else {
        pricePerUnit1.textContent = '';
    }

    // Calculate price per unit for product 2
    if (amount2Input.value && price2Input.value) {
        pricePerUnit2Value = price2Input.value / amount2Input.value;
        pricePerUnit2.textContent = pricePerUnit2Value.toFixed(4);
    } else {
        pricePerUnit2.textContent = '';
    }

    // Compare and highlight better value
    if (pricePerUnit1Value !== null && pricePerUnit2Value !== null) {
        if (pricePerUnit1Value < pricePerUnit2Value) {
            product1Div.classList.add('better-value', 'pulse');
            product2Div.classList.remove('better-value', 'pulse');
            betterValueText.textContent = 'Better Value: Product 1';
        } else if (pricePerUnit1Value > pricePerUnit2Value) {
            product1Div.classList.remove('better-value', 'pulse');
            product2Div.classList.add('better-value', 'pulse');
            betterValueText.textContent = 'Better Value: Product 2';
        } else {
            product1Div.classList.remove('better-value', 'pulse');
            product2Div.classList.remove('better-value', 'pulse');
            betterValueText.textContent = 'Both are of equal value.';
        }
    } else {
        product1Div.classList.remove('better-value', 'pulse');
        product2Div.classList.remove('better-value', 'pulse');
        betterValueText.textContent = '';
    }
}
