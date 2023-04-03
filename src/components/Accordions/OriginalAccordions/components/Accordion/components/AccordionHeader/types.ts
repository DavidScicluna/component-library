import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

export type AccordionHeaderProps = {
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
} & Omit<StackProps, 'children' | 'direction'>;
