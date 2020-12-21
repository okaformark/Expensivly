import React, { useState, useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import {
	TextField,
	Typography,
	Grid,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	makeStyles,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../contants/categories';
import { formatDate } from '../../utils/formatDate';

const useStyles = makeStyles({
	radioGroup: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '-10px',
	},
	button: {
		marginTop: '20px',
	},
});

const initialState = {
	amount: '',
	category: '',
	type: '',
	date: formatDate(new Date()),
};

const InputForm = () => {
	const [formData, setFormData] = useState(initialState);

	const { addAction } = useContext(ExpenseTrackerContext);

	const addTransactionHandler = () => {
		const transaction = {
			...formData,
			amount: Number(formData.amount),
			id: uuidv4(),
		};
		addAction(transaction);
		setFormData(initialState);
	};

	const selectedCategories =
		formData.type === 'Income' ? incomeCategories : expenseCategories;

	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography align='center' variant='subtitle2' gutterBottom>
					...
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={formData.type}
						onChange={(e) => setFormData({ ...formData, type: e.target.value })}
					>
						<MenuItem value='Income'>Income</MenuItem>
						<MenuItem value='Expense'>Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) =>
							setFormData({ ...formData, category: e.target.value })
						}
					>
						{selectedCategories.map((category) => (
							<MenuItem value={category.type} key={category.type}>
								{category.type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='number'
					label='Amount'
					fullWidth
					value={formData.amount}
					onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='date'
					label='Date'
					fullWidth
					value={formData.date}
					onChange={(e) =>
						setFormData({ ...formData, date: formatDate(e.target.value) })
					}
				/>
			</Grid>
			<Button
				className={classes.button}
				variant='outlined'
				color='primary'
				fullWidth
				onClick={addTransactionHandler}
			>
				Add
			</Button>
		</Grid>
	);
};

export default InputForm;
