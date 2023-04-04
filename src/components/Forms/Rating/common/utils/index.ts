import memoize from 'micro-memoize';

import { Space } from '../../../../../theme/types';
import { RatingSize } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigReturn = {
	padding: Padding;
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = { size: RatingSize };

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 1, y: 1 },
				border: 2,
				spacing: 1
			};
		case 'sm':
			return {
				padding: { x: 1.5, y: 1.5 },
				border: 2,
				spacing: 1.5
			};
		case 'lg':
			return {
				padding: { x: 2.5, y: 2.5 },
				border: 2,
				spacing: 2.5
			};
		case 'xl':
			return {
				padding: { x: 3, y: 3 },
				border: 2,
				spacing: 3
			};
		default:
			return {
				padding: { x: 2, y: 2 },
				border: 2,
				spacing: 2
			};
	}
});
