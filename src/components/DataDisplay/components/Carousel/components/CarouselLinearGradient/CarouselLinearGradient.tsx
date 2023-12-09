import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useAppTheme, useGetResponsiveValue } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Transition } from '@components/Animation';
import { LinearGradient } from '@components/Overlay';

import { useCarouselContext } from '../../common/hooks';
import type { CarouselArrowDirection } from '../../common/types';

import { __DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE__ } from './common/constants';
import { __KEYS_CAROUSEL_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselLinearGradient: PolymorphicComponentWithRef = forwardRef(function CarouselLinearGradient<
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

	return (
		<Transition w='100%' h='100%' duration='ultra-fast' transition='fade' in={isVisible}>
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
		</Transition>
	);
});

CarouselLinearGradient.displayName = 'CarouselLinearGradient';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselLinearGradient<Element> {...props} />;
