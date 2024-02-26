import type { ReactNode } from 'react';

import type {
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type CarouselDefaultElement = 'div';
export type CarouselElement = Extract<PolymorphicElementType, 'div'>;

export type CarouselItem = {
	key: string;
	index: number;
	child: ReactNode;
};
export type CarouselItems = Array<CarouselItem>;

export type CarouselVisibleItem = Record<CarouselItem['key'], boolean>;
export type CarouselVisibleItems = Array<CarouselVisibleItem>;

export type CarouselArrowDirection = 'left' | 'right';

export type CarouselScrollAmount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type CarouselOrientation = 'horizontal' | 'vertical';

export type CarouselVariant = CarouselArrowDirection | 'overlay' | 'hidden';

export type CarouselRenderActionProps = Pick<BoxProps<PolymorphicDefaultElement>, 'className'>;

type CarouselOtherProps = ThemeAppAppearanceProps & {
	renderDots?: () => ReactNode;
	renderLeftAction?: (variant: CarouselVariant, props?: CarouselRenderActionProps) => ReactNode;
	renderRightAction?: (variant: CarouselVariant, props?: CarouselRenderActionProps) => ReactNode;
	renderLeftLinearGradient?: () => ReactNode;
	renderRightLinearGradient?: () => ReactNode;
	divider?: ResponsiveValue<ReactNode>;
	scrollAmount?: ResponsiveValue<CarouselScrollAmount>;
	spacing?: ResponsiveValue<ThemeSpacing>;
	orientation?: ResponsiveValue<CarouselOrientation>;
	variant?: ResponsiveValue<CarouselVariant>;
};

export type CarouselProps<Element extends CarouselElement> = BoxProps<Element, CarouselOtherProps, true>;

export type CarouselRef<Element extends CarouselElement> = BoxRef<Element>;

type PickedCarouselProps = 'color' | 'colorMode' | 'id' | 'scrollAmount' | 'spacing' | 'orientation' | 'variant';
export type CarouselContext<Element extends CarouselElement> = Pick<CarouselProps<Element>, PickedCarouselProps> & {
	items: CarouselItems;
	visibleItems: CarouselVisibleItems;
};
