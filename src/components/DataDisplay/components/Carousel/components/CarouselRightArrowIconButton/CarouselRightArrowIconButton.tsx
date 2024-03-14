import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import { CarouselArrowIconButton, DEFAULT_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_AS } from '..';

import { KEYS_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_CLASS } from './common/keys';
import type {
	CarouselRightArrowIconButtonElement,
	CarouselRightArrowIconButtonProps,
	CarouselRightArrowIconButtonRef
} from './common/types';

const CarouselRightArrowIconButton = forwardRef(function CarouselRightArrowIconButton<
	Element extends CarouselRightArrowIconButtonElement
>(props: CarouselRightArrowIconButtonProps<Element>, ref: CarouselRightArrowIconButtonRef<Element>): JSX.Element {
	const { as = DEFAULT_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_AS, className = DEFAULT_CLASSNAME, onClick, ...rest } = props;

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
		<CarouselArrowIconButton
			{...{ rest }}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_CLASS, {
				[className]: !!className
			})}
			direction='right'
			isDisabled={isDisabled}
			onClick={handleScrollNext}
		/>
	);
});

// CarouselRightArrowIconButton.displayName = 'CarouselRightArrowIconButton';

export default CarouselRightArrowIconButton;
