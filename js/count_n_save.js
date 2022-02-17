// function to get value from input
function getInputValue(amountId) {
    const amountValue = document.getElementById(amountId);
    return parseFloat(amountValue.value);
}

// function to add total cost
function totalCost(food, rent, clothes) {
    return food + rent + clothes;
}

// function to get remain amount
function remainAmount(income, cost) {
    return income - cost;
}

// Event Listener for Calculate Cost
document.getElementById('calculate-cost').addEventListener('click', function () {
    // Getting Value for Calculate Cost
    const totalIncome = getInputValue('total-income');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('clothes-cost');

    // Adding total cost
    const totalExpenses = totalCost(foodCost, rentCost, clothesCost);

    // Error Handling
    try {
        if (totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
            throw 'Please provide a positive integer value.';
        }
        else if (isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
            throw "Please enter an integer value."
        }
        else if (totalIncome < totalExpenses) {
            throw "Costs more than your income."
        }
    }
    catch (error) {
        document.getElementById('liveAlertExpenses').innerText = error;
    }

    // Display value
    if (totalIncome >= 0 && foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        if (totalIncome >= totalExpenses) {
            document.getElementById('liveAlertExpenses').innerText = '';
            document.getElementById('total-expenses').innerText = totalExpenses;
            document.getElementById('balance').innerText = remainAmount(totalIncome, totalExpenses);
        }
        else {
            document.getElementById('total-expenses').innerText = '0';
            document.getElementById('balance').innerText = totalIncome;
        }
    }
    else if (isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost) || totalIncome < 0) {
        document.getElementById('total-expenses').innerText = '0';
        if (isNaN(totalIncome) || totalIncome < 0) {
            document.getElementById('balance').innerText = '0';
        }
        else {
            document.getElementById('balance').innerText = totalIncome;
        }
    }
    else {
        document.getElementById('total-expenses').innerText = '0';
        document.getElementById('balance').innerText = totalIncome;
    }
});

// Event Listener for Save Amount
document.getElementById("save-btn").addEventListener('click', function () {
    // Getting Value to know saving amount
    const totalInterest = getInputValue('total-interest');
    const totalIncome = getInputValue('total-income');

    // find total cost and save amount
    const totalExpenses = totalCost(getInputValue('food-cost'), getInputValue('rent-cost'), getInputValue('clothes-cost'));
    const saveAmount = (totalIncome * totalInterest) / 100;

    // find remaining balance
    const balance = remainAmount(totalIncome, totalExpenses);

    // Error Handling
    try {
        if (saveAmount > balance) {
            throw "Sorry, you don't have enough money.";
        }
        else if (isNaN(totalInterest) || totalInterest < 0) {
            throw 'Please provide an integer value.'
        }
    }
    catch (error) {
        document.getElementById('liveAlertSave').innerText = error;
    }

    // Display outputs
    if (saveAmount <= balance && saveAmount >= 0) {
        document.getElementById('liveAlertSave').innerText = '';
        document.getElementById('saving-amount').innerText = saveAmount;
        document.getElementById('remain-balance').innerText = remainAmount(balance, saveAmount);
    }
    else {
        document.getElementById('saving-amount').innerText = '0';
        if (isNaN(balance)) {
            document.getElementById('remain-balance').innerText = '0';
        }
        else {
            document.getElementById('remain-balance').innerText = balance;
        }
    }
});