import type { ElementType, ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeSpacing } from '@common/types';

import { Box } from '@components/Box';
import { useCarouselContext, useCarouselManager } from '@components/DataDisplay/components/Carousel/common/hooks';

import { __DEFAULT_CAROUSEL_DOTS_SIZE__ } from '../../common/constants';

import { useCarouselDotClasses } from './common/hooks';
import { __KEYS_CAROUSEL_DOT_CLASS__ } from './common/keys';
import type { CarouselDotProps, CarouselDotRef } from './common/types';

const CarouselDot = forwardRef(function CarouselDot<Element extends ElementType = PolymorphicDefaultElement>(
	props: CarouselDotProps<Element>,
	ref: CarouselDotRef<Element>
): ReactElement {
	const { color: __DEFAULT_CAROUSEL_DOT_COLOR__, colorMode: __DEFAULT_CAROUSEL_DOT_COLORMODE__ } =
		useCarouselContext();
	const { isItemVisible, scrollToItem } = useCarouselManager();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_CAROUSEL_DOT_COLOR__,
		colorMode = __DEFAULT_CAROUSEL_DOT_COLORMODE__,
		item,
		scale,
		size: si = __DEFAULT_CAROUSEL_DOTS_SIZE__,
		...rest
	} = props;

	const size = useGetResponsiveValue<ThemeSpacing>(si);

	const isVisible = useMemo(() => isItemVisible(item.key), [item.key]);

	const classes = useCarouselDotClasses<Element>({ color, colorMode, isVisible, size });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_DOT_CLASS__, classes.item, {
				[classes.scale100]: scale === 100,
				[classes.scale75]: scale === 75,
				[classes.scale50]: scale === 50,
				[className]: !!className
			})}
			onClick={!isVisible ? () => scrollToItem(item) : undefined}
		/>
	);
});

CarouselDot.displayName = 'CarouselDot';

export default CarouselDot;
