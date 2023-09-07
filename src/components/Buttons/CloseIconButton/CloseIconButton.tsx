import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { HoverOverlay } from '@components/Overlay/components/HoverOverlay';
import { Tooltip } from '@components/Overlay/components/Tooltip';

import { IconButton, IconButtonIcon } from '../IconButton';

import {
	__DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_CLOSE_ICON_BUTTON_LABEL__,
	__DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT__
} from './common/constants';
import type {
	CloseIconButtonDefaultElement,
	CloseIconButtonElement,
	CloseIconButtonProps,
	CloseIconButtonRef
} from './common/types';

const CloseIconButton = forwardRef(function CloseIconButton<
	Element extends CloseIconButtonElement = CloseIconButtonDefaultElement
>(props: CloseIconButtonProps<Element>, ref: CloseIconButtonRef<Element>): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		hasTooltip = __DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP__,
		label = __DEFAULT_CLOSE_ICON_BUTTON_LABEL__,
		placement = __DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT__,
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
						className={classNames(`${__DEFAULT_CLASS_PREFIX__}-close-icon-button`, {
							[className]: !!className
						})}
						aria-label={label}
						color={color}
						colorMode={colorMode}
					>
						<IconButtonIcon icon='close' category='filled' />
					</IconButton>
				</Tooltip>
			)}
		</HoverOverlay>
	);
});

export default CloseIconButton;