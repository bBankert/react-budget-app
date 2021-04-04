import React from 'react';
import './all-expenses.css';
import Expenses from '../../components/expenses/expenses';
import AddExpenseButton from '../../components/add-expense-button/add-expense-button';

const AllExpenses = () => {



    return(
        <div className="expenses-container container">
            <div className="header">
                <h2>Expenses</h2>
                <AddExpenseButton/>
            </div>
            <div className="all-expenses">
                <Expenses/>
            </div>
        </div>
    );
};

export default AllExpenses;