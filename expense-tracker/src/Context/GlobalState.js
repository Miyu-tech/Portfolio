import React, { createContext, useReducer } from 'react';
import AddReducer from './AddReducer';

const initialState = {
    transactions: [
        {id: 1, text: 'salary', amount: 2500},
        {id: 2, text: 'groceries', amount: -50},
        {id: 3, text: 'Book', amount: -15}
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    );
};