import Card from './Card';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  let titleChange = []
  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
    setTitle("You have clicked the button")
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <button onClick={clickHandler} className='expense-item__price'>${props.amount}</button>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
}

export default ExpenseItem;
