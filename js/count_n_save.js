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

document.getElementById('calculate-cost').addEventListener('click', function () {
    // Getting Value for Calculate Cost
    const totalIncome = getInputValue('total-income');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('clothes-cost');

    // Adding total cost
    const totalCostSum = totalCost(foodCost, rentCost, clothesCost);

    // Error Handling
    try {
        if (totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
            throw 'Please provide a positive integer value.';
        } else if (isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
            throw "Please enter an integer value."
        } else if (totalIncome < totalCostSum) {
            throw "Costs more than your income."
        }
    }
    catch (error) {
        if (error == "Costs more than your income.") {
            document.getElementById('liveAlertExpenses').innerText = error;
        }
        else {
            alert(error);
        }
    }


    // Display value
    if (totalIncome >= 0 && foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        if (totalIncome >= totalCostSum) {
            document.getElementById('liveAlertExpenses').innerText = '';
            document.getElementById('total-expenses').innerText = totalCostSum;
            document.getElementById('balance').innerText = remainAmount(totalIncome, totalCostSum);
        }
        else {
            document.getElementById('total-expenses').innerText = '0';
            document.getElementById('balance').innerText = totalIncome;
        }
    }
    else if (isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
        document.getElementById('total-expenses').innerText = '0';
        if (isNaN(totalIncome)) {
            document.getElementById('balance').innerText = '0';
        } else {
            document.getElementById('balance').innerText = totalIncome;
        }
    }
    else {
        document.getElementById('total-expenses').innerText = '0';
        document.getElementById('balance').innerText = totalIncome;
    }
});

document.getElementById("save-btn").addEventListener('click', function () {
    // Getting Value to know saving amount
    const totalInterest = getInputValue('total-interest');
    const totalIncome = getInputValue('total-income');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('clothes-cost');

    // find total cost and save amount
    const totalCostSum = totalCost(foodCost, rentCost, clothesCost);
    const saveAmount = (totalIncome * totalInterest) / 100;

    // find remaining balance
    const remainBalanceAmount = remainAmount(totalIncome, totalCostSum);

    // Error Handling
    try {
        if (saveAmount > remainBalanceAmount) {
            throw "Sorry, you don't have enough money.";
        }
    }
    catch (error) {
        document.getElementById('liveAlertSave').innerText = error;
    }

    // Display outputs
    if (saveAmount <= remainBalanceAmount) {
        document.getElementById('liveAlertSave').innerText = '';
        document.getElementById('saving-amount').innerText = saveAmount;
        document.getElementById('remain-balance').innerText = remainAmount(remainBalanceAmount, saveAmount);
    } else {
        document.getElementById('saving-amount').innerText = '0';
        document.getElementById('remain-balance').innerText = remainBalanceAmount;
    }
});