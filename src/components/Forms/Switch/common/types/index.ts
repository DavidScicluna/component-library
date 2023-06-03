import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

import { Nullable } from '../../../../..';
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

export type SwitchRenderProps = Pick<SwitchProps, 'color' | 'colorMode' | 'isChecked'> & {
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
	| 'children'
	| 'onChange';

type Picked =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

export type SwitchProps = Pick<FormControlProps, Picked> & {
	renderOnLabel?: (props: SwitchRenderProps) => ReactNode;
	renderOffLabel?: (props: SwitchRenderProps) => ReactNode;
	renderThumbIcon?: (props: SwitchRenderProps) => ReactNode;
	isChecked?: boolean;
	onChange?: (isChecked: boolean) => void;
} & Omit<CenterProps, Omitted>;

export type SwitchRef = Nullable<HTMLDivElement>;
