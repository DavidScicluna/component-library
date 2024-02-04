/* eslint-disable max-len */
import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowIconButtonMouseEvent } from '../CarouselArrowIconButton';
import type { CarouselOverlayArrowIconButtonProps } from '../CarouselOverlayArrowIconButton';
import { CarouselOverlayArrowIconButton } from '../CarouselOverlayArrowIconButton';

import { __DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_AS__ } from './common/constants';
import { __KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayRightArrowIconButtonElement,
	CarouselOverlayRightArrowIconButtonProps,
	CarouselOverlayRightArrowIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselOverlayRightArrowIconButton = forwardRef(function CarouselOverlayRightArrowIconButton<
	Element extends CarouselOverlayRightArrowIconButtonElement
>(
	props: CarouselOverlayRightArrowIconButtonProps<Element>,
	ref: CarouselOverlayRightArrowIconButtonRef<Element>
): ReactElement {
	const {
		as = __DEFAULT_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		onClick,
		...rest
	} = props;

	const { scrollNext } = useCarouselManager();
	const { isVisible } = useCarouselArrowState('right');

	const handleScrollNext = (event: CarouselArrowIconButtonMouseEvent<Element>): void => {
		scrollNext();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselOverlayArrowIconButton
			{...(rest as CarouselOverlayArrowIconButtonProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS__, {
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
