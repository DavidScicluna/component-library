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
import type { CarouselArrowIconButtonMouseEvent } from '../CarouselArrowIconButton';
import { CarouselOverlayArrowIconButton } from '../CarouselOverlayArrowIconButton';

import { __KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayRightArrowIconButtonDefaultElement,
	CarouselOverlayRightArrowIconButtonElement,
	CarouselOverlayRightArrowIconButtonProps,
	CarouselOverlayRightArrowIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselOverlayRightArrowIconButton: PolymorphicComponentWithRef = forwardRef(
	function CarouselOverlayRightArrowIconButton<
		Element extends CarouselOverlayRightArrowIconButtonElement = CarouselOverlayRightArrowIconButtonDefaultElement
	>(
		props: CarouselOverlayRightArrowIconButtonProps<Element>,
		ref: CarouselOverlayRightArrowIconButtonRef<Element>
	): ReactElement {
		const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

		const { scrollNext } = useCarouselManager();
		const { isVisible } = useCarouselArrowState('right');

		const handleScrollNext = (event: CarouselArrowIconButtonMouseEvent): void => {
			scrollNext();

			if (onClick) {
				onClick(event);
			}
		};

		return (
			<CarouselOverlayArrowIconButton<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_CAROUSEL_OVERLAY_RIGHT_ARROW_ICON_BUTTON_CLASS__, {
					[className]: !!className
				})}
				direction='right'
				isVisible={isVisible}
				onClick={handleScrollNext}
			/>
		);
	}
);

CarouselOverlayRightArrowIconButton.displayName = 'CarouselOverlayRightArrowIconButton';

export default <
	Element extends CarouselOverlayRightArrowIconButtonElement = CarouselOverlayRightArrowIconButtonDefaultElement,
	Props = PolymorphicDefaultProps
>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselOverlayRightArrowIconButton<Element> {...props} />;
