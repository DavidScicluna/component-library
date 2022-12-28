import { FocusEvent } from 'react';

import { ColorMode, StackProps } from '@chakra-ui/react';

import { Style } from '../../../common/types';
import {
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Color } from '../../../theme/types';
import { IconType } from '../../..';

export type Event = FocusEvent<HTMLInputElement, Element>;

export type RatingColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type RatingIcons = { active: IconType; default: IconType };

export type RatingOnChangeProps = { rating: number };

export type RatingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type RatingVariant = 'outlined' | 'transparent';

type Omitted =
	// CUI Box Props
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'as'
	| 'children'
	| 'direction'
	| 'onChange'
	| 'sx';

export type RatingProps = Omit<StackProps, Omitted> & {
	color: RatingColor;
	colorMode?: ColorMode;
	id?: string;
	name?: string;
	label?: string;
	helper?: string;
	icons?: RatingIcons;
	isDisabled?: boolean;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isRequired?: boolean;
	isReadOnly?: boolean;
	isFullWidth?: boolean;
	ratings?: number;
	onChange?: (props: RatingOnChangeProps) => void;
	size?: RatingSize;
	variant?: RatingVariant;
	value: number[];
	sx?: { group?: Style; rating?: Style; formLabel?: Style; formHelperText?: Style };
};
