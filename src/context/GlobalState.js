import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const Storage = {
    get() {
        const localData = localStorage.getItem('dev.finance:transactions');
        return localData ? JSON.parse(localData) : [];
    }
}

const initialState = {
    transactions: Storage.get(),
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem(
            "dev.finance:transactions",
            JSON.stringify(state.transactions)
        );
    }, [state])

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
            {children}
        </GlobalContext.Provider>
    )
}