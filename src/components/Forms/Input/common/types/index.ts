import { ChangeEvent as CE, FocusEvent as FE, ReactNode } from 'react';

import { InputProps as CUIInputProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { FormControlProps } from '../../../FormControl/common/types';

export type InputChangeEvent = CE<HTMLInputElement>;

export type InputFocusEvent = FE<HTMLInputElement, Element>;

export type InputAutoComplete = 'on' | 'password' | 'off';

export type InputRenderProps = Pick<InputProps, 'color' | 'colorMode'> & {
	width: number; // In Pixels
	height: number; // In Pixels
};

type Omitted =
	// CUI Box Props
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxPosition
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
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';

type Picked =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

export type InputProps = Omit<CUIInputProps, Omitted> & {
	autoComplete?: InputAutoComplete;
	renderLeft?: (props: InputRenderProps) => ReactNode;
	renderRight?: (props: InputRenderProps) => ReactNode;
} & Pick<FormControlProps, Picked>;

export type InputRef = Nullable<HTMLInputElement>;
