import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { IconButton, IconButtonIcon } from '@components/Buttons/IconButton';
import { HoverOverlay } from '@components/Overlay/components/HoverOverlay';
import { Tooltip } from '@components/Overlay/components/Tooltip';

import { useHorizontalScrollContext } from '../../common/hooks';

import {
	__DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_LEFT_LABEL__,
	__DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_PLACEMENT__,
	__DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_RIGHT_LABEL__
} from './common/constants';
import { __KEYS_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	HorizontalScrollArrowIconButtonDefaultElement,
	HorizontalScrollArrowIconButtonElement,
	HorizontalScrollArrowIconButtonProps,
	HorizontalScrollArrowIconButtonRef
} from './common/types';

// TODO: Create ArrowIconButton
const HorizontalScrollArrowIconButton = forwardRef(function HorizontalScrollArrowIconButton<
	Element extends HorizontalScrollArrowIconButtonElement = HorizontalScrollArrowIconButtonDefaultElement
>(
	props: HorizontalScrollArrowIconButtonProps<Element>,
	ref: HorizontalScrollArrowIconButtonRef<Element>
): ReactElement {
	const { color: __DEFAULT_ARROW_ICON_BUTTON_COLOR__, colorMode: __DEFAULT_ARROW_ICON_BUTTON_COLORMODE__ } =
		useHorizontalScrollContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_ARROW_ICON_BUTTON_COLOR__,
		colorMode = __DEFAULT_ARROW_ICON_BUTTON_COLORMODE__,
		direction,
		hasTooltip = __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_HAS_TOOLTIP__,
		label = direction === 'left'
			? __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_LEFT_LABEL__
			: __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_PLACEMENT__,
		placement = __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_RIGHT_LABEL__,
		...rest
	} = props;

	return (
		<HoverOverlay>
			{(isHovering) => (
				<Tooltip
					// color='gray'
					colorMode={colorMode}
					aria-label={`${label} (tooltip)`}
					label={label}
					placement={placement}
					isOpen={hasTooltip && isHovering}
				>
					<IconButton<Element>
						{...rest}
						ref={ref}
						className={classNames(__KEYS_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_CLASS__, {
							[className]: !!className
						})}
						aria-label={label}
						color={color}
						colorMode={colorMode}
					>
						<IconButtonIcon
							icon={direction === 'left' ? 'chevron_left' : 'chevron_right'}
							category='filled'
						/>
					</IconButton>
				</Tooltip>
			)}
		</HoverOverlay>
	);
});

export default HorizontalScrollArrowIconButton;
