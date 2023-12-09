import type { ElementType, ReactElement } from 'react';
import { forwardRef, useEffect } from 'react';

import { compact, debounce } from 'lodash-es';
import { useArrayState } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useDebounce, useGetResponsiveValue } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	ThemeSpacing
} from '@common/types';

import { Stack } from '@components/Layout';

import { __DEFAULT_CAROUSEL_DURATION_NUMBER__, __DEFAULT_CAROUSEL_DURATION_THEME__ } from '../../common/constants';
import { useCarouselContext, useCarouselManager } from '../../common/hooks';

import { __DEFAULT_CAROUSEL_DOTS__, __DEFAULT_CAROUSEL_DOTS_SIZE__ } from './common/constants';
import { __KEYS_CAROUSEL_DOTS_CLASS__ } from './common/keys';
import type {
	CarouselDot as CarouselDotType,
	CarouselDots as CarouselDotsType,
	CarouselDotsProps,
	CarouselDotsRef
} from './common/types';
import { CarouselDot } from './components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselDots: PolymorphicComponentWithRef = forwardRef(function CarouselDots<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CarouselDotsProps<Element>, ref: CarouselDotsRef<Element>): ReactElement {
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
		size: si = __DEFAULT_CAROUSEL_DOTS_SIZE__,
		spacing: sp = __DEFAULT_CAROUSEL_DOTS_SPACING__,
		...rest
	} = props;

	const [dots, setDots] = useArrayState<CarouselDotType>(__DEFAULT_CAROUSEL_DOTS__);
	const dotsDebounced = useDebounce<CarouselDotsType>(dots, __DEFAULT_CAROUSEL_DURATION_THEME__);

	const size = useGetResponsiveValue<ThemeSpacing>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

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

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselDots<Element> {...props} />;
