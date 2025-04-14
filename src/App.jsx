import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Handle adding a new expense
  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Handle deleting an expense
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Filter expenses by search term
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort filtered expenses by description or category
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortBy) return 0;
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={handleAddExpense} />

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <ExpenseTable
        expenses={sortedExpenses}
        onDelete={handleDeleteExpense}
        onSort={setSortBy}
      />
    </div>
  );
}

export default App;
