import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../../common/types/box';
import { Space } from '../../../../theme/types';
import { Accordion } from '../../types';

type OnToggleProps = { id: Accordion['id'] };

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Center Props
	| 'as'
	| 'children'
	| 'color'
	| 'colorScheme';

export type AccordionProps = Pick<Accordion, 'id'> & {
	header: ReactNode;
	body: ReactNode;
	footer?: ReactNode;
	isActive?: boolean;
	isDisabled?: boolean;
	isDivisible?: boolean;
	isLight?: boolean;
	isOpen?: boolean;
	onToggle: (props?: OnToggleProps) => void;
	spacing?: Space;
} & Omit<CenterProps, Omitted>;

export type AccordionContext = Pick<AccordionProps, 'isDisabled' | 'isLight' | 'isOpen'>;
