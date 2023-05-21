import { TabsProps } from '@chakra-ui/react';

import { CommonThemeProps } from '../../../../../common/types';

export type TabBarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Omitted =
	| 'color'
	| 'colorMode'
	| 'colorScheme'
	| 'defaultIndex'
	| 'index'
	| 'isFitted'
	| 'isLazy'
	| 'isManual'
	| 'lazyBehavior'
	| 'onChange'
	| 'size'
	| 'variant';

export type CommonTabBarProps = Omit<TabsProps, Omitted> & {
	activeTab?: number;

	size?: TabBarSize;
} & CommonThemeProps;
