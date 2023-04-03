import { ReactNode } from 'react';

import { HorizontalScrollProps } from '../../types';

export type ChildProps = {
	children: ReactNode;
	itemId: string;
	isLast: boolean;
} & Pick<HorizontalScrollProps, 'renderDivider'>;
