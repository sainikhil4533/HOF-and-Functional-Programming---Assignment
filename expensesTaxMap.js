const expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

const TAX_RATE = 0.1; // 10%

const expensesWithTax = expenses.map((e) => ({
  ...e,
  tax: +(e.amount * TAX_RATE).toFixed(2),
  totalWithTax: +(e.amount * (1 + TAX_RATE)).toFixed(2),
}));

console.log(expensesWithTax);
