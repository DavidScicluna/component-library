import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type CarouselItemOtherProps = { onToggleIsVisible: (isVisible: boolean) => void };

export type CarouselItemProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element> &
	CarouselItemOtherProps;

export type CarouselItemRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
