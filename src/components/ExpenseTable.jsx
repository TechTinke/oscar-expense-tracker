import React from "react";

function ExpenseTable({ expenses, onDelete, onSort }) {
  return (
    <div>
      <h2>Expense Table</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => onSort("description")}>Description 🔽</th>
            <th onClick={() => onSort("category")}>Category 🔽</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="4">No expenses yet.</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>Ksh {expense.amount}</td>
                <td>
                  <button onClick={() => onDelete(expense.id)}>
                    Delete 🗑️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
