import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import { CarouselArrowButton, DEFAULT_CAROUSEL_RIGHT_ARROW_BUTTON_AS } from '..';

import { KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS } from './common/keys';
import type {
	CarouselRightArrowButtonElement,
	CarouselRightArrowButtonProps,
	CarouselRightArrowButtonRef
} from './common/types';

const CarouselRightArrowButton = forwardRef(function CarouselRightArrowButton<
	Element extends CarouselRightArrowButtonElement
>(props: CarouselRightArrowButtonProps<Element>, ref: CarouselRightArrowButtonRef<Element>): JSX.Element {
	const { as = DEFAULT_CAROUSEL_RIGHT_ARROW_BUTTON_AS, className = DEFAULT_CLASSNAME, onClick, ...rest } = props;

	const { scrollNext } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('right');

	const handleScrollNext = (event: PolymorphicMouseEvent): void => {
		scrollNext();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselArrowButton
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS, {
				[className]: !!className
			})}
			direction='right'
			isDisabled={isDisabled}
			onClick={handleScrollNext}
		/>
	);
});

// CarouselRightArrowButton.displayName = 'CarouselRightArrowButton';

export default CarouselRightArrowButton;
