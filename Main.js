let totalIncome = 0;
let totalExpense = 0;

// Function to create delete button
function createDeleteBtn(item, parent, amount) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        parent.removeChild(item);
        if (amount > 0) {
            totalIncome -= amount;
            updateTotalIncome();
        } else {
            totalExpense -= Math.abs(amount);
            updateTotalExpense();
        }
        updateBalance();
    });
    return deleteBtn;
}

// Function to update total income
function updateTotalIncome() {
    document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
}

// Function to update total expenses
function updateTotalExpense() {
    document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
}

// Function to update balance
function updateBalance() {
    const balance = totalIncome - totalExpense;
    document.getElementById("balance").textContent = balance.toFixed(2);
}

// Event listener for adding income
const incomeBtn = document.getElementById("addIncomeBtn");
const incomeList = document.getElementById("incomeList");

incomeBtn.addEventListener("click", function () {
    const incomeInput = document.getElementById("incomeInput");
    const incomeAmountInput = document.getElementById("amountInput");
    const text = incomeInput.value;
    const amount = parseFloat(incomeAmountInput.value);

    if (text.trim() !== "" && !isNaN(amount)) {
        const li = document.createElement("li");
        li.textContent = `${text}:  ${amount}`;
        li.appendChild(createDeleteBtn(li, incomeList, amount));
        incomeList.appendChild(li);

        totalIncome += amount;
        updateTotalIncome();
        updateBalance();

        incomeInput.value = "";
        incomeAmountInput.value = "";
    }
});

// Event listener for adding expense
const expenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");

expenseBtn.addEventListener("click", function () {
    const expenseInput = document.getElementById("expenseInput");
    const expenseAmountInput = document.getElementById("expenseAmountInput");
    const text = expenseInput.value;
    const amount = parseFloat(expenseAmountInput.value);

    if (text.trim() !== "" && !isNaN(amount)) {
        const li = document.createElement("li");
        li.textContent = `${text}: $${amount}`;
        li.appendChild(createDeleteBtn(li, expenseList, -amount));
        expenseList.appendChild(li);

        totalExpense += amount;
        updateTotalExpense();
        updateBalance();

        expenseInput.value = "";
        expenseAmountInput.value = "";
    }
});

// Initial update for balance
updateBalance();
// let totalIncome = 0;
// let totalExpense = 0;

// // Function to create delete button
// function createDeleteBtn(item, parent) {
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "X";
//     deleteBtn.addEventListener("click", () => {
//         parent.removeChild(item);
//         updateTotals();
//     });
//     return deleteBtn;
// }

// // Function to update total income, total expenses, and balance
// function updateTotals() {
//     document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);
//     document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);

//     const balance = totalIncome - totalExpense;
//     document.getElementById("balance").textContent = balance.toFixed(2);
// }

// // Event listener for adding income
// const incomeBtn = document.getElementById("addIncomeBtn");
// const incomeList = document.getElementById("incomeList");

// incomeBtn.addEventListener("click", function () {
//     const incomeInput = document.getElementById("incomeInput");
//     const incomeAmountInput = document.getElementById("amountInput");
//     const text = incomeInput.value;
//     const amount = parseFloat(incomeAmountInput.value);

//     if (text.trim() !== "" && !isNaN(amount)) {
//         const li = document.createElement("li");
//         li.textContent = `${text}: $${amount}`;
//         li.appendChild(createDeleteBtn(li, incomeList));
//         incomeList.appendChild(li);

//         totalIncome += amount;
//         updateTotals();

//         incomeInput.value = "";
//         incomeAmountInput.value = "";
//     }
// });

// // Event listener for adding expense
// const expenseBtn = document.getElementById("addExpenseBtn");
// const expenseList = document.getElementById("expenseList");

// expenseBtn.addEventListener("click", function () {
//     const expenseInput = document.getElementById("expenseInput");
//     const expenseAmountInput = document.getElementById("expenseAmountInput");
//     const text = expenseInput.value;
//     const amount = parseFloat(expenseAmountInput.value);

//     if (text.trim() !== "" && !isNaN(amount)) {
//         const li = document.createElement("li");
//         li.textContent = `${text}: $${amount}`;
//         li.appendChild(createDeleteBtn(li, expenseList));
//         expenseList.appendChild(li);

//         totalExpense += amount;
//         updateTotals();

//         expenseInput.value = "";
//         expenseAmountInput.value = "";
//     }
// });