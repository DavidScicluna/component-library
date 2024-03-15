import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { Tooltip } from '@components/Overlay';

import { IconButton, IconButtonIcon } from '../IconButton';

import {
	DEFAULT_DELETE_ICON_BUTTON_AS,
	DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_DELETE_ICON_BUTTON_LABEL,
	DEFAULT_DELETE_ICON_BUTTON_PLACEMENT
} from './common/constants';
import { useDeleteIconButtonResponsiveValues } from './common/hooks';
import { KEYS_DELETE_ICON_BUTTON_CLASS } from './common/keys';
import type { DeleteIconButtonElement, DeleteIconButtonProps, DeleteIconButtonRef } from './common/types';

const DeleteIconButton = forwardRef(function DeleteIconButton<Element extends DeleteIconButtonElement>(
	props: DeleteIconButtonProps<Element>,
	ref: DeleteIconButtonRef<Element>
): JSX.Element {
	const {
		as = DEFAULT_DELETE_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		hasTooltip: hasTooltipProp = DEFAULT_DELETE_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_DELETE_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_DELETE_ICON_BUTTON_PLACEMENT,
		...rest
	} = props;

	const { hasTooltip, label, placement } = useDeleteIconButtonResponsiveValues({
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
				className={classNames(KEYS_DELETE_ICON_BUTTON_CLASS, { [className]: !!className })}
				aria-label={label}
				color={color}
				colorMode={colorMode}
			>
				<IconButtonIcon icon='delete' category='filled' />
			</IconButton>
		</Tooltip>
	);
});

// DeleteIconButton.displayName = 'DeleteIconButton';

export default DeleteIconButton;
