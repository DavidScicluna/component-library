import { ReactNode } from 'react';

import { AccordionProps } from '../../../OriginalAccordions/components/Accordion/types';

type Omitted = 'id' | 'header' | 'body' | 'footer' | 'isActive' | 'isDisabled' | 'isDivisible' | 'spacing';

export type DummyAccordionProps = {
	children: ReactNode;
} & Omit<AccordionProps<unknown>, Omitted>;
