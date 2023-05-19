import React, { useState } from "react"

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = (event) => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return <div className="new-expense">
    {isEditing && <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} onCancel={stopEditingHandler} />}
    {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
  </div>
}

export default NewExpense;