import { ReactNode } from 'react';

import { ColorMode } from '@chakra-ui/react';

// import { Props as RHSMHorizontalScrollProps } from 'react-horizontal-scrolling-menu';

export type HorizontalScrollRef = HTMLDivElement | null;

// type Omitted = 'Arrows' | 'LeftArrow' | 'RightArrow' | 'children';

export type HorizontalScrollProps = {
	children: ReactNode[];
	colorMode?: ColorMode;
	isFullWidth?: boolean;
	isDisabled?: boolean;
	renderDivider?: (props: { padding?: string }) => ReactNode;
};
// & Omit<RHSMHorizontalScrollProps, Omitted>;

export type HorizontalScrollContext = Pick<HorizontalScrollProps, 'colorMode' | 'isDisabled'>;
