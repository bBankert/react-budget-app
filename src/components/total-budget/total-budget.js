import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './total-budget.css';

const TotalBudget = () => {
    const {budget} = useContext(AppContext);

    return(
        <div className="total-budget-amount">
            <span>Budget: ${budget}</span>
        </div>
    );
}

export default TotalBudget;