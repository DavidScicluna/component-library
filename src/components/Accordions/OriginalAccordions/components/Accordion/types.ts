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
} from '../../../../../common/types/box';
import { Accordion, AccordionsProps } from '../../types';

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

export type AccordionProps = Pick<Accordion, 'id'> &
	Pick<AccordionsProps, 'isDisabled' | 'spacing'> & {
		header: ReactNode;
		body: ReactNode;
		footer?: ReactNode;
		isActive?: boolean;
		isDivisible?: boolean;
		isLight?: boolean;
	} & Omit<CenterProps, Omitted>;

export type AccordionContext = { isOpen?: boolean } & Pick<AccordionProps, 'isDisabled' | 'isLight'>;
