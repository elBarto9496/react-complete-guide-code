import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
function Expenses(props) {
    return (
        <div classname="expenses">
            <div>
                <ExpenseItem date={props.data[0].date} title={props.data[0].title} amount={props.data[0].amount} />
            </div>
            <div>
                <ExpenseItem date={props.data[1].date} title={props.data[1].title} amount={props.data[2].amount} />
            </div>
            <div>
                <ExpenseItem date={props.data[2].date} title={props.data[2].title} amount={props.data[2].amount} />
            </div>
            <div>
                <ExpenseItem date={props.data[3].date} title={props.data[3].title} amount={props.data[3].amount} />
            </div>
        </div>
    )
}

export default Expenses;