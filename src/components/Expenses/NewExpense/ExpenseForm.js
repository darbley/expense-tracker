import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = (event) => {
        console.log('change input ', event)
        setInputTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        console.log('amount e ', event);
        setInputAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        console.log('date change ',event);
        setInputDate(event.target.value);
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onSaveExpenseData(expenseData);
        console.log('expenseData obj ',expenseData);

        // Clear Inputs
        setInputTitle('');
        setInputAmount('');
        setInputDate('');

    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="new-expense__controls">
            
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={inputTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={inputAmount} onChange={amountChangeHandler}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={inputDate} onChange={dateChangeHandler}  />
                </div>
            
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.handleStopIsEditing}>Cancel Expense</button>
                <button type="submit">Add Expense</button>
            </div>
                    
        </form>
    )
}

export default ExpenseForm;