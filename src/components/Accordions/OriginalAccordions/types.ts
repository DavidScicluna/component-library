import { ColorMode, StackProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Color, Space } from '../../../theme/types';

export type AccordionsRef = HTMLDivElement | null;

export type AccordionsColor = Exclude<Color, 'transparent' | 'black' | 'white'>;

export type Accordion = {
	id: string;
	title: string;
};

export type OpenedAccordion = Accordion['id'];

export type OpenedAccordions = OpenedAccordion[];

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Stack Props
	| 'as'
	| 'colorScheme'
	| 'direction'
	| 'spacing';

export type AccordionsProps = {
	accordions: Accordion[];
	color?: AccordionsColor;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	isFullWidth?: boolean;
	spacing?: Space;
} & Omit<StackProps, Omitted>;

type Picked = 'accordions' | 'color' | 'colorMode' | 'isDisabled' | 'isFullWidth' | 'spacing';

export type AccordionsContext = {
	opened: OpenedAccordions;
	setOpened: (opened: OpenedAccordions) => void;
} & Pick<AccordionsProps, Picked>;
