import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { useCarouselArrowState } from '../../common/hooks';
import type { CarouselLinearGradientProps } from '..';
import { CarouselLinearGradient } from '..';

import { KEYS_CAROUSEL_LEFT_LINEAR_GRADIENT_CLASS } from './common/keys';
import type { CarouselLeftLinearGradientProps, CarouselLeftLinearGradientRef } from './common/types';

const CarouselLeftLinearGradient = forwardRef(function CarouselLeftLinearGradient<
	Element extends PolymorphicElementType
>(props: CarouselLeftLinearGradientProps<Element>, ref: CarouselLeftLinearGradientRef<Element>): JSX.Element {
	const { className = DEFAULT_CLASSNAME, ...rest } = props;

	const { isVisible } = useCarouselArrowState('left');

	return (
		<CarouselLinearGradient
			{...(rest as CarouselLinearGradientProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_LEFT_LINEAR_GRADIENT_CLASS, { [className]: !!className })}
			direction='left'
			isVisible={isVisible}
		/>
	);
});

// CarouselLeftLinearGradient.displayName = 'CarouselLeftLinearGradient';

export default CarouselLeftLinearGradient;
