import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;