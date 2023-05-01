import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

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
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography
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

export type AccordionProps<D> = Pick<Accordion<D>, 'id'> &
	Pick<AccordionsProps<D>, 'isDisabled' | 'spacing'> & {
		header: ReactNode;
		body: ReactNode;
		footer?: ReactNode;
		isActive?: boolean;
		isDivisible?: boolean;
		isFixed?: boolean;
		isLight?: boolean;
	} & Omit<CenterProps, Omitted>;

export type AccordionContext<D> = { isOpen?: boolean } & Pick<AccordionProps<D>, 'isDisabled' | 'isLight'>;
