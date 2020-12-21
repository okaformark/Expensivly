import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	Grid,
	Divider,
	makeStyles,
} from '@material-ui/core';
import InputForm from './InputForm';
import InputList from './InputList';

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	cartContent: {
		paddingTop: 0,
	},
	divider: {
		margin: '20px 0',
	},
}));

const Input = () => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardHeader
				title='Expensivly'
				subheader='Powered by speechly'
			></CardHeader>
			<CardContent>
				<Typography align='center' variant='h5'>
					Total Balance of {}
				</Typography>

				<Typography
					variant='subtitle2'
					style={{ lineHeight: '1.5em', marginTop: '20px' }}
				>
					{}
					Add your income or expenses with this voice recognition technology.
					Say something like : Add income of $200 in category salary for
					tomorrow
				</Typography>
				<Divider />
				<InputForm />
			</CardContent>
			<CardContent className={classes.cartContent}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<InputList />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Input;
