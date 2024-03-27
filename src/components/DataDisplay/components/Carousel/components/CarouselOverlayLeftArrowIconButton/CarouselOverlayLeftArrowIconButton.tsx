import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import { CarouselOverlayArrowIconButton } from '../CarouselOverlayArrowIconButton';

import { DEFAULT_CAROUSEL_OVERLAY_LEFT_ARROW_ICON_BUTTON_AS } from './common/constants';
import { KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_ICON_BUTTON_CLASS } from './common/keys';
import type {
	CarouselOverlayLeftArrowIconButtonElement,
	CarouselOverlayLeftArrowIconButtonProps,
	CarouselOverlayLeftArrowIconButtonRef
} from './common/types';

const CarouselOverlayLeftArrowIconButton = forwardRef(function CarouselOverlayLeftArrowIconButton<
	Element extends CarouselOverlayLeftArrowIconButtonElement
>(
	props: CarouselOverlayLeftArrowIconButtonProps<Element>,
	ref: CarouselOverlayLeftArrowIconButtonRef<Element>
): JSX.Element {
	const {
		as = DEFAULT_CAROUSEL_OVERLAY_LEFT_ARROW_ICON_BUTTON_AS,
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
		<CarouselOverlayArrowIconButton
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_OVERLAY_LEFT_ARROW_ICON_BUTTON_CLASS, {
				[className]: !!className
			})}
			direction='left'
			isVisible={isVisible}
			onClick={handleScrollPrev}
		/>
	);
});

// CarouselOverlayLeftArrowIconButton.displayName = 'CarouselOverlayLeftArrowIconButton';

export default CarouselOverlayLeftArrowIconButton;
