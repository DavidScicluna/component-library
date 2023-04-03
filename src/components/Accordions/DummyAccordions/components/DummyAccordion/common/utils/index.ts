type GetSizeConfigReturn = {
	border: number; // In Pixels
	// transform: number;
	offset: number;
};

export const getSizeConfig = (): GetSizeConfigReturn => {
	return {
		border: 2,
		// transform: 4,
		offset: 4
	};
};
