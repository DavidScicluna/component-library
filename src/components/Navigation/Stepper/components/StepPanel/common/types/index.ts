import { StackProps } from '@chakra-ui/react';

import { Step } from '../../../StepList/components/Step/common/types';

export type StepPanelProps = Omit<StackProps, 'width' | 'direction' | 'divider'> & {
	total: number;
} & Omit<Step, 'status' | 'isDisabled'>;
