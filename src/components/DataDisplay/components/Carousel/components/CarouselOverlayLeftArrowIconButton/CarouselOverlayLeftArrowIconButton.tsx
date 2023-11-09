/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowIconButtonMouseEvent } from '../CarouselArrowIconButton';
import { CarouselOverlayArrowIconButton } from '../CarouselOverlayArrowIconButton';

import { __KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayLeftArrowIconButtonDefaultElement,
	CarouselOverlayLeftArrowIconButtonElement,
	CarouselOverlayLeftArrowIconButtonProps,
	CarouselOverlayLeftArrowIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselOverlayLeftArrowIconButton = forwardRef(function CarouselOverlayLeftArrowIconButton<
	Element extends CarouselOverlayLeftArrowIconButtonElement = CarouselOverlayLeftArrowIconButtonDefaultElement
>(
	props: CarouselOverlayLeftArrowIconButtonProps<Element>,
	ref: CarouselOverlayLeftArrowIconButtonRef<Element>
): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

	const { scrollPrev } = useCarouselManager();
	const { isVisible } = useCarouselArrowState('left');

	const handleScrollPrev = (event: CarouselArrowIconButtonMouseEvent): void => {
		scrollPrev();

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CarouselOverlayArrowIconButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_ICON_BUTTON_CLASS__, {
				[className]: !!className
			})}
			direction='left'
			isVisible={isVisible}
			onClick={handleScrollPrev}
		/>
	);
});

CarouselOverlayLeftArrowIconButton.displayName = 'CarouselOverlayLeftArrowIconButton';

export default CarouselOverlayLeftArrowIconButton;
