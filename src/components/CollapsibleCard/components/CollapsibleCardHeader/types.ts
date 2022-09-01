import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

export type CollapsibleCardHeaderProps = Omit<StackProps, 'children' | 'direction'> & {
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
};
