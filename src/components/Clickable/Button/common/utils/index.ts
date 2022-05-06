import { Space } from '../../../../../theme/types';
import { Size } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type Padding = {
	x: Space; // In Space (Theme) Values
	y: Space; // In Space (Theme) Values
};

type Variants = {
	contained: number; // In Pixels
	outlined: number; // In Pixels
	text: number; // In Pixels
};

type GetSizeConfigReturn = {
	padding: Padding;
	border: number; // In Pixels
	spacing: Space; // In Space (Theme) Values
	transform: Variants;
	offset: Variants;
};

type GetSizeConfigProps = { size: Size };

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 0.5, y: 0.25 },
				border: 1,
				spacing: 0.5,
				transform: { contained: 3, outlined: 3, text: 0 },
				offset: { contained: 2, outlined: 2, text: 0 }
			};
		case 'sm':
			return {
				padding: { x: 1, y: 0.5 },
				border: 1,
				spacing: 1,
				transform: { contained: 3, outlined: 3, text: 0 },
				offset: { contained: 2, outlined: 2, text: 0 }
			};
		case 'lg':
			return {
				padding: { x: 4, y: 2 },
				border: 2,
				spacing: 2,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
			};
		case 'xl':
			return {
				padding: { x: 5, y: 3 },
				border: 2,
				spacing: 3,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
			};
		default:
			return {
				padding: { x: 2, y: 1 },
				border: 2,
				spacing: 1,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
			};
	}
};

type GetAmountReturn = {
	back: number;
	hover: number;
	active: number;
};

export const getAmount = (): GetAmountReturn => {
	return {
		back: 0.15,
		hover: 0.05,
		active: 0.1
	};
};

type GetIconFontSize = { size: Size };

export const getIconFontSize = ({ size = defaultSize }: GetIconFontSize): string => {
	switch (size) {
		case 'xs':
			return '14px'; // Height of theme xs font-size
		case 'sm':
			return '17px'; // Height of theme sm font-size
		case 'lg':
			return '23px'; // Height of theme lg font-size
		case 'xl':
			return '26px'; // Height of theme xl font-size
		default:
			return '20px'; // Height of theme md font-size
	}
};
