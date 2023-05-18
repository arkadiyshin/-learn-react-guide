import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filtredExpenses = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear
  })

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  let expensesContent = <p>No expenses found</p>;

  if (filtredExpenses.length > 0) {
    expensesContent = filtredExpenses.map((expense) =>
      <ExpenseItem key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;