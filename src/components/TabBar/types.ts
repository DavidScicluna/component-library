import { ColorMode } from '@chakra-ui/react';

import { Tab } from './components/Tab/types';

import { Color } from '../../theme/types';

export type TabBarRef = HTMLDivElement | null;

export type TabBarColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type TabBarProps = {
	color: TabBarColor;
	colorMode?: ColorMode;
	activeTab: number;
	tabs: Tab[];
	onChange: (index: number) => void;
};
