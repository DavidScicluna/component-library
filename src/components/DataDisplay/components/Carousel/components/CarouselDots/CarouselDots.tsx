import { forwardRef, useEffect } from 'react';

import classNames from 'classnames';
import { compact, debounce } from 'lodash-es';
import { useArrayState } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useDebounce } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { Stack } from '@components/Layout';

import { DEFAULT_CAROUSEL_DURATION_NUMBER, DEFAULT_CAROUSEL_DURATION_THEME } from '../../common/constants';
import { useCarouselContext, useCarouselManager } from '../../common/hooks';

import { DEFAULT_CAROUSEL_DOTS, DEFAULT_CAROUSEL_DOTS_SIZE } from './common/constants';
import { useCarouselDotsResponsiveValues } from './common/hooks';
import { KEYS_CAROUSEL_DOTS_CLASS } from './common/keys';
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
		color: DEFAULT_CAROUSEL_DOTS_COLOR,
		colorMode: DEFAULT_CAROUSEL_DOTS_COLORMODE,
		items,
		orientation,
		spacing: DEFAULT_CAROUSEL_DOTS_SPACING
	} = useCarouselContext();
	const { isItemVisible, getPrevItem, getNextItem } = useCarouselManager();

	const {
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_CAROUSEL_DOTS_COLOR,
		colorMode = DEFAULT_CAROUSEL_DOTS_COLORMODE,
		size: sizeProp = DEFAULT_CAROUSEL_DOTS_SIZE,
		spacing: spacingProp = DEFAULT_CAROUSEL_DOTS_SPACING,
		...rest
	} = props;

	const [dots, setDots] = useArrayState<CarouselDotType>(DEFAULT_CAROUSEL_DOTS);
	const dotsDebounced = useDebounce<CarouselDotsType>(dots, DEFAULT_CAROUSEL_DURATION_THEME);

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
	}, DEFAULT_CAROUSEL_DURATION_NUMBER);

	useEffect(() => handleDots(), [items]);

	return (
		<Stack
			{...rest}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_DOTS_CLASS, { [className]: !!className })}
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
