import { Space } from '../../../../../theme/types';
import { Size, Variant } from '../../types';

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

export const getSizeConfig = ({ size = 'md' }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				padding: { x: 0.5, y: 0 },
				border: 1,
				spacing: 0.5,
				transform: { contained: 2, outlined: 2, text: 0 },
				offset: { contained: 2, outlined: 2, text: 0 }
			};
		case 'sm':
			return {
				padding: { x: 1, y: 0.25 },
				border: 1,
				spacing: 1,
				transform: { contained: 2, outlined: 2, text: 0 },
				offset: { contained: 2, outlined: 2, text: 0 }
			};
		case 'lg':
			return {
				padding: { x: 3, y: 0.75 },
				border: 2,
				spacing: 3,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
			};
		case 'xl':
			return {
				padding: { x: 4, y: 1 },
				border: 2,
				spacing: 4,
				transform: { contained: 4, outlined: 4, text: 0 },
				offset: { contained: 4, outlined: 4, text: 0 }
			};
		default:
			return {
				padding: { x: 2, y: 0.5 },
				border: 2,
				spacing: 2,
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

type GetAmountProps = { variant: Variant };

export const getAmount = ({ variant = 'contained' }: GetAmountProps): GetAmountReturn => {
	return {
		back: variant === 'contained' ? 0.15 : 0,
		hover: 0.1,
		active: 0.15
	};
};

type GetIconFontSize = { size: Size };

export const getIconFontSize = ({ size = 'md' }: GetIconFontSize): string => {
	switch (size) {
		case 'xs':
			return '16px'; // Height of theme xs font-size
		case 'sm':
			return '19px'; // Height of theme sm font-size
		case 'lg':
			return '25px'; // Height of theme lg font-size
		case 'xl':
			return '28px'; // Height of theme xl font-size
		default:
			return '22px'; // Height of theme md font-size
	}
};
