type Amounts = {
	hover: number;
	active: number;
};

export const handleAmount = (): Amounts => {
	return {
		hover: 0.05,
		active: 0.15
	};
};
