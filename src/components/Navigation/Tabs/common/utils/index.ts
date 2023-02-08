import { Space } from '../../../../../theme/types';
import { TabsSize } from '../../types';
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
	offset: number; // In Pixels
};

type GetSizeConfigProps = { size: TabsSize };

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				height: 30,
				padding: { x: 1, y: 0 },
				border: 2,
				spacing: 1,
				offset: 2
			};
		case 'sm':
			return {
				height: 36,
				padding: { x: 1.5, y: 0 },
				border: 2,
				spacing: 1.5,
				offset: 2
			};
		case 'lg':
			return {
				height: 50,
				padding: { x: 2.5, y: 0 },
				border: 2,
				spacing: 2.5,

				offset: 4
			};
		case 'xl':
			return {
				height: 60,
				padding: { x: 3, y: 0 },
				border: 2,
				spacing: 3,

				offset: 4
			};
		default:
			return {
				height: 42,
				padding: { x: 2, y: 0 },
				border: 2,
				spacing: 2,
				offset: 4
			};
	}
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
