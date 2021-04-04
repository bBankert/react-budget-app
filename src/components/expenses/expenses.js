import React, { useContext } from 'react';
import './expenses.css';
import Expense from './expense/expsense';
import { AppContext } from '../../context/AppContext';

const Expenses = () => {

    const {expenses} = useContext(AppContext);

    return(
        <div className="expenses">
            {expenses.map((expense) => (
                <Expense key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </div>
    );
}

export default Expenses;