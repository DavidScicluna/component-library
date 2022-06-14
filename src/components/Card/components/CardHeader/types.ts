import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

type Omitted = 'children';

export type CardHeaderProps = {
	renderTitle?: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
} & Omit<StackProps, Omitted>;
