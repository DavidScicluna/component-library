import { Space } from '../../../../../theme/types';
import { TagSize } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigReturn = {
	height: number; // In Pixels
	padding: Padding;
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	transform: Space; // In Space (Theme) Values
	offset: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = { size: TagSize };

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				height: 30,
				padding: { x: 1, y: 0 },
				border: 1,
				spacing: 1,
				transform: 3,
				offset: 2
			};
		case 'sm':
			return {
				height: 36,
				padding: { x: 1.5, y: 0 },
				border: 1,
				spacing: 1.5,
				transform: 3,
				offset: 2
			};
		case 'lg':
			return {
				height: 50,
				padding: { x: 2.5, y: 0 },
				border: 2,
				spacing: 2.5,
				transform: 4,
				offset: 4
			};
		case 'xl':
			return {
				height: 60,
				padding: { x: 3, y: 0 },
				border: 2,
				spacing: 3,
				transform: 4,
				offset: 4
			};
		default:
			return {
				height: 42,
				padding: { x: 2, y: 0 },
				border: 2,
				spacing: 2,
				transform: 4,
				offset: 4
			};
	}
};

type GetAmountReturn = {
	back: number;
	hover: number;
	active: number;
};

export const getAmount = (): GetAmountReturn => {
	return {
		back: 0.15,
		hover: 0.05,
		active: 0.1
	};
};
