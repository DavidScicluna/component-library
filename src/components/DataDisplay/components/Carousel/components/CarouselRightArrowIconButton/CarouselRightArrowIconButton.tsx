import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicComponentWithRef } from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowIconButtonMouseEvent } from '..';
import { CarouselArrowIconButton } from '..';

import { __KEYS_CAROUSEL_RIGHT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselRightArrowIconButtonDefaultElement,
	CarouselRightArrowIconButtonElement,
	CarouselRightArrowIconButtonProps,
	CarouselRightArrowIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselRightArrowIconButton: PolymorphicComponentWithRef = forwardRef(function CarouselRightArrowIconButton<
	Element extends CarouselRightArrowIconButtonElement = CarouselRightArrowIconButtonDefaultElement
>(props: CarouselRightArrowIconButtonProps<Element>, ref: CarouselRightArrowIconButtonRef<Element>): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

	const { scrollNext } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('right');

	const handleScrollNext = (event: CarouselArrowIconButtonMouseEvent): void => {
		scrollNext();

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CarouselArrowIconButton<Element>
			{...rest}
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

CarouselRightArrowIconButton.displayName = 'CarouselRightArrowIconButton';

export default CarouselRightArrowIconButton;
