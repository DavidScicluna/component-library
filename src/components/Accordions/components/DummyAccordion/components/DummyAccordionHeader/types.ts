import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

type Omitted = 'children';

export type DummyAccordionHeaderProps = {
	actions?: ReactNode;
	hasSubtitle?: boolean;
} & Omit<StackProps, Omitted>;
