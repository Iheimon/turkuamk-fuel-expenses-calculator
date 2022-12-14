import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer.js';

const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount:-20},
        {id: 2, text: 'psalary', amount:10},
        {id: 3, text: 'chicken', amount:20},
        {id: 4, text: 'cat', amount:-44}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}