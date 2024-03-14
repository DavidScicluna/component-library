import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import { CarouselOverlayArrowIconButton } from '../CarouselOverlayArrowIconButton';

import { DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_AS } from './common/constants';
import { KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS } from './common/keys';
import type {
	CarouselOverlayRightArrowIconButtonElement,
	CarouselOverlayRightArrowIconButtonProps,
	CarouselOverlayRightArrowIconButtonRef
} from './common/types';
const CarouselOverlayRightArrowIconButton = forwardRef(function CarouselOverlayRightArrowIconButton<
	Element extends CarouselOverlayRightArrowIconButtonElement
>(
	props: CarouselOverlayRightArrowIconButtonProps<Element>,
	ref: CarouselOverlayRightArrowIconButtonRef<Element>
): JSX.Element {
	const {
		as = DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		onClick,
		...rest
	} = props;

	const { scrollNext } = useCarouselManager();
	const { isVisible } = useCarouselArrowState('right');

	const handleScrollNext = (event: PolymorphicMouseEvent): void => {
		scrollNext();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselOverlayArrowIconButton
			{...{ rest }}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS, {
				[className]: !!className
			})}
			direction='right'
			isVisible={isVisible}
			onClick={handleScrollNext}
		/>
	);
});

// CarouselOverlayRightArrowIconButton.displayName = 'CarouselOverlayRightArrowIconButton';

export default CarouselOverlayRightArrowIconButton;
