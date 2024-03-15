import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';

import { Tooltip } from '@components/Overlay';

import { IconButton, IconButtonIcon } from '../IconButton';

import {
	DEFAULT_CLEAR_ICON_BUTTON_AS,
	DEFAULT_CLEAR_ICON_BUTTON_HAS_TOOLTIP,
	DEFAULT_CLEAR_ICON_BUTTON_LABEL,
	DEFAULT_CLEAR_ICON_BUTTON_PLACEMENT
} from './common/constants';
import { useClearIconButtonResponsiveValues } from './common/hooks';
import { KEYS_CLEAR_ICON_BUTTON_CLASS } from './common/keys';
import type { ClearIconButtonElement, ClearIconButtonProps, ClearIconButtonRef } from './common/types';

const ClearIconButton = forwardRef(function ClearIconButton<Element extends ClearIconButtonElement>(
	props: ClearIconButtonProps<Element>,
	ref: ClearIconButtonRef<Element>
): JSX.Element {
	const {
		as = DEFAULT_CLEAR_ICON_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		hasTooltip: hasTooltipProp = DEFAULT_CLEAR_ICON_BUTTON_HAS_TOOLTIP,
		label: labelProp = DEFAULT_CLEAR_ICON_BUTTON_LABEL,
		placement: placementProp = DEFAULT_CLEAR_ICON_BUTTON_PLACEMENT,
		...rest
	} = props;

	const { hasTooltip, label, placement } = useClearIconButtonResponsiveValues({
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
				{...{ rest }} // TODO: Check if this actually works
				as={as}
				ref={ref}
				className={classNames(KEYS_CLEAR_ICON_BUTTON_CLASS, { [className]: !!className })}
				aria-label={label}
				color={color}
				colorMode={colorMode}
			>
				<IconButtonIcon icon='clear' category='filled' />
			</IconButton>
		</Tooltip>
	);
});

// ClearIconButton.displayName = 'ClearIconButton';

export default ClearIconButton;
