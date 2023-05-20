import { Space } from '../../../../../theme/types';
import { size as defaultSize } from '../default/props';
import { TabBarSize } from '../types';

type XY = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = { size: TabBarSize };
export type GetSizeConfigReturn = {
	padding: XY;
	spacing: XY;
};

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 2, y: 1 },
				spacing: { x: 2, y: 1 }
			};
		case 'sm':
			return {
				padding: { x: 2.5, y: 1.25 },
				spacing: { x: 2.5, y: 1.25 }
			};
		case 'lg':
			return {
				padding: { x: 3.5, y: 1.75 },
				spacing: { x: 3.5, y: 1.75 }
			};
		case 'xl':
			return {
				padding: { x: 4, y: 2 },
				spacing: { x: 4, y: 2 }
			};
		default:
			return {
				padding: { x: 3, y: 1.5 },
				spacing: { x: 3, y: 1.5 }
			};
	}
};
