import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import './expense.css';

const Expense = (props) => {

    const {dispatch} = useContext(AppContext);

    const onClickHandler = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    }

    return(
        <div className="expense">
            <span><strong>{props.name}</strong></span>     
            <span className="expense-amount">${props.cost}</span>
            <span className="expense-delete" onClick={onClickHandler}>X</span>
        </div>
    );
}

export default Expense;