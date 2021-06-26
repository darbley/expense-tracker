import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const onSaveExpenseData = (data) => {

        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        console.log('newExpense ',expenseData)
        props.addExpenseHandler(expenseData)
        setIsEditing(false);
    }

    const handleStartIsEditing = () => {
        setIsEditing(true);
    }    

    const handleStopIsEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                    <button onClick={handleStartIsEditing}>Add New Expense</button>
                )
            }
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} handleStopIsEditing={handleStopIsEditing} />}
        </div>
    )
}

export default NewExpense;