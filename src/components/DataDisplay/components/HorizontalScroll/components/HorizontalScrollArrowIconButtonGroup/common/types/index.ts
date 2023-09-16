import type { ElementType } from 'react';

import type { IconButtonGroupProps, IconButtonGroupRef } from '@components/Buttons/IconButtonGroup';
import type {
	HorizontalScrollAPIContext,
	HorizontalScrollProps
} from '@components/DataDisplay/components/HorizontalScroll';

type HorizontalScrollArrowIconButtonGroupOtherProps<Element extends ElementType> = {
	scroll?: HorizontalScrollAPIContext;
} & Pick<HorizontalScrollProps<Element>, 'LeftArrow' | 'RightArrow'>;

export type HorizontalScrollArrowIconButtonGroupProps<Element extends ElementType> = IconButtonGroupProps<Element> &
	HorizontalScrollArrowIconButtonGroupOtherProps<Element>;

export type HorizontalScrollArrowIconButtonGroupRef<Element extends ElementType> = IconButtonGroupRef<Element>;
