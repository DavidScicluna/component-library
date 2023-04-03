import { Space } from '../../../../../../../../../../../theme/types';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigReturn = {
	height: number; // In Pixels
	padding: Padding;
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	offset: number; // In Pixels;
};

export const getSizeConfig = (): GetSizeConfigReturn => {
	return {
		height: 36,
		padding: { x: 1.5, y: 0 },
		border: 2,
		spacing: 1.5,
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
