import React, { useState } from 'react';
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
	type: 'Income',
	date: new Date(),
};

const InputForm = () => {
	const [formData, setFormData] = useState();

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
						<MenuItem value='Business'>Business</MenuItem>
						<MenuItem value='Food'>Food</MenuItem>
						<MenuItem value='Salary'>Salary</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField type='number' label='Amount' fullWidth />
			</Grid>
			<Grid item xs={6}>
				<TextField type='date' label='Date' fullWidth />
			</Grid>
			<Button
				className={classes.button}
				variant='outlined'
				color='primary'
				fullWidth
			>
				Add
			</Button>
		</Grid>
	);
};

export default InputForm;
