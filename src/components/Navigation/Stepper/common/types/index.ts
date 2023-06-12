import { ReactNode } from 'react';

import { BoxProps } from '@chakra-ui/react';

import { CommonThemeProps } from '../../../../../common/types';
import {
	BoxBackground,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

// export type StepperOrientation = 'horizontal' | 'vertical';

export type StepperSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type StepperVariant = 'dot' | 'icon';

type Omitted =
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'as'
	| 'onChange';

export type CommonStepperProps = Omit<BoxProps, Omitted> & {
	children: ReactNode;
	activeStep?: number;
	totalSteps?: number;
	isFitted?: boolean;
	// orientation?: StepperOrientation;
	size?: StepperSize;
	variant?: StepperVariant;
} & CommonThemeProps;
