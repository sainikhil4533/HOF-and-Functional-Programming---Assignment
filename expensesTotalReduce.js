const expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);
console.log(`Total expenses: Rs.${totalAmount}`);
