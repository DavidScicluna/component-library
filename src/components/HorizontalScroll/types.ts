import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

import { Props as RHSMHorizontalScrollProps } from 'react-horizontal-scrolling-menu';

export type HorizontalScrollRef = HTMLDivElement | null;

export type RenderDividerProps = { padding?: string };

type Omitted = 'children' | 'Arrows';

export type HorizontalScrollProps = {
	children: ReactNode[];
	colorMode?: ColorMode;
	isFullWidth?: boolean;
	isDisabled?: boolean;
	renderDivider?: (props: RenderDividerProps) => ReactNode;
} & Omit<RHSMHorizontalScrollProps, Omitted>;

export type HorizontalScrollContext = Pick<HorizontalScrollProps, 'colorMode' | 'isDisabled'>;
