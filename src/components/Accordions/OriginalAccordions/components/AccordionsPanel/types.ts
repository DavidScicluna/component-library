import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

import { AccordionsProps } from '../../types';

export type AccordionsPanelProps<D> = Pick<AccordionsProps<D>, 'spacing'> & {
	children: (props: Pick<AccordionsProps<D>, 'accordions'>) => ReactNode;
} & Omit<StackProps, 'children' | 'direction' | 'spacing'>;
