import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

export type BadgeLabelProps = {
	children: ReactNode;
} & Omit<CenterProps, 'children'>;
