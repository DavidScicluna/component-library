import { ColorMode, TabsProps as CUITabsProps } from '@chakra-ui/react';

import { AppColor } from '../../../../../common/types';

export type TabsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Omitted =
	| 'color'
	| 'colorMode'
	| 'colorScheme'
	| 'defaultIndex'
	| 'index'
	| 'isLazy'
	| 'isManual'
	| 'lazyBehavior'
	| 'onChange'
	| 'size'
	| 'variant';

export type CommonTabsProps = Omit<CUITabsProps, Omitted> & {
	activeTab?: number;
	color?: AppColor;
	colorMode?: ColorMode;
	size?: TabsSize;
};
