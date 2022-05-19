import { Space } from '../../../../../theme/types';
import { IconButtonSize } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type Variants = {
	contained: number; // In Pixels
	outlined: number; // In Pixels
	icon: number; // In Pixels
};

type GetSizeConfigReturn = {
	width: number; // In Pixels
	height: number; // In Pixels
	padding: Space; // In Space (Theme) Values
	border: number; // In Pixels
	transform: Variants;
	offset: Variants;
};

type GetSizeConfigProps = { size: IconButtonSize };

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				width: 30,
				height: 30,
				padding: 1,
				border: 1,
				transform: { contained: 3, outlined: 3, icon: 0 },
				offset: { contained: 2, outlined: 2, icon: 0 }
			};
		case 'sm':
			return {
				width: 36,
				height: 36,
				padding: 1.5,
				border: 1,
				transform: { contained: 3, outlined: 3, icon: 0 },
				offset: { contained: 2, outlined: 2, icon: 0 }
			};
		case 'lg':
			return {
				width: 50,
				height: 50,
				padding: 2.5,
				border: 2,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
			};
		case 'xl':
			return {
				width: 60,
				height: 60,
				padding: 3,
				border: 2,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
			};
		default:
			return {
				width: 42,
				height: 42,
				padding: 2,
				border: 2,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
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

type GetIconFontSizeProps = { size: IconButtonSize };

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
