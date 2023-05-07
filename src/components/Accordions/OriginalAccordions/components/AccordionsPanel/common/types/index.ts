import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

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
} from '../../../../../../../common/types/box';
import { AccordionsContext, AccordionsProps } from '../../../../common/types';

type AccordionsPanelChildrenProps<D> = Pick<AccordionsProps<D>, 'accordions'> & Pick<AccordionsContext<D>, 'opened'>;

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
	| 'children'
	| 'direction'
	| 'spacing';

export type AccordionsPanelProps<D> = Omit<StackProps, Omitted> & {
	children: (props: AccordionsPanelChildrenProps<D>) => ReactNode;
} & Pick<AccordionsProps<D>, 'spacing'>;
