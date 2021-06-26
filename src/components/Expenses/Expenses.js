import React, { useState } from 'react'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import Card from '../Ui/Card';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({items}) => {
    const [filterDate, setFilterDate] = useState('2020');
    
    const filterExpenses = (selecteDate) => {
       setFilterDate(selecteDate)
    }

    const filteredExpenses = items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterDate
    })

    
    return (
        <>
         <Card className="blockwrap expenses">
            <ExpenseFilter selected={filterDate} filterExpenses={filterExpenses} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
        </>
    )
}
export default Expenses;