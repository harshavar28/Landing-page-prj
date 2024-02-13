const exchangeRate = 83.012;

function choosePlan(plan) {
    alert(`You have chosen the ${plan} plan!`);
    
}

function selectCurrency(currency) {
    document.getElementById('currencyDropdownBtn').innerText = currency;
    updatePrices();
}

function selectUnit(unit) {
    document.getElementById('unitDropdownBtn').innerText = unit;
    updatePrices();
}

function updatePrices() {
    const currencySelect = document.getElementById('currencyDropdownBtn');
    const unitSelect = document.getElementById('unitDropdownBtn');

    const basicPrice = document.getElementById('basic-price');
    const proPrice = document.getElementById('pro-price');
    const premiumPrice = document.getElementById('premium-price');

    const currencySymbol = currencySelect.innerText;
    const unitText = unitSelect.innerText;

    
    const basicPriceInINR = 19.99;
    const proPriceInINR = 39.99;
    const premiumPriceInINR = 59.99;

    let basicPriceConverted, proPriceConverted, premiumPriceConverted;

    if (currencySymbol === '$') {
        basicPriceConverted = basicPriceInINR / exchangeRate;
        proPriceConverted = proPriceInINR / exchangeRate;
        premiumPriceConverted = premiumPriceInINR / exchangeRate;
    } else if (currencySymbol === '₹') {
        basicPriceConverted = basicPriceInINR ;
        proPriceConverted = proPriceInINR ;
        premiumPriceConverted = premiumPriceInINR ;
    }
    if (unitText === 'Per Year') {
        basicPriceConverted *= 12;
        proPriceConverted *= 12;
        premiumPriceConverted *= 12;
    } else if (currencySymbol === 'Per Month') {
    basicPriceConverted = basicPriceInINR ;
    proPriceConverted = proPriceInINR ;
    premiumPriceConverted = premiumPriceInINR ;
    }

    basicPrice.textContent = `${currencySymbol}${basicPriceConverted.toFixed(2)}/${unitText}`;
    proPrice.textContent = `${currencySymbol}${proPriceConverted.toFixed(2)}/${unitText}`;
    premiumPrice.textContent = `${currencySymbol}${premiumPriceConverted.toFixed(2)}/${unitText}`;
}