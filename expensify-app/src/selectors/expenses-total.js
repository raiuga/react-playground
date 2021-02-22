// Get total value of all expenses
const getExpensesTotal = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((total, amount) => total + amount, 0);
};

export default getExpensesTotal;