import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

export type DummyCardHeaderProps = {
	hasTitle?: boolean;
	hasSubtitle?: boolean;
	actions?: ReactNode;
} & Omit<StackProps, 'children'>;
