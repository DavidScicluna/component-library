import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '..';
import { CarouselArrowButton } from '..';

import { __KEYS_CAROUSEL_LEFT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselLeftArrowButtonDefaultElement,
	CarouselLeftArrowButtonElement,
	CarouselLeftArrowButtonProps,
	CarouselLeftArrowButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselLeftArrowButton = forwardRef(function CarouselLeftArrowButton<
	Element extends CarouselLeftArrowButtonElement = CarouselLeftArrowButtonDefaultElement
>(props: CarouselLeftArrowButtonProps<Element>, ref: CarouselLeftArrowButtonRef<Element>): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

	const { scrollPrev } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('left');

	const handleScrollPrev = (event: CarouselArrowButtonMouseEvent): void => {
		scrollPrev();

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CarouselArrowButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_LEFT_ARROW_BUTTON_CLASS__, { [className]: !!className })}
			direction='left'
			isDisabled={isDisabled}
			onClick={handleScrollPrev}
		/>
	);
});

CarouselLeftArrowButton.displayName = 'CarouselLeftArrowButton';

export default CarouselLeftArrowButton;
