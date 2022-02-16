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

    // Display value
    document.getElementById('total-expenses').innerText = totalCostSum;
    document.getElementById('balance').innerText = remainAmount(totalIncome, totalCostSum);


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

    // Display outputs
    document.getElementById('saving-amount').innerText = saveAmount;
    document.getElementById('remain-balance').innerText = remainAmount(remainBalanceAmount, saveAmount);
});