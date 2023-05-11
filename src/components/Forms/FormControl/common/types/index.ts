import { ColorMode, FormControlProps as CUIFormControlProps, StackProps } from '@chakra-ui/react';

import { AppColor, Nullable } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

export type FormControlSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type OmittedBoxProps =
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
	| 'size';

type OmittedStackProps =
	| OmittedBoxProps
	| 'align'
	| 'direction'
	| 'divider'
	| 'isInline'
	| 'justify'
	| 'shouldWrapChildren'
	| 'wrap'
	| 'size';

export type FormControlProps = Omit<CUIFormControlProps, OmittedBoxProps | 'label'> & {
	color?: AppColor;
	colorMode?: ColorMode;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isFocused?: boolean;
	size?: FormControlSize;
} & Omit<StackProps, OmittedStackProps>;

export type FormControlRef = Nullable<HTMLInputElement>;

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

export type FormControlContext = Pick<FormControlProps, Picked>;
