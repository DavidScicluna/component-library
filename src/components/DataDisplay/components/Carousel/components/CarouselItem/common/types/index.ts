import type { ElementType } from 'react';

import type { BoxProps, BoxRef } from '@components/Box';

type CarouselItemOtherProps = { onToggleIsVisible: (isVisible: boolean) => void };

export type CarouselItemProps<Element extends ElementType> = BoxProps<Element> & CarouselItemOtherProps;

export type CarouselItemRef<Element extends ElementType> = BoxRef<Element>;
