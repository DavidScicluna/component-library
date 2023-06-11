import { ReactNode } from 'react';

import { GridProps } from '@chakra-ui/react';

import {
	BoxBackground,
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
} from '../../../../../../../../common/types/box';
import { StepperProps } from '../../../../common/types';
import { Step } from '../../components/Step/common/types';

export type StepListRenderProps = Pick<StepperProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

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
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'as'
	| 'children';

export type StepListProps = Omit<GridProps, Omitted> & {
	steps: Step[];
	renderLeft?: (props: StepListRenderProps) => ReactNode;
	renderRight?: (props: StepListRenderProps) => ReactNode;
};
