import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowIconButtonMouseEvent, CarouselArrowIconButtonProps } from '..';
import { __DEFAULT_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_AS__, CarouselArrowIconButton } from '..';

import { __KEYS_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselRightArrowIconButtonElement,
	CarouselRightArrowIconButtonProps,
	CarouselRightArrowIconButtonRef
} from './common/types';

const CarouselRightArrowIconButton = forwardRef(function CarouselRightArrowIconButton<
	Element extends CarouselRightArrowIconButtonElement
>(props: CarouselRightArrowIconButtonProps<Element>, ref: CarouselRightArrowIconButtonRef<Element>): JSX.Element {
	const {
		as = __DEFAULT_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		onClick,
		...rest
	} = props;

	const { scrollNext } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('right');

	const handleScrollNext = (event: CarouselArrowIconButtonMouseEvent<Element>): void => {
		scrollNext();

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
			className={classNames(__KEYS_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_CLASS__, {
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
