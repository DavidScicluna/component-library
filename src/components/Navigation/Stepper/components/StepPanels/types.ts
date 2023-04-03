import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

export type StepPanelsProps = Omit<CenterProps, 'children'> & {
	children: ReactNode[];
};
