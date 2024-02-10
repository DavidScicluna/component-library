import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent, CarouselArrowButtonProps } from '..';
import { CarouselArrowButton } from '..';

import { __DEFAULT_CAROUSEL_LEFT_ARROW_BUTTON_AS__ } from './common/constants';
import { __KEYS_CAROUSEL_LEFT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselLeftArrowButtonElement,
	CarouselLeftArrowButtonProps,
	CarouselLeftArrowButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselLeftArrowButton = forwardRef(function CarouselLeftArrowButton<
	Element extends CarouselLeftArrowButtonElement
>(props: CarouselLeftArrowButtonProps<Element>, ref: CarouselLeftArrowButtonRef<Element>): JSX.Element {
	const {
		as = __DEFAULT_CAROUSEL_LEFT_ARROW_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		onClick,
		...rest
	} = props;

	const { scrollPrev } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('left');

	const handleScrollPrev = (event: CarouselArrowButtonMouseEvent<Element>): void => {
		scrollPrev();

		if (onClick) {
			// TODO: Check how to improve the event types and remove any
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselArrowButton
			{...(rest as CarouselArrowButtonProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_LEFT_ARROW_BUTTON_CLASS__, { [className]: !!className })}
			direction='left'
			isDisabled={isDisabled}
			onClick={handleScrollPrev}
		/>
	);
});

// CarouselLeftArrowButton.displayName = 'CarouselLeftArrowButton';

export default CarouselLeftArrowButton;
