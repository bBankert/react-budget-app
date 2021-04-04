import React, { useContext } from 'react';
import NewExpense from '../../components/new-expense/new-expense';
import { AppContext } from '../../context/AppContext';
import './add-expense.css';

const AddExpense = () => {
    const {isAdding} = useContext(AppContext);



    return(
        <div className="add-expense container">
            {isAdding ? 
            <React.Fragment>
                <h2>Add Expense</h2>
                <NewExpense/> 
            </React.Fragment>
            : ""
            }
            
        </div>
    );
};

export default AddExpense;