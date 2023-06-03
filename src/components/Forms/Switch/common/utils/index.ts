import memoize from 'micro-memoize';

import { Space } from '../../../../../theme/types';
import { size as defaultSize } from '../../../FormControl/common/default/props';
import { SwitchProps } from '../types';

type GetSizeConfigProps = Pick<SwitchProps, 'size'>;
export type GetSizeConfigReturn = {
	width: number; // In Pixels
	height: number; // In Pixels
	thumb: number; // In Pixels
	padding: Space; // In Space (Theme) Values
};

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				width: 32,
				height: 16,
				thumb: 12,
				padding: 0.5
			};
		case 'sm':
			return {
				width: 40,
				height: 20,
				thumb: 16,
				padding: 0.5
			};
		case 'lg':
			return {
				width: 60,
				height: 30,
				thumb: 26,
				padding: 0.5
			};
		case 'xl':
			return {
				width: 72,
				height: 36,
				thumb: 32,
				padding: 0.5
			};
		default:
			return {
				width: 48,
				height: 24,
				thumb: 20,
				padding: 0.5
			};
	}
});
