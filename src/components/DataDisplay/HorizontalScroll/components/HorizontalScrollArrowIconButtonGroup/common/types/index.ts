import type { ElementType } from 'react';

import type { IconButtonGroupProps, IconButtonGroupRef } from '@components/Buttons/IconButtonGroup';
import type { HorizontalScrollAPIContext, HorizontalScrollProps } from '@components/DataDisplay/HorizontalScroll';

type HorizontalScrollArrowIconButtonGroupOtherProps = Pick<HorizontalScrollProps, 'LeftArrow' | 'RightArrow'> & {
	scroll: HorizontalScrollAPIContext;
};

export type HorizontalScrollArrowIconButtonGroupProps<Element extends ElementType> = IconButtonGroupProps<Element> &
	HorizontalScrollArrowIconButtonGroupOtherProps;

export type HorizontalScrollArrowIconButtonGroupRef<Element extends ElementType> = IconButtonGroupRef<Element>;
