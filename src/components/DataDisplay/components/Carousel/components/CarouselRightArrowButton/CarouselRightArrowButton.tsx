import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '..';
import { CarouselArrowButton } from '..';

import { __KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselRightArrowButtonDefaultElement,
	CarouselRightArrowButtonElement,
	CarouselRightArrowButtonProps,
	CarouselRightArrowButtonRef
} from './common/types';

const CarouselRightArrowButton = forwardRef(function CarouselRightArrowButton<
	Element extends CarouselRightArrowButtonElement = CarouselRightArrowButtonDefaultElement
>(props: CarouselRightArrowButtonProps<Element>, ref: CarouselRightArrowButtonRef<Element>): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

	const { scrollNext } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('right');

	const handleScrollNext = (event: CarouselArrowButtonMouseEvent): void => {
		scrollNext();

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CarouselArrowButton<Element>
			{...rest}
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

CarouselRightArrowButton.displayName = 'CarouselRightArrowButton';

export default CarouselRightArrowButton;
