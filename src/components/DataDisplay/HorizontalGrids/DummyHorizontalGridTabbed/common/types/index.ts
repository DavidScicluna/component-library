import { ReactNode } from 'react';

import { DummyCardProps } from '../../../../../Cards/DummyCard/common/types';
import { DummyTabsProps } from '../../../../../Navigation/Tabs/DummyTabs/common/types';
import { CommonHorizontalGridProps } from '../../../common/types';

export type DummyHorizontalGridTabbedProps = CommonHorizontalGridProps & {
	children: ReactNode;
	dummyTabsProps?: Omit<DummyTabsProps, 'children' | 'colorMode' | 'isFitted'>;
	dummyCardProps?: Omit<DummyCardProps, 'children' | 'color' | 'colorMode'>;
};

export type DummyHorizontalGridTabbedContext = Pick<DummyHorizontalGridTabbedProps, 'color' | 'colorMode' | 'spacing'>;
