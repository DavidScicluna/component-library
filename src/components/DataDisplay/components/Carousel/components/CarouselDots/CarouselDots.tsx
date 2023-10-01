import type { ElementType, ReactElement } from 'react';
import { forwardRef, useState } from 'react';

import classNames from 'classnames';
import { compact, debounce } from 'lodash-es';
import { useUpdateEffect } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useDebounce, useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { Stack } from '@components/Layout';

import { useCarouselContext, useCarouselManager } from '../../common/hooks';

import { __DEFAULT_CAROUSEL_DOTS_SIZE__ } from './common/constants';
import { __KEYS_CAROUSEL_DOTS_CLASS__ } from './common/keys';
import type { CarouselDots as CarouselDotsType, CarouselDotsProps, CarouselDotsRef } from './common/types';
import { CarouselDot } from './components';

const CarouselDots = forwardRef(function CarouselDots<Element extends ElementType>(
	props: CarouselDotsProps<Element>,
	ref: CarouselDotsRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_CAROUSEL_DOTS_COLOR__,
		colorMode: __DEFAULT_CAROUSEL_DOTS_COLORMODE__,
		items,
		orientation,
		spacing: __DEFAULT_CAROUSEL_DOTS_SPACING__
	} = useCarouselContext();
	const { isItemVisible, getPrevItem, getNextItem, visibleItems } = useCarouselManager();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_CAROUSEL_DOTS_COLOR__,
		colorMode = __DEFAULT_CAROUSEL_DOTS_COLORMODE__,
		size: si = __DEFAULT_CAROUSEL_DOTS_SIZE__,
		spacing: sp = __DEFAULT_CAROUSEL_DOTS_SPACING__,
		...rest
	} = props;

	const [dots, setDots] = useState<CarouselDotsType>([]);
	const dotsDebounced = useDebounce<CarouselDotsType>(dots, 'ultra-fast');

	const size = useGetResponsiveValue<ThemeSpacing>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	const handleDots = debounce((): void => {
		const prevItem = getPrevItem();
		const nextItem = getNextItem();

		setDots(
			compact(
				items.map((item) => {
					const { key, index } = item;
					const isVisible =
						isItemVisible(key) ||
						(!!prevItem && prevItem.index - 1 === index) ||
						(!!prevItem && prevItem.index === index) ||
						(!!nextItem && nextItem.index + 1 === index) ||
						(!!nextItem && nextItem.index === index);
					const scale =
						(!!prevItem && prevItem.index - 1 === index) || (!!nextItem && nextItem.index + 1 === index)
							? 50
							: (!!prevItem && prevItem.index === index) || (!!nextItem && nextItem.index === index)
							? 75
							: 100;

					return isVisible ? { item, scale } : null;
				})
			)
		);
	}, 250);

	useUpdateEffect(() => handleDots(), [visibleItems]);

	return (
		<Stack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_DOTS_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			direction={orientation === 'horizontal' ? 'row' : 'column'}
			alignItems='center'
			justifyContent='center'
			spacing={spacing}
		>
			{dotsDebounced.map((dot) => (
				<CarouselDot {...dot} key={dot.item.key} color={color} colorMode={colorMode} size={size} />
			))}
		</Stack>
	);
});

CarouselDots.displayName = 'CarouselDots';

export default CarouselDots;
