import React, { useReducer, createContext } from 'react';
import reducer from './reducer';
import { DELETE_TRANSACTION, ADD_TRANSACTION } from './constants';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const deleteAction = (id) =>
		dispatch({ type: DELETE_TRANSACTION, payload: id });

	const addAction = (transaction) =>
		dispatch({ type: ADD_TRANSACTION, payload: transaction });

	return (
		<ExpenseTrackerContext.Provider
			value={{
				deleteAction,
				addAction,
			}}
		>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
