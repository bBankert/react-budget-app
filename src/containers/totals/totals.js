import React from 'react';
import './totals.css';
import TotalBudget from '../../components/total-budget/total-budget';
import TotalRemaining from '../../components/total-remaining/total-remaining';
import TotalExpenditure from '../../components/total-expenditure/total-expenditure';

const Total = () => {
    return(
        <div className="total-budget container">
            <h1>Total Budget</h1>
            <div className="totals-row">
                <TotalBudget/>
                <TotalRemaining/>
                <TotalExpenditure/>
            </div>
        </div>
    );
};

export default Total;