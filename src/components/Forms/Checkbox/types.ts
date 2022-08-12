import { FocusEvent, ReactNode } from 'react';

import { ColorMode, CheckboxProps as CUICheckboxProps } from '@chakra-ui/react';

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

export type Event = FocusEvent<HTMLInputElement, Element>;

export type CheckboxRef = HTMLInputElement | null;

export type CheckboxColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray' | 'red' | 'yellow' | 'green'>;

export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CheckboxVariant = 'outlined' | 'transparent';

export type CheckboxPanelRenderProps = {
	// width: number;
	// height: number;
	// fontSize: CheckboxSize;
	color: CheckboxColor;
	colorMode?: ColorMode;
};

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
	// CUI Input Props
	| 'as'
	| 'children'
	| 'colorScheme'
	| 'iconColor'
	| 'iconSize'
	| 'isRequired'
	| 'size'
	| 'spacing'
	| 'placeholder'
	| 'tabIndex'
	| 'variant'
	| 'sx';

export type CheckboxProps = {
	color: CheckboxColor;
	colorMode?: ColorMode;
	label?: string;
	helper?: string;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isRequired?: boolean;
	isFullWidth?: boolean;
	renderLeftPanel?: (props: CheckboxPanelRenderProps) => ReactNode;
	renderRightPanel?: (props: CheckboxPanelRenderProps) => ReactNode;
	size?: CheckboxSize;
	variant?: CheckboxVariant;
	sx?: { group?: Style; checkbox?: Style; formLabel?: Style; formHelperText?: Style };
} & Omit<CUICheckboxProps, Omitted>;

export type CheckboxContext = Pick<CheckboxProps, 'color' | 'colorMode' | 'size'>;
