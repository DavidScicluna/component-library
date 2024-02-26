import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';

import type { ButtonProps } from '@components/Buttons';
import { Button, ButtonIcon } from '@components/Buttons';

import { useCarouselContext } from '../../common/hooks';
import type { CarouselArrowDirection } from '../../common/types';

import {
	DEFAULT_CAROUSEL_ARROW_BUTTON_AS,
	DEFAULT_CAROUSEL_ARROW_BUTTON_BOTTOM_LABEL,
	DEFAULT_CAROUSEL_ARROW_BUTTON_HAS_ICON,
	DEFAULT_CAROUSEL_ARROW_BUTTON_IS_FULLWIDTH,
	DEFAULT_CAROUSEL_ARROW_BUTTON_LEFT_LABEL,
	DEFAULT_CAROUSEL_ARROW_BUTTON_RIGHT_LABEL,
	DEFAULT_CAROUSEL_ARROW_BUTTON_TOP_LABEL
} from './common/constants';
import { KEYS_CAROUSEL_ARROW_BUTTON_CLASS } from './common/keys';
import type { CarouselArrowButtonElement, CarouselArrowButtonProps, CarouselArrowButtonRef } from './common/types';

const CarouselArrowButton = forwardRef(function CarouselArrowButton<Element extends CarouselArrowButtonElement>(
	props: CarouselArrowButtonProps<Element>,
	ref: CarouselArrowButtonRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_ARROW_BUTTON_COLOR,
		colorMode: DEFAULT_ARROW_BUTTON_COLORMODE,
		orientation
	} = useCarouselContext();

	const {
		children,
		as = DEFAULT_CAROUSEL_ARROW_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_ARROW_BUTTON_COLOR,
		colorMode = DEFAULT_ARROW_BUTTON_COLORMODE,
		direction: d,
		hasIcon: i = DEFAULT_CAROUSEL_ARROW_BUTTON_HAS_ICON,
		isFullWidth = DEFAULT_CAROUSEL_ARROW_BUTTON_IS_FULLWIDTH,
		...rest
	} = props;

	const direction = useGetResponsiveValue<CarouselArrowDirection>(d);
	const hasIcon = useGetResponsiveValue<boolean>(i);

	return (
		<Button
			{...(rest as ButtonProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_ARROW_BUTTON_CLASS, { [className]: !!className })}
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
						? DEFAULT_CAROUSEL_ARROW_BUTTON_LEFT_LABEL
						: DEFAULT_CAROUSEL_ARROW_BUTTON_RIGHT_LABEL
					: direction === 'left'
						? DEFAULT_CAROUSEL_ARROW_BUTTON_TOP_LABEL
						: DEFAULT_CAROUSEL_ARROW_BUTTON_BOTTOM_LABEL}
		</Button>
	);
});

// CarouselArrowButton.displayName = 'CarouselArrowButton';

export default CarouselArrowButton;
