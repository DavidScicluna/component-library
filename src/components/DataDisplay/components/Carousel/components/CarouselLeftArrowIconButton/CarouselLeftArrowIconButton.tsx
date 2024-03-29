import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import { CarouselArrowIconButton, DEFAULT_CAROUSEL_LEFT_ARROW_ICON_BUTTON_AS } from '..';

import { KEYS_CAROUSEL_LEFT_ARROW_ICON_BUTTON_CLASS } from './common/keys';
import type {
	CarouselLeftArrowIconButtonElement,
	CarouselLeftArrowIconButtonProps,
	CarouselLeftArrowIconButtonRef
} from './common/types';

const CarouselLeftArrowIconButton = forwardRef(function CarouselLeftArrowIconButton<
	Element extends CarouselLeftArrowIconButtonElement
>(props: CarouselLeftArrowIconButtonProps<Element>, ref: CarouselLeftArrowIconButtonRef<Element>): JSX.Element {
	const { as = DEFAULT_CAROUSEL_LEFT_ARROW_ICON_BUTTON_AS, className = DEFAULT_CLASSNAME, onClick, ...rest } = props;

	const { scrollPrev } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('left');

	const handleScrollPrev = (event: PolymorphicMouseEvent): void => {
		scrollPrev();

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<CarouselArrowIconButton
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_LEFT_ARROW_ICON_BUTTON_CLASS, { [className]: !!className })}
			direction='left'
			isDisabled={isDisabled}
			onClick={handleScrollPrev}
		/>
	);
});

// CarouselLeftArrowIconButton.displayName = 'CarouselLeftArrowIconButton';

export default CarouselLeftArrowIconButton;
