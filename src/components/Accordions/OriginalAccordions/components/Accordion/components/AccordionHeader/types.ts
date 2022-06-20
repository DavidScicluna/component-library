import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

type Omitted = 'children';

export type AccordionHeaderProps = {
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
} & Omit<StackProps, Omitted>;
