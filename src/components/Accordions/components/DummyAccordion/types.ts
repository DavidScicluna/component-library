import { ReactNode } from 'react';

import { AccordionProps } from '../Accordion/types';

type Omitted =
	// CUI Accordion Props
	'header' | 'body' | 'footer' | 'isActive' | 'isDisabled' | 'isDivisible' | 'spacing';

export type DummyAccordionProps = { children: ReactNode } & Omit<AccordionProps, Omitted>;
