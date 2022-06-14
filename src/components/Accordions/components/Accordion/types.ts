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
import { Accordion } from '../../types';

type Children = {
	header: ReactNode;
	body: ReactNode;
};

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

export type AccordionProps = Accordion & {
	children: Children;
	isActive?: boolean;
	isDisabled?: boolean;
	isDivisible?: boolean;
	isOpen?: boolean;
	onToggle: (props?: OnToggleProps) => void;
} & Omit<CenterProps, Omitted>;

export type AccordionContext = { isHovering?: boolean } & Pick<AccordionProps, 'isOpen' | 'isDisabled'>;
