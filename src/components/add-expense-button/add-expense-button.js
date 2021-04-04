import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const AddExpenseButton = () => {

    const {dispatch} = useContext(AppContext);
    
    const onClickHandler = () => {
        dispatch({
            type: 'IS_ADDING',
            payload: true
        });
    };

    return(
        <button className="add-expense button" onClick={onClickHandler}>Add Expense</button>
    );
};

export default AddExpenseButton;