import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { useCarouselArrowState, useCarouselManager } from '../../common/hooks';
import type { CarouselArrowIconButtonMouseEvent } from '..';
import { CarouselArrowIconButton } from '..';

import { __KEYS_CAROUSEL_LEFT_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselLeftArrowIconButtonDefaultElement,
	CarouselLeftArrowIconButtonElement,
	CarouselLeftArrowIconButtonProps,
	CarouselLeftArrowIconButtonRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselLeftArrowIconButton: PolymorphicComponentWithRef = forwardRef(function CarouselLeftArrowIconButton<
	Element extends CarouselLeftArrowIconButtonElement = CarouselLeftArrowIconButtonDefaultElement
>(props: CarouselLeftArrowIconButtonProps<Element>, ref: CarouselLeftArrowIconButtonRef<Element>): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, onClick, ...rest } = props;

	const { scrollPrev } = useCarouselManager();
	const { isDisabled } = useCarouselArrowState('left');

	const handleScrollPrev = (event: CarouselArrowIconButtonMouseEvent): void => {
		scrollPrev();

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<CarouselArrowIconButton<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_LEFT_ARROW_ICON_BUTTON_CLASS__, { [className]: !!className })}
			direction='left'
			isDisabled={isDisabled}
			onClick={handleScrollPrev}
		/>
	);
});

CarouselLeftArrowIconButton.displayName = 'CarouselLeftArrowIconButton';

export default <
	Element extends CarouselLeftArrowIconButtonElement = CarouselLeftArrowIconButtonDefaultElement,
	Props = PolymorphicDefaultProps
>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <CarouselLeftArrowIconButton<Element> {...props} />;
