import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Tooltip } from '@components/Overlay';

import type { IconButtonProps } from '../IconButton';
import { IconButton, IconButtonIcon } from '../IconButton';

import {
	__DEFAULT_CLOSE_ICON_BUTTON_AS__,
	__DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP__,
	__DEFAULT_CLOSE_ICON_BUTTON_LABEL__,
	__DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT__
} from './common/constants';
import { __KEYS_CLOSE_ICON_BUTTON_CLASS__ } from './common/keys';
import type { CloseIconButtonElement, CloseIconButtonProps, CloseIconButtonRef } from './common/types';

const CloseIconButton = forwardRef(function CloseIconButton<Element extends CloseIconButtonElement>(
	props: CloseIconButtonProps<Element>,
	ref: CloseIconButtonRef<Element>
): JSX.Element {
	const {
		as = __DEFAULT_CLOSE_ICON_BUTTON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		hasTooltip = __DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP__,
		label = __DEFAULT_CLOSE_ICON_BUTTON_LABEL__,
		placement = __DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT__,
		...rest
	} = props;

	return (
		<Tooltip
			colorMode={colorMode}
			aria-label={`${label} (tooltip)`}
			label={label}
			placement={placement}
			isDisabled={!hasTooltip}
		>
			<IconButton
				{...(rest as IconButtonProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(__KEYS_CLOSE_ICON_BUTTON_CLASS__, { [className]: !!className })}
				aria-label={label}
				color={color}
				colorMode={colorMode}
			>
				<IconButtonIcon icon='close' category='filled' />
			</IconButton>
		</Tooltip>
	);
});

// CloseIconButton.displayName = 'CloseIconButton';

export default CloseIconButton;
