import { ChangeEvent as CE, FocusEvent as FE, ReactNode } from 'react';

import { ColorMode, InputProps as CUIInputProps } from '@chakra-ui/react';

import { Nullable, Style } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxGradient,
	BoxOther,
	BoxPadding,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { Color } from '../../../../../theme/types';

export type InputChangeEvent = CE<HTMLInputElement>;

export type InputFocusEvent = FE<HTMLInputElement, Element>;

export type InputAutoComplete = 'on' | 'password' | 'off';

export type InputColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type InputVariant = 'outlined' | 'transparent';

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

export type InputProps = Omit<CUIInputProps, Omitted> & {
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
	variant?: InputVariant;
	sx?: { group?: Style; input?: Style; formLabel?: Style; formHelperText?: Style };
};

export type InputRef = Nullable<HTMLInputElement>;
