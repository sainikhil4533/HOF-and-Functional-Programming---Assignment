const expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

function categorizeExpenses(list) {
  return list.map((e) => (e.amount > 100 ? "High Expense" : "Low Expense"));
}

const categorizedExpenses = categorizeExpenses(expenses);
console.log("Categorized Expenses:", categorizedExpenses);
