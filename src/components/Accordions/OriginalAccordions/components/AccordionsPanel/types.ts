import { StackProps } from '@chakra-ui/react';

import { AccordionsProps } from '../../types';

export type AccordionsPanelProps = Pick<AccordionsProps, 'spacing'> & Omit<StackProps, 'direction' | 'spacing'>;
