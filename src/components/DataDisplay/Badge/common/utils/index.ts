import { memoize } from 'lodash';

import { Space } from '../../../../../theme/types';
import { BadgeSize } from '../../types';
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

type GetSizeConfigProps = { size: BadgeSize };

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 1, y: 0 },
				border: 1,
				spacing: 1
			};
		case 'sm':
			return {
				padding: { x: 1.5, y: 0 },
				border: 1,
				spacing: 1.5
			};
		case 'md':
			return {
				padding: { x: 2, y: 0 },
				border: 2,
				spacing: 2
			};
		case 'lg':
			return {
				padding: { x: 2.5, y: 0 },
				border: 2,
				spacing: 2.5
			};
		case '2xl':
			return {
				padding: { x: 3.5, y: 0 },
				border: 3,
				spacing: 3.5
			};
		case '3xl':
			return {
				padding: { x: 4, y: 0 },
				border: 4,
				spacing: 4
			};
		case '4xl':
			return {
				padding: { x: 4.5, y: 0 },
				border: 4,
				spacing: 4.5
			};
		default:
			return {
				padding: { x: 3, y: 0 },
				border: 2,
				spacing: 3
			};
	}
});
