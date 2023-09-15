import type { ContextType, ElementType, ReactNode } from 'react';
import type { Props, VisibilityContext } from 'react-horizontal-scrolling-menu';

import type { ThemeAppAppearanceProps, ThemeSpacing } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type HorizontalScrollArrowDirection = 'left' | 'right';

export type HorizontalScrollArrowSize = { w: number; h: number };

export type HorizontalScrollAPIContext = ContextType<typeof VisibilityContext>;

export type HorizontalScrollVariant = HorizontalScrollArrowDirection | 'overlay' | 'hidden';

type HorizontalScrollOtherProps = ThemeAppAppearanceProps & {
	renderDivider?: (spacing: ThemeSpacing) => ReactNode;
	// children: Array<ReactNode>;
	spacing?: ThemeSpacing;
	variant?: HorizontalScrollVariant;
} & Omit<Props, 'children' | 'Arrow' | 'transitionDuration' | 'transitionBehavior' | 'transitionEase'>;

export type HorizontalScrollProps<Element extends ElementType> = BoxProps<Element, HorizontalScrollOtherProps>;

export type HorizontalScrollRef<Element extends ElementType> = BoxRef<Element>;

export type HorizontalScrollContext<Element extends ElementType> = {
	arrowSize?: HorizontalScrollArrowSize;
} & Pick<HorizontalScrollProps<Element>, 'color' | 'colorMode' | 'spacing'>;
