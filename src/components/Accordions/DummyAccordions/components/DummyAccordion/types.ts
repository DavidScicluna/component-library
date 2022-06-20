import { ReactNode } from 'react';

import { AccordionProps } from '../../../OriginalAccordions/components/Accordion/types';

export type DummyAccordionProps = {
	children: ReactNode;
} & Omit<AccordionProps, 'header' | 'body' | 'footer' | 'isActive' | 'isDisabled' | 'isDivisible' | 'spacing'>;
