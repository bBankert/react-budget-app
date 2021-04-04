import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './total-expenditure.css';

const TotalExpenditure = () => {
    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,item) => {
        return (total += item.cost)
    },0);

    return(
        <div className="total-expenditure-amount">
            <span>Spent: ${totalExpenses}</span>
        </div>
    );
}

export default TotalExpenditure;