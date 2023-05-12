import memoize from 'micro-memoize';

import { Space } from '../../../../../theme/types';
import { size as defaultSize } from '../../../FormControl/common/default/props';
import { TextareaProps } from '../types';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = Pick<TextareaProps, 'size'>;
export type GetSizeConfigReturn = {
	spacing: Space; // In Space (Theme) Values
	padding: Padding;
};

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 1, y: 0.25 },
				spacing: 1
			};
		case 'sm':
			return {
				padding: { x: 1.25, y: 0.5 },
				spacing: 1.25
			};
		case 'lg':
			return {
				padding: { x: 1.75, y: 1 },
				spacing: 1.75
			};
		case 'xl':
			return {
				padding: { x: 2, y: 1.25 },
				spacing: 2
			};
		default:
			return {
				padding: { x: 1.5, y: 0.75 },
				spacing: 1.5
			};
	}
});
