import './Expenses.css'
import ExpenseItem from './ExpenseItem'

const Expenses = ({items}) => {
    
    return (
        <div className="blockwrap expenses">
            <ExpenseItem 
                date={items[0].date}
                title={items[0].title}
                amount={items[0].amount}
            >
                Expense Text
            </ExpenseItem>
            <ExpenseItem 
                date={items[1].date}
                title={items[1].title}
                amount={items[1].amount}
            >
                Expense Text
            </ExpenseItem>
            <ExpenseItem 
                date={items[2].date}
                title={items[2].title}
                amount={items[2].amount}
            >
                Expense Text
            </ExpenseItem>
        </div>
    )
}
export default Expenses;