import { ColorMode, TabsProps } from '@chakra-ui/react';

import { AppColor } from '../../../../../common/types';

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
	color?: AppColor;
	colorMode?: ColorMode;
	size?: TabBarSize;
};
