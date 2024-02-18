import { forwardRef, useEffect } from 'react';

import classNames from 'classnames';
import { compact, debounce } from 'lodash-es';
import { useArrayState } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useDebounce } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import type { StackProps } from '@components/Layout';
import { Stack } from '@components/Layout';

import { __DEFAULT_CAROUSEL_DURATION_NUMBER__, __DEFAULT_CAROUSEL_DURATION_THEME__ } from '../../common/constants';
import { useCarouselContext, useCarouselManager } from '../../common/hooks';

import { __DEFAULT_CAROUSEL_DOTS__, __DEFAULT_CAROUSEL_DOTS_SIZE__ } from './common/constants';
import { useCarouselDotsResponsiveValues } from './common/hooks';
import { __KEYS_CAROUSEL_DOTS_CLASS__ } from './common/keys';
import type {
	CarouselDot as CarouselDotType,
	CarouselDots as CarouselDotsType,
	CarouselDotsProps,
	CarouselDotsRef
} from './common/types';
import { CarouselDot } from './components';

const CarouselDots = forwardRef(function CarouselDots<Element extends PolymorphicElementType>(
	props: CarouselDotsProps<Element>,
	ref: CarouselDotsRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_CAROUSEL_DOTS_COLOR__,
		colorMode: __DEFAULT_CAROUSEL_DOTS_COLORMODE__,
		items,
		orientation,
		spacing: __DEFAULT_CAROUSEL_DOTS_SPACING__
	} = useCarouselContext();
	const { isItemVisible, getPrevItem, getNextItem } = useCarouselManager();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_CAROUSEL_DOTS_COLOR__,
		colorMode = __DEFAULT_CAROUSEL_DOTS_COLORMODE__,
		size: sizeProp = __DEFAULT_CAROUSEL_DOTS_SIZE__,
		spacing: spacingProp = __DEFAULT_CAROUSEL_DOTS_SPACING__,
		...rest
	} = props;

	const [dots, setDots] = useArrayState<CarouselDotType>(__DEFAULT_CAROUSEL_DOTS__);
	const dotsDebounced = useDebounce<CarouselDotsType>(dots, __DEFAULT_CAROUSEL_DURATION_THEME__);

	const { size, spacing } = useCarouselDotsResponsiveValues<Element>({
		size: sizeProp,
		spacing: spacingProp
	});

	const handleDots = debounce((): void => {
		const prevItem = getPrevItem();
		const nextItem = getNextItem();

		setDots.clear();
		setDots.setArray(
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
	}, __DEFAULT_CAROUSEL_DURATION_NUMBER__);

	useEffect(() => handleDots(), [items]);

	return (
		<Stack
			{...(rest as StackProps<Element>)}
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

// CarouselDots.displayName = 'CarouselDots';

export default CarouselDots;
