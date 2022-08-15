import { memoize } from 'lodash';

import { Space } from '../../../../../theme/types';
import { TextareaSize } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type GetSizeConfigReturn = {
	height: number; // In Pixels
	border: number; // In Pixels
	panel: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	padding: Padding;
};

type GetSizeConfigProps = { size: TextareaSize };

export const getSizeConfig = memoize(({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				height: 45,
				border: 1,
				panel: 16,
				spacing: 0.5,
				padding: { x: 1, y: 0.5 }
			};
		case 'sm':
			return {
				height: 54,
				border: 1,
				panel: 18,
				spacing: 0.75,
				padding: { x: 1.5, y: 0.75 }
			};
		case 'lg':
			return {
				height: 75,
				border: 2,
				panel: 24,
				spacing: 1.25,
				padding: { x: 2.5, y: 1.25 }
			};
		case 'xl':
			return {
				height: 90,
				border: 2,
				panel: 30,
				spacing: 1.5,
				padding: { x: 3, y: 1.5 }
			};
		default:
			return {
				height: 63,
				border: 2,
				panel: 20,
				spacing: 1,
				padding: { x: 2, y: 1 }
			};
	}
});

type GetAmountReturn = {
	back: number;
	hover: number;
	active: number;
	selection: number;
	placeholder: number;
};

export const getAmount = (): GetAmountReturn => {
	return {
		back: 0.15,
		hover: 0.05,
		active: 0.1,
		selection: 0,
		placeholder: 0.25
	};
};

type GetIconFontSizeProps = { size: TextareaSize };

export const getIconFontSize = ({ size = defaultSize }: GetIconFontSizeProps): string => {
	switch (size) {
		case 'xs':
			return '18px';
		case 'sm':
			return '21px';
		case 'lg':
			return '27px';
		case 'xl':
			return '30px';
		default:
			return '24px';
	}
};
