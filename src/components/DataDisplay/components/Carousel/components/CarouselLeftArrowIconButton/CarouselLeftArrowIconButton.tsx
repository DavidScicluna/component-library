import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowIconButtonMouseEvent, CarouselArrowIconButtonProps } from '..';
import { __DEFAULT_CAROUSEL_LEFT_ARROW_ICON_BUTTON_AS__, CarouselArrowIconButton } from '..';

import { __KEYS_CAROUSEL_LEFT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselLeftArrowIconButtonElement,
	CarouselLeftArrowIconButtonProps,
	CarouselLeftArrowIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselLeftArrowIconButton = forwardRef(function CarouselLeftArrowIconButton<
	Element extends CarouselLeftArrowIconButtonElement
>(props: CarouselLeftArrowIconButtonProps<Element>, ref: CarouselLeftArrowIconButtonRef<Element>): ReactElement {
	const {
		as = __DEFAULT_CAROUSEL_LEFT_ARROW_ICON_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		onClick,
		...rest
	} = props;

	const { scrollPrev } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('left');

	const handleScrollPrev = (event: CarouselArrowIconButtonMouseEvent<Element>): void => {
		scrollPrev();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselArrowIconButton
			{...(rest as CarouselArrowIconButtonProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_LEFT_ARROW_ICON_BUTTON_CLASS__, { [className]: !!className })}
			direction='left'
			isDisabled={isDisabled}
			onClick={handleScrollPrev}
		/>
	);
});

// CarouselLeftArrowIconButton.displayName = 'CarouselLeftArrowIconButton';

export default CarouselLeftArrowIconButton;
