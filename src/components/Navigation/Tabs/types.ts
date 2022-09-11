import { ColorMode, TabsProps as CUITabsProps } from '@chakra-ui/react';

import { Color } from '../../../theme/types';

export type TabsRef = HTMLDivElement | null;

export type TabsColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type TabsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type OnChangeProps = { index: number };

type Omitted = 'colorScheme' | 'defaultIndex' | 'index' | 'isManual' | 'onChange' | 'size' | 'variant';

export type TabsProps = Omit<CUITabsProps, Omitted> & {
	activeTab?: number;
	color?: TabsColor;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	onChange?: (props: OnChangeProps) => void;
	size?: TabsSize;
};

type Picked = 'activeTab' | 'color' | 'colorMode' | 'isDisabled' | 'isFitted' | 'onChange' | 'size';

export type TabsContext = Pick<TabsProps, Picked>;
