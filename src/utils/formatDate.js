export const formatDate = (date) => {
	const getDate = new Date(date);
	let month = `${getDate.getMonth() + 1}`;
	let day = `${getDate.getDate()}`;
	const year = getDate.getFullYear();

	month = month.length < 2 ? (month = `0${month}`) : month;
	day = day.length < 2 ? (day = `0${day}`) : day;

	return [year, month, day].join('-');
};
