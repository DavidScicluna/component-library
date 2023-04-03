import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

import { DummyAccordionsProps } from '../../types';

export type DummyAccordionsPanelProps = Pick<DummyAccordionsProps, 'spacing'> & {
	children: (props: Pick<DummyAccordionsProps, 'accordions'>) => ReactNode;
} & Omit<StackProps, 'children' | 'direction' | 'spacing'>;
