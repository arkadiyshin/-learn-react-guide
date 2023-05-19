import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023');

  const filtredExpenses = props.items.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear
  })

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filtredExpenses} />
        <ExpensesList items={filtredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;