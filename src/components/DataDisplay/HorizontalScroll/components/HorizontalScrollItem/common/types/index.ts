import type { ElementType } from 'react';

import type { HorizontalScrollProps } from '@components/DataDisplay/HorizontalScroll';
import type { HStackProps, HStackRef } from '@components/Layout';

type HStackOtherProps = Pick<HorizontalScrollProps, 'renderDivider'> & {
	itemId: string;
	isLast: boolean;
};

export type HorizontalScrollItemProps<Element extends ElementType> = HStackProps<Element> & HStackOtherProps;

export type HorizontalScrollItemRef<Element extends ElementType> = HStackRef<Element>;
