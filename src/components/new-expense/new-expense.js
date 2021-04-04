import React, { useContext, useState } from 'react';
import './new-expense.css';
import {v4 as uuidv4} from 'uuid';
import { AppContext } from '../../context/AppContext';

const NewExpense = () => {
    const {dispatch} = useContext(AppContext);
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
        

        resetForm();
    };

    const resetForm = () => {
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = '')
        );
    }
    

    return(
        <form className="new-expense" onSubmit={onSubmitHandler}>
            <label>Name
                <input type="text" onChange={(event) => setName(event.target.value)} required/>
            </label>
            <label>Cost
                <input type="number" onChange={(event) => setCost(event.target.value)} required/>
            </label>
            <button className="save-button button" type="submit">Save</button>
        </form>
    );
};

export default NewExpense;