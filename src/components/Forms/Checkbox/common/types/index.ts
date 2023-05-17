import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

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
	| 'as'
	| 'children';

type Picked = 'color' | 'colorMode' | 'isDisabled' | 'isError' | 'isRequired' | 'isSuccess' | 'isWarning' | 'size';

export type CheckboxProps = Pick<FormControlProps, Picked> & {
	isChecked?: boolean;
	isCompact?: boolean;
	isIndeterminate?: boolean;
	isRound?: boolean;
	renderLeft?: (props: CheckboxRenderProps) => ReactNode;
	renderRight?: (props: CheckboxRenderProps) => ReactNode;
	onChange?: (isChecked: boolean) => void;
	variant?: CheckboxVariant;
} & Omit<CenterProps, Omitted>;

export type CheckboxRef = Nullable<HTMLInputElement>;

export type CheckboxContext = Pick<CheckboxProps, 'color' | 'colorMode' | 'size'>;
