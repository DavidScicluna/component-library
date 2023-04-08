import { ColorMode, TabsProps as CUITabsProps } from '@chakra-ui/react';

import { Color } from '../../../../../theme/types';

export type TabsColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

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
	color?: TabsColor;
	colorMode?: ColorMode;
	size?: TabsSize;
};
