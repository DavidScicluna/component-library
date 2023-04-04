import memoize from 'micro-memoize';

import { Space } from '../../../../../../../theme/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { RatingSize } from '../../../../types';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigReturn = {
	padding: Padding;
	fontSize: number; // In Pixels;
};

type GetSizeConfigProps = { size: RatingSize };

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 0.5, y: 0.5 },
				fontSize: 18
			};
		case 'sm':
			return {
				padding: { x: 0.75, y: 0.75 },
				fontSize: 21
			};
		case 'lg':
			return {
				padding: { x: 1.25, y: 1.25 },
				fontSize: 27
			};
		case 'xl':
			return {
				padding: { x: 1.5, y: 1.5 },
				fontSize: 30
			};
		default:
			return {
				padding: { x: 1, y: 1 },
				fontSize: 24
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
