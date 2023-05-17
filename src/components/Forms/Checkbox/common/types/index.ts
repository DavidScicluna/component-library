import { ReactNode } from 'react';

import { CheckboxProps as CUICheckboxProps } from '@chakra-ui/react';

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
	BoxLayout,
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { FormControlProps } from '../../../FormControl/common/types';

export type CheckboxVariant = 'outlined' | 'transparent';

export type CheckboxRenderProps = Pick<CheckboxProps, 'color' | 'colorMode'> & {
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
	| BoxLayout
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
	| 'children'
	| 'colorScheme'
	| 'icon'
	| 'iconColor'
	| 'iconSize'
	| 'isInvalid'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'spacing'
	| 'placeholder'
	| 'tabIndex'
	| 'onChange'
	| 'variant';

type Picked = 'color' | 'colorMode' | 'isDisabled' | 'isError' | 'isRequired' | 'isSuccess' | 'isWarning' | 'size';

export type CheckboxProps = Omit<CUICheckboxProps, Omitted> & {
	isCompact?: boolean;
	isRound?: boolean;
	renderLeft?: (props: CheckboxRenderProps) => ReactNode;
	renderRight?: (props: CheckboxRenderProps) => ReactNode;
	onChange?: (isChecked: boolean) => void;
	variant?: CheckboxVariant;
} & Pick<FormControlProps, Picked>;

export type CheckboxRef = Nullable<HTMLInputElement>;

export type CheckboxContext = Pick<CheckboxProps, 'color' | 'colorMode' | 'size'>;
