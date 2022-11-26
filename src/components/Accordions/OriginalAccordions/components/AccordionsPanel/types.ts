import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

import { AccordionsContext, AccordionsProps } from '../../types';

type AccordionsPanelChildrenProps<D> = Pick<AccordionsProps<D>, 'accordions'> & Pick<AccordionsContext<D>, 'opened'>;

export type AccordionsPanelProps<D> = Pick<AccordionsProps<D>, 'spacing'> & {
	children: (props: AccordionsPanelChildrenProps<D>) => ReactNode;
} & Omit<StackProps, 'children' | 'direction' | 'spacing'>;
