import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowButtonMouseEvent } from '..';
import { CarouselArrowButton } from '..';

import { __KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselRightArrowButtonDefaultElement,
	CarouselRightArrowButtonElement,
	CarouselRightArrowButtonProps,
	CarouselRightArrowButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselRightArrowButton: PolymorphicComponentWithRef = forwardRef(function CarouselRightArrowButton<
	Element extends CarouselRightArrowButtonElement = CarouselRightArrowButtonDefaultElement
>(props: CarouselRightArrowButtonProps<Element>, ref: CarouselRightArrowButtonRef<Element>): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

	const { scrollNext } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('right');

	const handleScrollNext = (event: CarouselArrowButtonMouseEvent): void => {
		scrollNext();

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CarouselArrowButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_RIGHT_ARROW_BUTTON_CLASS__, {
				[className]: !!className
			})}
			direction='right'
			isDisabled={isDisabled}
			onClick={handleScrollNext}
		/>
	);
});

CarouselRightArrowButton.displayName = 'CarouselRightArrowButton';

export default <
	Element extends CarouselRightArrowButtonElement = CarouselRightArrowButtonDefaultElement,
	Props = PolymorphicDefaultProps
>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselRightArrowButton<Element> {...props} />;
