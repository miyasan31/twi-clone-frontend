export const calcTextAreaHeight = (value: string) => {
	const rowsNum = value.split("\n").length;
	return rowsNum;
};
