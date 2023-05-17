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

export type RadioVariant = 'outlined' | 'transparent';

export type RadioRenderProps = Pick<RadioProps, 'color' | 'colorMode'> & {
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

export type RadioProps = Pick<FormControlProps, Picked> & {
	isChecked?: boolean;
	isCompact?: boolean;
	isRound?: boolean;
	renderLeft?: (props: RadioRenderProps) => ReactNode;
	renderRight?: (props: RadioRenderProps) => ReactNode;
	onChange?: (isChecked: boolean) => void;
	variant?: RadioVariant;
} & Omit<CenterProps, Omitted>;

export type RadioRef = Nullable<HTMLInputElement>;

export type RadioContext = Pick<RadioProps, 'color' | 'colorMode' | 'size'>;
