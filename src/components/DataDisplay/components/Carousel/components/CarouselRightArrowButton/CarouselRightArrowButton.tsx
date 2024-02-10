import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent, CarouselArrowButtonProps } from '..';
import { __DEFAULT_CAROUSEL_RIGHT_ARROW_BUTTON_AS__, CarouselArrowButton } from '..';

import { __KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselRightArrowButtonElement,
	CarouselRightArrowButtonProps,
	CarouselRightArrowButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselRightArrowButton = forwardRef(function CarouselRightArrowButton<
	Element extends CarouselRightArrowButtonElement
>(props: CarouselRightArrowButtonProps<Element>, ref: CarouselRightArrowButtonRef<Element>): JSX.Element {
	const {
		as = __DEFAULT_CAROUSEL_RIGHT_ARROW_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		onClick,
		...rest
	} = props;

	const { scrollNext } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('right');

	const handleScrollNext = (event: CarouselArrowButtonMouseEvent<Element>): void => {
		scrollNext();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselArrowButton
			{...(rest as CarouselArrowButtonProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS__, {
				[className]: !!className
			})}
			direction='right'
			isDisabled={isDisabled}
			onClick={handleScrollNext}
		/>
	);
});

// CarouselRightArrowButton.displayName = 'CarouselRightArrowButton';

export default CarouselRightArrowButton;
