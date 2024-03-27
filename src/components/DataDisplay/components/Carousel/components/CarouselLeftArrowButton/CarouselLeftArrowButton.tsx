import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMergeProps } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import { CarouselArrowButton } from '..';

import { DEFAULT_CAROUSEL_LEFT_ARROW_BUTTON_AS } from './common/constants';
import { KEYS_CAROUSEL_LEFT_ARROW_BUTTON_CLASS } from './common/keys';
import type {
	CarouselLeftArrowButtonElement,
	CarouselLeftArrowButtonProps,
	CarouselLeftArrowButtonRef
} from './common/types';

const CarouselLeftArrowButton = forwardRef(function CarouselLeftArrowButton<
	Element extends CarouselLeftArrowButtonElement
>(props: CarouselLeftArrowButtonProps<Element>, ref: CarouselLeftArrowButtonRef<Element>): JSX.Element {
	const { as = DEFAULT_CAROUSEL_LEFT_ARROW_BUTTON_AS, className = DEFAULT_CLASSNAME, onClick, ...rest } = props;

	const { scrollPrev } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('left');

	const handleScrollPrev = (event: PolymorphicMergeProps): void => {
		scrollPrev();

		if (onClick) {
			// TODO: Check how to improve the event types and remove any
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselArrowButton
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_LEFT_ARROW_BUTTON_CLASS, { [className]: !!className })}
			direction='left'
			isDisabled={isDisabled}
			onClick={handleScrollPrev}
		/>
	);
});

// CarouselLeftArrowButton.displayName = 'CarouselLeftArrowButton';

export default CarouselLeftArrowButton;
