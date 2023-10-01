/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '../CarouselArrowButton';
import { CarouselOverlayArrowButton } from '../CarouselOverlayArrowButton';

import { __KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayLeftArrowButtonDefaultElement,
	CarouselOverlayLeftArrowButtonElement,
	CarouselOverlayLeftArrowButtonProps,
	CarouselOverlayLeftArrowButtonRef
} from './common/types';

const CarouselOverlayLeftArrowButton = forwardRef(function CarouselOverlayLeftArrowButton<
	Element extends CarouselOverlayLeftArrowButtonElement = CarouselOverlayLeftArrowButtonDefaultElement
>(props: CarouselOverlayLeftArrowButtonProps<Element>, ref: CarouselOverlayLeftArrowButtonRef<Element>): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

	const { scrollPrev } = useCarouselManager();
	const { isVisible } = useCarouselArrowState('left');

	const handleScrollPrev = (event: CarouselArrowButtonMouseEvent): void => {
		scrollPrev();

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CarouselOverlayArrowButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_CLASS__, {
				[className]: !!className
			})}
			direction='left'
			isVisible={isVisible}
			onClick={handleScrollPrev}
		/>
	);
});

CarouselOverlayLeftArrowButton.displayName = 'CarouselOverlayLeftArrowButton';

export default CarouselOverlayLeftArrowButton;
