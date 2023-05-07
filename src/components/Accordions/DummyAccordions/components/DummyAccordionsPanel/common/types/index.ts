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
import { DummyAccordionsProps } from '../../../../common/types';

type DummyAccordionsPanelChildrenProps = Pick<DummyAccordionsProps, 'accordions'>;

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

export type DummyAccordionsPanelProps = Omit<StackProps, Omitted> & {
	children: (props: DummyAccordionsPanelChildrenProps) => ReactNode;
} & Pick<DummyAccordionsProps, 'spacing'>;
