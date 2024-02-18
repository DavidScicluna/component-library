import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import type { IconButtonProps } from '@components/Buttons';
import { IconButton, IconButtonIcon } from '@components/Buttons';
import { Tooltip } from '@components/Overlay';

import { useCarouselContext } from '../../common/hooks';

import {
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_AS__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_BOTTOM_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LEFT_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL__,
	__DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL__
} from './common/constants';
import { useCarouselArrowIconButtonResponsiveValues } from './common/hooks';
import { __KEYS_CAROUSEL_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselArrowIconButtonElement,
	CarouselArrowIconButtonProps,
	CarouselArrowIconButtonRef
} from './common/types';

const CarouselArrowIconButton = forwardRef(function CarouselArrowIconButton<
	Element extends CarouselArrowIconButtonElement
>(props: CarouselArrowIconButtonProps<Element>, ref: CarouselArrowIconButtonRef<Element>): JSX.Element {
	const {
		color: __DEFAULT_ARROW_ICON_BUTTON_COLOR__,
		colorMode: __DEFAULT_ARROW_ICON_BUTTON_COLORMODE__,
		orientation
	} = useCarouselContext();

	const {
		as = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_ARROW_ICON_BUTTON_COLOR__,
		colorMode = __DEFAULT_ARROW_ICON_BUTTON_COLORMODE__,
		direction: directionProp,
		hasTooltip: hasTooltipProp = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP__,
		label: labelProp,
		placement = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT__,
		...rest
	} = props;

	const { direction, hasTooltip, label } = useCarouselArrowIconButtonResponsiveValues<Element>({
		direction: directionProp as CarouselArrowIconButtonProps<Element>['direction'],
		hasTooltip: hasTooltipProp as CarouselArrowIconButtonProps<Element>['hasTooltip'],
		label: labelProp as CarouselArrowIconButtonProps<Element>['label']
	});

	const __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL__ = useMemo<string>(() => {
		return orientation === 'horizontal'
			? direction === 'left'
				? __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LEFT_LABEL__
				: __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL__
			: direction === 'left'
				? __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL__
				: __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_BOTTOM_LABEL__;
	}, [direction, orientation]);

	return (
		<Tooltip
			color='gray'
			colorMode={colorMode}
			aria-label={`${label || __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL__} (tooltip)`}
			label={label || __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL__}
			placement={placement}
			isDisabled={!hasTooltip}
		>
			<IconButton
				{...(rest as IconButtonProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_CAROUSEL_ARROW_ICON_BUTTON_CLASS__, { [className]: !!className })}
				aria-label={label || __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL__}
				color={color}
				colorMode={colorMode}
			>
				<IconButtonIcon
					icon={
						orientation === 'horizontal'
							? direction === 'left'
								? 'chevron_left'
								: 'chevron_right'
							: direction === 'left'
								? 'expand_less'
								: 'expand_more'
					}
					category='filled'
				/>
			</IconButton>
		</Tooltip>
	);
});

// CarouselArrowIconButton.displayName = 'CarouselArrowIconButton';

export default CarouselArrowIconButton;
