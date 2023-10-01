import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import { Button, ButtonIcon } from '@components/Buttons/components/Button';

import { useCarouselContext } from '../../common/hooks';
import type { CarouselArrowDirection } from '../../common/types';

import {
	__DEFAULT_CAROUSEL_ARROW_BUTTON_HAS_ICON__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_LEFT_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_RIGHT_LABEL__
} from './common/constants';
import { __KEYS_CAROUSEL_ARROW_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselArrowButtonDefaultElement,
	CarouselArrowButtonElement,
	CarouselArrowButtonProps,
	CarouselArrowButtonRef
} from './common/types';

const CarouselArrowButton = forwardRef(function CarouselArrowButton<
	Element extends CarouselArrowButtonElement = CarouselArrowButtonDefaultElement
>(props: CarouselArrowButtonProps<Element>, ref: CarouselArrowButtonRef<Element>): ReactElement {
	const { color: __DEFAULT_ARROW_BUTTON_COLOR__, colorMode: __DEFAULT_ARROW_BUTTON_COLORMODE__ } =
		useCarouselContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_ARROW_BUTTON_COLOR__,
		colorMode = __DEFAULT_ARROW_BUTTON_COLORMODE__,
		direction: d,
		hasIcon: i = __DEFAULT_CAROUSEL_ARROW_BUTTON_HAS_ICON__,
		isFullWidth = __DEFAULT_CAROUSEL_ARROW_BUTTON_IS_FULLWIDTH__,
		...rest
	} = props;

	const direction = useGetResponsiveValue<CarouselArrowDirection>(d);
	const hasIcon = useGetResponsiveValue<boolean>(i);

	return (
		<Button<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_ARROW_BUTTON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			renderLeft={
				hasIcon && direction === 'left' ? () => <ButtonIcon icon='expand_less' category='filled' /> : undefined
			}
			renderRight={
				hasIcon && direction === 'right' ? () => <ButtonIcon icon='expand_more' category='filled' /> : undefined
			}
			isFullWidth={isFullWidth}
		>
			{direction === 'left'
				? __DEFAULT_CAROUSEL_ARROW_BUTTON_LEFT_LABEL__
				: __DEFAULT_CAROUSEL_ARROW_BUTTON_RIGHT_LABEL__}
		</Button>
	);
});

CarouselArrowButton.displayName = 'CarouselArrowButton';

export default CarouselArrowButton;
