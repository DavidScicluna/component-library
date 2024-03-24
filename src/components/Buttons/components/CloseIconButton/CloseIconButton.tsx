import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { Tooltip } from '@components/Overlay';

import { IconButton, IconButtonIcon } from '../IconButton';

import {
	DEFAULT_CLOSE_ICON_BUTTON_AS,
	DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_CLOSE_ICON_BUTTON_LABEL,
	DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT
} from './common/constants';
import { useCloseIconButtonResponsiveValues } from './common/hooks';
import { KEYS_CLOSE_ICON_BUTTON_CLASS } from './common/keys';
import type { CloseIconButtonElement, CloseIconButtonProps, CloseIconButtonRef } from './common/types';

const CloseIconButton = forwardRef(function CloseIconButton<Element extends CloseIconButtonElement>(
	props: CloseIconButtonProps<Element>,
	ref: CloseIconButtonRef<Element>
): JSX.Element {
	const {
		as = DEFAULT_CLOSE_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		hasTooltip: hasTooltipProp = DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_CLOSE_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT,
		...rest
	} = props;

	const {
		hasTooltip = DEFAULT_CLOSE_ICON_BUTTON_HAS_TOOLTIP,
		label = DEFAULT_CLOSE_ICON_BUTTON_LABEL,
		placement = DEFAULT_CLOSE_ICON_BUTTON_PLACEMENT
	} = useCloseIconButtonResponsiveValues({
		hasTooltip: hasTooltipProp,
		label: labelProp,
		placement: placementProp
	});

	return (
		<Tooltip
			colorMode={colorMode}
			aria-label={`${label} (tooltip)`}
			label={label}
			placement={placement}
			isDisabled={!hasTooltip}
		>
			<IconButton
				{...{ rest }}
				as={as}
				ref={ref}
				className={classNames(KEYS_CLOSE_ICON_BUTTON_CLASS, { [className]: !!className })}
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
