import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

import { Space } from '../../../../theme/types';

type Omitted = 'children' | 'spacing';

export type HeaderProps = {
	renderTitle?: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	actions?: ReactNode;
	spacing?: Space;
} & Omit<StackProps, Omitted>;
