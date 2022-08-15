import { ReactNode, FocusEvent as FE } from 'react';

import { ColorMode, InputProps as CUIInputProps } from '@chakra-ui/react';

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

export type FocusEvent = FE<HTMLInputElement, Element>;

export type InputRef = HTMLInputElement | null;

export type InputAutoComplete = 'on' | 'password' | 'off';

export type InputColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray' | 'red' | 'yellow' | 'green'>;

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type InputPanelRenderProps = {
	color: InputColor;
	colorMode?: ColorMode;
	width: string; // In Pixels
	height: string; // In Pixels
	fontSize: string; // In Pixels
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
	| 'autoComplete'
	| 'colorScheme'
	| 'errorBorderColor'
	| 'focusBorderColor'
	| 'htmlSize'
	| 'isInvalid'
	| 'size'
	| 'variant'
	| 'sx';

export type InputProps = {
	autoComplete?: InputAutoComplete;
	color: InputColor;
	colorMode?: ColorMode;
	label?: string;
	helper?: string;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isFocused?: boolean;
	isFullWidth?: boolean;
	renderLeftPanel?: (props: InputPanelRenderProps) => ReactNode;
	renderRightPanel?: (props: InputPanelRenderProps) => ReactNode;
	size?: InputSize;
	sx?: { group?: Style; input?: Style; formLabel?: Style; formHelperText?: Style };
} & Omit<CUIInputProps, Omitted>;
