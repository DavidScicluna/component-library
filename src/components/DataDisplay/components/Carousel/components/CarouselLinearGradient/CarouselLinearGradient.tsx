import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { LinearGradientProps } from '@components/Overlay';
import { LinearGradient } from '@components/Overlay';

import { useCarouselContext } from '../../common/hooks';

import { __DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE__ } from './common/constants';
import { useCarouselLinearGradientResponsiveValues } from './common/hooks';
import { __KEYS_CAROUSEL_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselLinearGradient = forwardRef(function CarouselLinearGradient<Element extends PolymorphicElementType>(
	props: CarouselLinearGradientProps<Element>,
	ref: CarouselLinearGradientRef<Element>
): JSX.Element {
	const { colorMode: __DEFAULT_CAROUSEL_LINEAR_GRADIENT_COLORMODE__ } = useAppTheme();

	const { colorMode = __DEFAULT_CAROUSEL_LINEAR_GRADIENT_COLORMODE__, orientation } = useCarouselContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		direction: directionProp,
		isVisible: isVisibleProp = __DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE__,
		...rest
	} = props;

	const { direction, isVisible } = useCarouselLinearGradientResponsiveValues<Element>({
		direction: directionProp as CarouselLinearGradientProps<Element>['direction'],
		isVisible: isVisibleProp as CarouselLinearGradientProps<Element>['isVisible']
	});

	return (
		<Transition w='100%' h='100%' duration='ultra-fast' transition='fade' in={isVisible}>
			<LinearGradient
				{...(rest as LinearGradientProps<Element>)}
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
		</Transition>
	);
});

// CarouselLinearGradient.displayName = 'CarouselLinearGradient';

export default CarouselLinearGradient;
