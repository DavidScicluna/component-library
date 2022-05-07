import { Space } from '../../../../../theme/types';
import { Size } from '../../types';
import { size as defaultSize } from '../data/defaultPropValues';

type Variants = {
	contained: number; // In Pixels
	outlined: number; // In Pixels
	icon: number; // In Pixels
};

type GetSizeConfigReturn = {
	height: number; // In Pixels
	padding: Space; // In Space (Theme) Values
	border: number; // In Pixels
	transform: Variants;
	offset: Variants;
};

type GetSizeConfigProps = { size: Size };

export const getSizeConfig = ({ size = defaultSize }: GetSizeConfigProps): GetSizeConfigReturn => {
	switch (size) {
		case 'xs':
			return {
				height: 30,
				padding: 1,
				border: 1,
				transform: { contained: 3, outlined: 3, icon: 0 },
				offset: { contained: 2, outlined: 2, icon: 0 }
			};
		case 'sm':
			return {
				height: 36,
				padding: 1.5,
				border: 1,
				transform: { contained: 3, outlined: 3, icon: 0 },
				offset: { contained: 2, outlined: 2, icon: 0 }
			};
		case 'lg':
			return {
				height: 50,
				padding: 2.5,
				border: 2,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
			};
		case 'xl':
			return {
				height: 60,
				padding: 3,
				border: 2,
				transform: { contained: 4, outlined: 4, icon: 0 },
				offset: { contained: 4, outlined: 4, icon: 0 }
			};
		default:
			return {
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

type GetIconFontSizeProps = { size: Size };

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
