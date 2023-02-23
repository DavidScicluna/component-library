import memoize from 'memoizee';

import { Space } from '../../../../../theme/types';
import { RadioSize } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type FontSize = {
	icon: number; // In Pixels
	radio: number; // In Pixels
};

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigReturn = {
	padding: Padding;
	border: number; // In Pixels
	panel: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	fontSize: FontSize;
};

type GetSizeConfigProps = { size: RadioSize };

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 1, y: 1 },
				border: 2,
				panel: 16,
				spacing: 1,
				fontSize: {
					icon: 14,
					radio: 18
				}
			};
		case 'sm':
			return {
				padding: { x: 1.5, y: 1.5 },
				border: 2,
				panel: 18,
				spacing: 1.5,
				fontSize: {
					icon: 17,
					radio: 21
				}
			};
		case 'lg':
			return {
				padding: { x: 2.5, y: 2.5 },
				border: 2,
				panel: 24,
				spacing: 2.5,
				fontSize: {
					icon: 23,
					radio: 27
				}
			};
		case 'xl':
			return {
				padding: { x: 3, y: 3 },
				border: 2,
				panel: 30,
				spacing: 3,
				fontSize: {
					icon: 26,
					radio: 30
				}
			};
		default:
			return {
				padding: { x: 2, y: 2 },
				border: 2,
				panel: 20,
				spacing: 2,
				fontSize: {
					icon: 20,
					radio: 24
				}
			};
	}
});

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
