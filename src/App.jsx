import { useState } from 'react';
import ExpenseCard from './ExpenseCard.jsx';

const startingExpenses = [
  { id: 1, name: 'Weekly groceries', category: 'Food & drink', amount: 84.32 },
  { id: 2, name: 'Monthly metro pass', category: 'Transport', amount: 42.0 },
  { id: 3, name: 'Ceramic coffee mug', category: 'Shopping', amount: 18.5 },
  { id: 4, name: 'Electricity bill', category: 'Utilities', amount: 67.9 },
];

function App() {
  const [expenses, setExpenses] = useState(startingExpenses);

  function deleteExpense(id) {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id)
    );
  }

  return (
    <main>
      <h1>Expenses</h1>

      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          name={expense.name}
          category={expense.category}
          amount={expense.amount}
          onDelete={() => deleteExpense(expense.id)}
        />
      ))}
    </main>
  );
}

export default App;