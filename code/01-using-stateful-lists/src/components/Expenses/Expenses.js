import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

let updateExpenses = [];



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(selectedYear)
    console.log(filteredYear)
    updateExpenses = props.items.filter((expenses) => {
      return (expenses.date.getFullYear().toString() === selectedYear)
    })
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {expenseContent}*/}
        {/* You can call that function/component here and send it the filtered year */}
        <ExpensesList items={updateExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
