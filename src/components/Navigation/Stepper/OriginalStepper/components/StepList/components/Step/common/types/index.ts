import { MouseEvent as ME } from 'react';

import { StackProps } from '@chakra-ui/react';

import { Style } from '../../../../../../../../../../common/types';
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
} from '../../../../../../../../../../common/types/box';

export type StepMouseEvent = ME<HTMLDivElement, globalThis.MouseEvent>;

export type StepStatus = 'idle' | 'success' | 'error' | 'warning' | 'active';

export type Step = {
	index: number;
	title: string;
	subtitle?: string;
	isActive?: boolean;
	isDisabled?: boolean;
	isSelected?: boolean;
	status: StepStatus;
	steps?: Steps;
	sx?: Style;
};
export type Steps = Step[];

type Omitted =
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
	| 'direction'
	| 'onSelect'
	| 'sx';

export type StepProps = Omit<StackProps, Omitted> & {
	index: number;
	panelId?: string;
	onSelect: (index: number) => void;
} & Step;
