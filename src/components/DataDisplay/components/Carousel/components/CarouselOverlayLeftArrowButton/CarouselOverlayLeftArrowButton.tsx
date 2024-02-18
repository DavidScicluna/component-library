import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '../CarouselArrowButton';
import type { CarouselOverlayArrowButtonProps } from '../CarouselOverlayArrowButton';
import { CarouselOverlayArrowButton } from '../CarouselOverlayArrowButton';

import { __DEFAULT_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_AS__ } from './common/constants';
import { __KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayLeftArrowButtonElement,
	CarouselOverlayLeftArrowButtonProps,
	CarouselOverlayLeftArrowButtonRef
} from './common/types';

const CarouselOverlayLeftArrowButton = forwardRef(function CarouselOverlayLeftArrowButton<
	Element extends CarouselOverlayLeftArrowButtonElement
>(props: CarouselOverlayLeftArrowButtonProps<Element>, ref: CarouselOverlayLeftArrowButtonRef<Element>): JSX.Element {
	const {
		as = __DEFAULT_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		onClick,
		...rest
	} = props;

	const { scrollPrev } = useCarouselManager();
	const { isVisible } = useCarouselArrowState('left');

	const handleScrollPrev = (event: CarouselArrowButtonMouseEvent<Element>): void => {
		scrollPrev();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselOverlayArrowButton
			{...(rest as CarouselOverlayArrowButtonProps<Element>)}
			as={as}
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

// CarouselOverlayLeftArrowButton.displayName = 'CarouselOverlayLeftArrowButton';

export default CarouselOverlayLeftArrowButton;
