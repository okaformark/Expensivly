import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	makeStyles,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles({
	income: {
		borderBottom: '10px solid rgba(0,255,0,0.5)',
	},
	expense: {
		borderBottom: '10px solid rgba(255,0,0,0.5)',
	},
});

const Details = ({ title }) => {
	const classes = useStyles();
	return (
		<Card className={title === 'Income' ? classes.income : classes.expense}>
			<CardHeader title={title} />
			<CardContent>
				<Typography variant='h5'>$50</Typography>
				{/* <Doughnut data='DATA' /> */}
			</CardContent>
		</Card>
	);
};

export default Details;
