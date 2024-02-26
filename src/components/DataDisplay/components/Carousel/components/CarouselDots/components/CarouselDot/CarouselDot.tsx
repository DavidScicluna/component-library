import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import { useCarouselContext, useCarouselManager } from '@components/DataDisplay/components/Carousel/common/hooks';

import { DEFAULT_CAROUSEL_DOTS_SIZE } from '../../common/constants';

import { useCarouselDotClasses, useCarouselDotResponsiveValues } from './common/hooks';
import { KEYS_CAROUSEL_DOT_CLASS } from './common/keys';
import type { CarouselDotProps, CarouselDotRef } from './common/types';

const CarouselDot = forwardRef(function CarouselDot<Element extends PolymorphicElementType>(
	props: CarouselDotProps<Element>,
	ref: CarouselDotRef<Element>
): JSX.Element {
	const { color: DEFAULT_CAROUSEL_DOT_COLOR, colorMode: DEFAULT_CAROUSEL_DOT_COLORMODE } = useCarouselContext();
	const { isItemVisible, scrollToItem } = useCarouselManager();

	const {
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_CAROUSEL_DOT_COLOR,
		colorMode = DEFAULT_CAROUSEL_DOT_COLORMODE,
		item,
		scale,
		size: sizeProp = DEFAULT_CAROUSEL_DOTS_SIZE,
		...rest
	} = props;

	const { size } = useCarouselDotResponsiveValues<Element>({ size: sizeProp });

	const isVisible = useMemo(() => isItemVisible(item.key), [item.key]);

	const classes = useCarouselDotClasses<Element>({ color, colorMode, isVisible, size });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_DOT_CLASS, classes.item, {
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
