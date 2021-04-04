import {useReducer,createContext} from 'react';

const AppReducer = (state,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses,action.payload],
                isAdding: false,
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        case 'IS_ADDING':
            return {
                ...state,
                isAdding: true,
        };
        default:
            return state;
    }
};


const initialState = {
    budget: 2000,
    expenses: [
        {id: 1, name: "exp 1",cost: 10},
        {id: 2, name: "exp 2",cost: 20},
        {id: 3, name: "exp 3",cost: 30}
    ],
    isAdding: false,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    return (
        <AppContext.Provider
            value = {{
                budget: state.budget,
                expenses: state.expenses,
                isAdding: state.isAdding,
                dispatch,
            }}>
        {props.children}
        </AppContext.Provider>
    )
}