import memoize from 'micro-memoize';

import { Space } from '../../../../../theme/types';
import { size as defaultSize } from '../default/props';
import { CheckboxSize } from '../types';

type FontSize = {
	icon: number; // In Pixels
	checkbox: number; // In Pixels
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

type GetSizeConfigProps = { size: CheckboxSize };

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
					checkbox: 18
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
					checkbox: 21
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
					checkbox: 27
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
					checkbox: 30
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
					checkbox: 24
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
