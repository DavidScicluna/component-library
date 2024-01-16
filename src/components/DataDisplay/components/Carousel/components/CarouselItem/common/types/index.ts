import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type CarouselItemOtherProps = { onToggleVisibility: (isVisible: boolean) => void };

export type CarouselItemProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	CarouselItemOtherProps
>;

export type CarouselItemRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
