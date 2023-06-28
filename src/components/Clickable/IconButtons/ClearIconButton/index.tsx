import { forwardRef, ReactElement } from 'react';

import HoverOverlay from '../../../Overlay/HoverOverlay';
import Tooltip from '../../../Overlay/Tooltip';
import { useProviderContext } from '../../../Provider/common/hooks';
import IconButton from '../OriginalIconButton';
import { IconButtonMouseEvent } from '../OriginalIconButton/common/types';
import IconButtonIcon from '../OriginalIconButton/components/IconButtonIcon';

import { ClearIconButtonProps, ClearIconButtonRef } from './common/types';

const ClearIconButton = forwardRef<ClearIconButtonRef, ClearIconButtonProps>(
	function ClearIconButton(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		'aria-label': aria = 'Clear Button',
		hasTooltip = true,
		label = 'Clear',
		placement = 'top',
		onClick,
		icon = 'close',
		category = 'filled',
		...rest
	} = props;

	const handleClick = (event: IconButtonMouseEvent): void => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<HoverOverlay>
			{({ isHovering }) => (
				<Tooltip
					color='gray'
					colorMode={colorMode}
					aria-label={`${aria} (tooltip)`}
					label={label}
					placement={placement}
					isOpen={hasTooltip && isHovering}
					isDisabled={!hasTooltip}
				>
					<IconButton
						{...rest}
						ref={ref}
						aria-label={aria}
						color={color}
						colorMode={colorMode}
						onClick={handleClick}
					>
						<IconButtonIcon icon={icon} category={category} />
					</IconButton>
				</Tooltip>
			)}
		</HoverOverlay>
	);
});

export default ClearIconButton;
