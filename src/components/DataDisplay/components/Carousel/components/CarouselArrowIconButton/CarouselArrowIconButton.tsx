import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { IconButton, IconButtonIcon } from '@components/Buttons';
import { Tooltip } from '@components/Overlay';

import { useCarouselContext } from '../../common/hooks';

import {
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_AS,
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_BOTTOM_LABEL,
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LEFT_LABEL,
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT,
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL,
	DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL
} from './common/constants';
import { useCarouselArrowIconButtonResponsiveValues } from './common/hooks';
import { KEYS_CAROUSEL_ARROW_ICON_BUTTON_CLASS } from './common/keys';
import type {
	CarouselArrowIconButtonElement,
	CarouselArrowIconButtonProps,
	CarouselArrowIconButtonRef
} from './common/types';

const CarouselArrowIconButton = forwardRef(function CarouselArrowIconButton<
	Element extends CarouselArrowIconButtonElement
>(props: CarouselArrowIconButtonProps<Element>, ref: CarouselArrowIconButtonRef<Element>): JSX.Element {
	const {
		color: DEFAULT_ARROW_ICON_BUTTON_COLOR,
		colorMode: DEFAULT_ARROW_ICON_BUTTON_COLORMODE,
		orientation
	} = useCarouselContext();

	const {
		as = DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_ARROW_ICON_BUTTON_COLOR,
		colorMode = DEFAULT_ARROW_ICON_BUTTON_COLORMODE,
		direction: directionProp,
		hasTooltip: hasTooltipProp = DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp,
		placement = DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_PLACEMENT,
		...rest
	} = props;

	const { direction, hasTooltip, label } = useCarouselArrowIconButtonResponsiveValues<Element>({
		direction: directionProp as CarouselArrowIconButtonProps<Element>['direction'],
		hasTooltip: hasTooltipProp as CarouselArrowIconButtonProps<Element>['hasTooltip'],
		label: labelProp as CarouselArrowIconButtonProps<Element>['label']
	});

	const DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL = useMemo<string>(() => {
		return orientation === 'horizontal'
			? direction === 'left'
				? DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LEFT_LABEL
				: DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_RIGHT_LABEL
			: direction === 'left'
				? DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_TOP_LABEL
				: DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_BOTTOM_LABEL;
	}, [direction, orientation]);

	return (
		<Tooltip
			colorMode={colorMode}
			aria-label={`${label || DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL} (tooltip)`}
			label={label || DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL}
			placement={placement}
			isDisabled={!hasTooltip}
		>
			<IconButton
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_CAROUSEL_ARROW_ICON_BUTTON_CLASS, { [className]: !!className })}
				aria-label={label || DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_LABEL}
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
