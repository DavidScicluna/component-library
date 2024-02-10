import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import type { ButtonProps } from '@components/Buttons';
import { Button, ButtonIcon } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';
import type { CarouselArrowDirection } from '../../common/types';

import {
	__DEFAULT_CAROUSEL_ARROW_BUTTON_AS__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_BOTTOM_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_HAS_ICON__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_LEFT_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_RIGHT_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_BUTTON_TOP_LABEL__
} from './common/constants';
import { __KEYS_CAROUSEL_ARROW_BUTTON_CLASS__ } from './common/keys';
import type { CarouselArrowButtonElement, CarouselArrowButtonProps, CarouselArrowButtonRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselArrowButton = forwardRef(function CarouselArrowButton<Element extends CarouselArrowButtonElement>(
	props: CarouselArrowButtonProps<Element>,
	ref: CarouselArrowButtonRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_ARROW_BUTTON_COLOR__,
		colorMode: __DEFAULT_ARROW_BUTTON_COLORMODE__,
		orientation
	} = useCarouselContext();

	const {
		children,
		as = __DEFAULT_CAROUSEL_ARROW_BUTTON_AS__,
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
		<Button
			{...(rest as ButtonProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_ARROW_BUTTON_CLASS__, { [className]: !!className })}
			color={color}
			colorMode={colorMode}
			renderLeft={
				hasIcon && direction === 'left'
					? () => (
							<ButtonIcon
								icon={orientation === 'horizontal' ? 'chevron_left' : 'expand_less'}
								category='filled'
							/>
						)
					: undefined
			}
			renderRight={
				hasIcon && direction === 'right'
					? () => (
							<ButtonIcon
								icon={orientation === 'horizontal' ? 'chevron_right' : 'expand_more'}
								category='filled'
							/>
						)
					: undefined
			}
			isFullWidth={isFullWidth}
		>
			{children
				? children
				: orientation === 'horizontal'
					? direction === 'left'
						? __DEFAULT_CAROUSEL_ARROW_BUTTON_LEFT_LABEL__
						: __DEFAULT_CAROUSEL_ARROW_BUTTON_RIGHT_LABEL__
					: direction === 'left'
						? __DEFAULT_CAROUSEL_ARROW_BUTTON_TOP_LABEL__
						: __DEFAULT_CAROUSEL_ARROW_BUTTON_BOTTOM_LABEL__}
		</Button>
	);
});

// CarouselArrowButton.displayName = 'CarouselArrowButton';

export default CarouselArrowButton;
