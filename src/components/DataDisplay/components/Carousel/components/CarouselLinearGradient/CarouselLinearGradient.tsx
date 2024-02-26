import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useAppTheme } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { LinearGradientProps } from '@components/Overlay';
import { LinearGradient } from '@components/Overlay';

import { useCarouselContext } from '../../common/hooks';

import { DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE } from './common/constants';
import { useCarouselLinearGradientResponsiveValues } from './common/hooks';
import { KEYS_CAROUSEL_LINEAR_GRADIENT_CLASS } from './common/keys';
import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from './common/types';

const CarouselLinearGradient = forwardRef(function CarouselLinearGradient<Element extends PolymorphicElementType>(
	props: CarouselLinearGradientProps<Element>,
	ref: CarouselLinearGradientRef<Element>
): JSX.Element {
	const { colorMode: DEFAULT_CAROUSEL_LINEAR_GRADIENT_COLORMODE } = useAppTheme();

	const { colorMode = DEFAULT_CAROUSEL_LINEAR_GRADIENT_COLORMODE, orientation } = useCarouselContext();

	const {
		className = DEFAULT_CLASSNAME,
		direction: directionProp,
		isVisible: isVisibleProp = DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE,
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
				className={classNames(KEYS_CAROUSEL_LINEAR_GRADIENT_CLASS, { [className]: !!className })}
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
