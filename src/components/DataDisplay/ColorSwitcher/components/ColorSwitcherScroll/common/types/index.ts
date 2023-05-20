import { ReactNode } from 'react';

import { HorizontalScrollProps, HorizontalScrollRef } from '../../../../../HorizontalScroll/common/types';
import { ColorSwitcherContext } from '../../../../common/types';

export type ColorSwitcherScrollRenderItemProps = Pick<ColorSwitcherContext, 'color' | 'colorMode' | 'onChange'> & {
	isActive?: boolean;
};

export type ColorSwitcherScrollProps = Omit<HorizontalScrollProps, 'colorMode' | 'renderDivider'> & {
	renderItem: (props: ColorSwitcherScrollRenderItemProps) => ReactNode;
};

export type ColorSwitcherScrollRef = HorizontalScrollRef;
