import React, { useState } from "react"

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const inputHandler = (setState) => (event) => {
    setState(event.target.value);
  }
  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // }

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // }

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    }

    props.onSaveExpenseDate(expenseData);
    //console.log(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={inputHandler(setEnteredTitle)} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={inputHandler(setEnteredAmount)} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2025-01-01" onChange={inputHandler(setEnteredDate)} value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;