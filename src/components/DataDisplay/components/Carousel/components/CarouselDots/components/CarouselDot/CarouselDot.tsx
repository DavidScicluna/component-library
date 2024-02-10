import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import { useCarouselContext, useCarouselManager } from '@components/DataDisplay/components/Carousel/common/hooks';

import { __DEFAULT_CAROUSEL_DOTS_SIZE__ } from '../../common/constants';

import { useCarouselDotClasses, useCarouselDotResponsiveValues } from './common/hooks';
import { __KEYS_CAROUSEL_DOT_CLASS__ } from './common/keys';
import type { CarouselDotProps, CarouselDotRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselDot = forwardRef(function CarouselDot<Element extends PolymorphicElementType>(
	props: CarouselDotProps<Element>,
	ref: CarouselDotRef<Element>
): JSX.Element {
	const { color: __DEFAULT_CAROUSEL_DOT_COLOR__, colorMode: __DEFAULT_CAROUSEL_DOT_COLORMODE__ } =
		useCarouselContext();
	const { isItemVisible, scrollToItem } = useCarouselManager();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_CAROUSEL_DOT_COLOR__,
		colorMode = __DEFAULT_CAROUSEL_DOT_COLORMODE__,
		item,
		scale,
		size: sizeProp = __DEFAULT_CAROUSEL_DOTS_SIZE__,
		...rest
	} = props;

	const { size } = useCarouselDotResponsiveValues<Element>({ size: sizeProp });

	const isVisible = useMemo(() => isItemVisible(item.key), [item.key]);

	const classes = useCarouselDotClasses<Element>({ color, colorMode, isVisible, size });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
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

// CarouselDot.displayName = 'CarouselDot';

export default CarouselDot;
