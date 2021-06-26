import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

// const ExpenseList = ({items}) => {
//     let expensesContent = <p>No expenses found.</p>;

//     if(items.length > 0){
//         expensesContent = items.map((expense) => {
//             return (
//                 <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
//             )
//         })
//     }

//     return ( 
//         <ul className="expenses-list">
//             {expensesContent} 
//         </ul>
//     );

// }

// export default ExpenseList;


const ExpenseList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expense-list__fallback">Found no expenses.</h2>;
    }

    return ( 
        <ul className="expenses-list">
            {
                props.items.map((expense) => {
                    return (
                        <ExpenseItem 
                            key={expense.id} 
                            date={expense.date} 
                            title={expense.title} 
                            amount={expense.amount} 
                        />
                    )
                })
            } 
        </ul>
    );

}

export default ExpenseList;