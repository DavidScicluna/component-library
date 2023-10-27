import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import type { Transition } from 'framer-motion';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useAppTheme, useConst, useGetResponsiveValue } from '@common/hooks';
import type { AnimationConfig, PolymorphicDefaultElement } from '@common/types';
import { getAnimationConfig, getAnimationDuration } from '@common/utils';

import { Fade } from '@components/Animation';
import { LinearGradient } from '@components/Overlay';

import { useCarouselContext } from '../../common/hooks';
import type { CarouselArrowDirection } from '../../common/types';

import { __DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE__ } from './common/constants';
import { __KEYS_CAROUSEL_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from './common/types';

const CarouselLinearGradient = forwardRef(function CarouselLinearGradient<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CarouselLinearGradientProps<Element>, ref: CarouselLinearGradientRef<Element>): ReactElement {
	const { colorMode: __DEFAULT_CAROUSEL_LINEAR_GRADIENT_COLORMODE__ } = useAppTheme();

	const { colorMode = __DEFAULT_CAROUSEL_LINEAR_GRADIENT_COLORMODE__, orientation } = useCarouselContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		direction: d,
		isVisible: v = __DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE__,
		...rest
	} = props;

	const direction = useGetResponsiveValue<CarouselArrowDirection>(d);
	const isVisible = useGetResponsiveValue<boolean>(v);

	const duration = useConst<number>(getAnimationDuration('ultra-fast'));
	const config = useConst<AnimationConfig>(getAnimationConfig());
	const transition = useConst<Transition>({ enter: { ...config, duration }, exit: { ...config, duration } });

	return (
		<Fade w='100%' h='100%' in={isVisible} transition={transition}>
			<LinearGradient<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_CAROUSEL_LINEAR_GRADIENT_CLASS__, { [className]: !!className })}
				w='100%'
				h='100%'
				direction={
					orientation === 'horizontal' ? (direction === 'left' ? 'r' : 'l') : direction === 'left' ? 'b' : 't'
				}
				from={{ color: 'gray', colorMode, hueType: 'background', position: 0 }}
				to={{ color: 'transparent', colorMode, position: 100 }}
			/>
		</Fade>
	);
});

CarouselLinearGradient.displayName = 'CarouselLinearGradient';

export default CarouselLinearGradient;
