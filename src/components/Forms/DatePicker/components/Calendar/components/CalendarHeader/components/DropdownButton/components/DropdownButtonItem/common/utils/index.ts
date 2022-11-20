import { Space } from '../../../../../../../../../../../../../theme/types';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigReturn = {
	padding: Padding;
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	offset: number; // In Pixels;
};

export const getSizeConfig = (): GetSizeConfigReturn => {
	return {
		padding: { x: 3, y: 1.5 },
		border: 2,
		spacing: 3,
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