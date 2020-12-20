import React from 'react';
import {
	makeStyles,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	IconButton,
	Avatar,
	ListItemSecondaryAction,
	Slide,
} from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import { MoneyOff, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	avatarIncome: {
		color: '#fff',
		backgroundColor: green[500],
	},
	avatarExpense: {
		color: theme.palette.getContrastText(red[500]),
		backgroundColor: red[500],
	},
	list: {
		maxHeight: '150px',
		overflow: 'auto',
	},
}));

const InputList = () => {
	const classes = useStyles();
	const transactions = [
		{
			id: 1,
			type: 'Expense',
			category: 'Business',
			amount: 150,
			date: new Date(),
		},
		{
			id: 2,
			type: 'Expense',
			category: 'Business',
			amount: 60,
			date: new Date(),
		},
		{
			id: 3,
			type: 'Income',
			category: 'Business',
			amount: 540,
			date: new Date(),
		},
		{
			id: 4,
			type: 'Income',
			category: 'Business',
			amount: 550,
			date: new Date(),
		},
	];

	return (
		<List dense='false' className={classes.list}>
			{transactions.map((transaction) => (
				<Slide
					direction='down'
					in
					mountOnEnter
					unmountOnExit
					key={transaction.id}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								className={
									transaction.type === 'Income'
										? classes.avatarIncome
										: classes.avatarExpense
								}
							>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={transaction.catergory}
							secondary={`$${transaction.amount} - ${transaction.date}`}
						/>
						<ListItemSecondaryAction>
							<IconButton edge='end' aria-label='delete' onClick=''>
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</List>
	);
};

export default InputList;
