import { ReactNode } from 'react';

import { CardProps } from '../../../../../Cards/OriginalCard/types';
import { HorizontalScrollAPIContext } from '../../../../../HorizontalScroll/types';
import { TabsProps } from '../../../../../Navigation/Tabs/OriginalTabs/types';
import { CommonHorizontalGridProps } from '../../../common/types';

export type HorizontalGridTabbedProps = CommonHorizontalGridProps & {
	children: ReactNode;
	tabsProps?: Omit<TabsProps, 'children' | 'colorMode' | 'isFitted'>;
	cardProps?: Omit<CardProps, 'children' | 'color' | 'colorMode'>;
};

export type HorizontalGridTabbedContext = Pick<HorizontalGridTabbedProps, 'color' | 'colorMode' | 'spacing'> & {
	scroll: HorizontalScrollAPIContext;
	onSetScroll: (scroll: HorizontalScrollAPIContext) => void;
};
