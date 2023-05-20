import { Space } from '../../../../../theme/types';
import { size as defaultSize } from '../default/props';
import { TabsSize } from '../types';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigProps = { size: TabsSize };
export type GetSizeConfigReturn = {
	padding: Padding;
	spacing: Space; // In Space (Theme) Values;
};

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 2, y: 1 },
				spacing: 2
			};
		case 'sm':
			return {
				padding: { x: 2.5, y: 1.25 },
				spacing: 2.5
			};
		case 'lg':
			return {
				padding: { x: 3.5, y: 1.75 },
				spacing: 3.5
			};
		case 'xl':
			return {
				padding: { x: 4, y: 2 },
				spacing: 4
			};
		default:
			return {
				padding: { x: 3, y: 1.5 },
				spacing: 3
			};
	}
};
