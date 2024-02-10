import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '../CarouselArrowButton';
import type { CarouselOverlayArrowButtonProps } from '../CarouselOverlayArrowButton';
import { CarouselOverlayArrowButton } from '../CarouselOverlayArrowButton';

import { __DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_AS__ } from './common/constants';
import { __KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayRightArrowButtonElement,
	CarouselOverlayRightArrowButtonProps,
	CarouselOverlayRightArrowButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselOverlayRightArrowButton = forwardRef(function CarouselOverlayRightArrowButton<
	Element extends CarouselOverlayRightArrowButtonElement
>(props: CarouselOverlayRightArrowButtonProps<Element>, ref: CarouselOverlayRightArrowButtonRef<Element>): JSX.Element {
	const {
		as = __DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		onClick,
		...rest
	} = props;

	const { scrollNext } = useCarouselManager();
	const { isVisible } = useCarouselArrowState('right');

	const handleScrollNext = (event: CarouselArrowButtonMouseEvent<Element>): void => {
		scrollNext();

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
			className={classNames(__KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_CLASS__, { [className]: !!className })}
			direction='right'
			isVisible={isVisible}
			onClick={handleScrollNext}
		/>
	);
});

// CarouselOverlayRightArrowButton.displayName = 'CarouselOverlayRightArrowButton';

export default CarouselOverlayRightArrowButton;
