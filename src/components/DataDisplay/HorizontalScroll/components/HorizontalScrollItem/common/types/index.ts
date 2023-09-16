import type { ElementType } from 'react';

import type { HorizontalScrollProps } from '@components/DataDisplay/HorizontalScroll';
import type { HStackProps, HStackRef } from '@components/Layout';

type HorizontalScrollItemOtherProps<Element extends ElementType> = Pick<
	HorizontalScrollProps<Element>,
	'renderDivider'
> & {
	itemId: string;
	isLast: boolean;
};

export type HorizontalScrollItemProps<Element extends ElementType> = HStackProps<Element> &
	HorizontalScrollItemOtherProps<Element>;

export type HorizontalScrollItemRef<Element extends ElementType> = HStackRef<Element>;
