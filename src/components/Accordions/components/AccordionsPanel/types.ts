import { StackProps } from '@chakra-ui/react';

import { AccordionsProps } from '../../OriginalAccordions/types';

export type AccordionsPanelProps = Pick<AccordionsProps, 'spacing'> & Omit<StackProps, 'direction' | 'spacing'>;
