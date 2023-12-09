/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '../CarouselArrowButton';
import { CarouselOverlayArrowButton } from '../CarouselOverlayArrowButton';

import { __KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayRightArrowButtonDefaultElement,
	CarouselOverlayRightArrowButtonElement,
	CarouselOverlayRightArrowButtonProps,
	CarouselOverlayRightArrowButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselOverlayRightArrowButton: PolymorphicComponentWithRef = forwardRef(
	function CarouselOverlayRightArrowButton<
		Element extends CarouselOverlayRightArrowButtonElement = CarouselOverlayRightArrowButtonDefaultElement
	>(
		props: CarouselOverlayRightArrowButtonProps<Element>,
		ref: CarouselOverlayRightArrowButtonRef<Element>
	): ReactElement {
		const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

		const { scrollNext } = useCarouselManager();
		const { isVisible } = useCarouselArrowState('right');

		const handleScrollNext = (event: CarouselArrowButtonMouseEvent): void => {
			scrollNext();

			if (onClick) {
				onClick(event);
			}
		};

		return (
			<CarouselOverlayArrowButton<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_BUTTON_CLASS__, { [className]: !!className })}
				direction='right'
				isVisible={isVisible}
				onClick={handleScrollNext}
			/>
		);
	}
);

CarouselOverlayRightArrowButton.displayName = 'CarouselOverlayRightArrowButton';

export default <
	Element extends CarouselOverlayRightArrowButtonElement = CarouselOverlayRightArrowButtonDefaultElement,
	Props = PolymorphicDefaultProps
>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselOverlayRightArrowButton<Element> {...props} />;
