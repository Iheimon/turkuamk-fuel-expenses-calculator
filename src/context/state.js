import React, { createContext, useReducer } from "react";
import reducer from "./reducer.js";

const initialState = {
  expenses: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addExpense = (expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        addExpense,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
