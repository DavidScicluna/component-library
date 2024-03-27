import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import { CarouselOverlayArrowButton } from '../CarouselOverlayArrowButton';

import { DEFAULT_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_AS } from './common/constants';
import { KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_CLASS } from './common/keys';
import type {
	CarouselOverlayLeftArrowButtonElement,
	CarouselOverlayLeftArrowButtonProps,
	CarouselOverlayLeftArrowButtonRef
} from './common/types';

const CarouselOverlayLeftArrowButton = forwardRef(function CarouselOverlayLeftArrowButton<
	Element extends CarouselOverlayLeftArrowButtonElement
>(props: CarouselOverlayLeftArrowButtonProps<Element>, ref: CarouselOverlayLeftArrowButtonRef<Element>): JSX.Element {
	const {
		as = DEFAULT_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		onClick,
		...rest
	} = props;

	const { scrollPrev } = useCarouselManager();
	const { isVisible } = useCarouselArrowState('left');

	const handleScrollPrev = (event: PolymorphicMouseEvent): void => {
		scrollPrev();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselOverlayArrowButton
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_BUTTON_CLASS, {
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
