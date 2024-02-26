import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '../CarouselArrowButton';
import type { CarouselOverlayArrowButtonProps } from '../CarouselOverlayArrowButton';
import { CarouselOverlayArrowButton } from '../CarouselOverlayArrowButton';

import { DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_AS } from './common/constants';
import { KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_CLASS } from './common/keys';
import type {
	CarouselOverlayRightArrowButtonElement,
	CarouselOverlayRightArrowButtonProps,
	CarouselOverlayRightArrowButtonRef
} from './common/types';

const CarouselOverlayRightArrowButton = forwardRef(function CarouselOverlayRightArrowButton<
	Element extends CarouselOverlayRightArrowButtonElement
>(props: CarouselOverlayRightArrowButtonProps<Element>, ref: CarouselOverlayRightArrowButtonRef<Element>): JSX.Element {
	const {
		as = DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
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
			className={classNames(KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_CLASS, { [className]: !!className })}
			direction='right'
			isVisible={isVisible}
			onClick={handleScrollNext}
		/>
	);
});

// CarouselOverlayRightArrowButton.displayName = 'CarouselOverlayRightArrowButton';

export default CarouselOverlayRightArrowButton;
