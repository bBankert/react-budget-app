import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './total-remaining.css';

const TotalRemaining = () => {
    const {expenses,budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,item) => {
        return (total += item.cost);
    },0);

    return(
        <div className="total-remaining-amount">
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    );
}

export default TotalRemaining;