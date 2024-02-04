import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { useCarouselArrowState } from '../../common/hooks';
import type { CarouselLinearGradientProps } from '..';
import { CarouselLinearGradient } from '..';

import { __KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { CarouselRightLinearGradientProps, CarouselRightLinearGradientRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselRightLinearGradient = forwardRef(function CarouselRightLinearGradient<
	Element extends PolymorphicElementType
>(props: CarouselRightLinearGradientProps<Element>, ref: CarouselRightLinearGradientRef<Element>): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const { isVisible } = useCarouselArrowState('right');

	return (
		<CarouselLinearGradient
			{...(rest as CarouselLinearGradientProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS__, { [className]: !!className })}
			direction='right'
			isVisible={isVisible}
		/>
	);
});

// CarouselRightLinearGradient.displayName = 'CarouselRightLinearGradient';

export default CarouselRightLinearGradient;
