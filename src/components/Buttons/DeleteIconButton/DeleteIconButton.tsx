import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { HoverOverlay } from '@components/Overlay/components/HoverOverlay';
import { Tooltip } from '@components/Overlay/components/Tooltip';

import { IconButton, IconButtonIcon } from '../IconButton';

import {
	__DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_DELETE_ICON_BUTTON_LABEL__,
	__DEFAULT_DELETE_ICON_BUTTON_PLACEMENT__
} from './common/constants';
import { __KEYS_DELETE_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	DeleteIconButtonDefaultElement,
	DeleteIconButtonElement,
	DeleteIconButtonProps,
	DeleteIconButtonRef
} from './common/types';

const DeleteIconButton = forwardRef(function DeleteIconButton<
	Element extends DeleteIconButtonElement = DeleteIconButtonDefaultElement
>(props: DeleteIconButtonProps<Element>, ref: DeleteIconButtonRef<Element>): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		hasTooltip = __DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP__,
		label = __DEFAULT_DELETE_ICON_BUTTON_LABEL__,
		placement = __DEFAULT_DELETE_ICON_BUTTON_PLACEMENT__,
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
						className={classNames(__KEYS_DELETE_ICON_BUTTON_CLASS__, { [className]: !!className })}
						aria-label={label}
						color={color}
						colorMode={colorMode}
					>
						<IconButtonIcon icon='delete' category='filled' />
					</IconButton>
				</Tooltip>
			)}
		</HoverOverlay>
	);
});

export default DeleteIconButton;
