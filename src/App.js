import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Details from './components/Details/Details';
import Input from './components/Input/Input';

const useStyles = makeStyles((theme) => ({
	desktop: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	mobile: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	main: {
		[theme.breakpoints.up('sm')]: {
			paddingBottom: '5%',
		},
	},
	last: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(3),
			paddingBottom: '200px',
		},
	},
	grid: {
		'& > *': {
			margin: theme.spacing(2),
		},
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid
				className={classes.grid}
				container
				spacing={0}
				alignItems='center'
				justify='center'
				style={{ height: '100vh' }}
			>
				<Grid item xs={12} sm={4}>
					<Details title='Income' />
				</Grid>
				<Grid item xs={12} sm={3}>
					<Input />
				</Grid>

				<Grid item xs={12} sm={4}>
					<Details title='Expense' />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
