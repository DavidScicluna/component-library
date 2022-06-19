type GetSizeConfigReturn = {
	border: number; // In Pixels
	transform: number;
	offset: number;
};

export const getSizeConfig = (): GetSizeConfigReturn => {
	return {
		border: 2,
		transform: 4,
		offset: 4
	};
};

type GetAmountReturn = {
	hover: number;
	active: number;
};

export const getAmount = (): GetAmountReturn => {
	return {
		hover: 0.05,
		active: 0.1
	};
};
