import { forwardRef, ReactElement } from 'react';

import { useBoolean } from '@chakra-ui/react';

import Tooltip from '../../../Overlay/Tooltip';
import IconButton from '../OriginalIconButton';
import { IconButtonMouseEvent } from '../OriginalIconButton/common/types';
import IconButtonIcon from '../OriginalIconButton/components/IconButtonIcon';

import { CloseIconButtonProps, CloseIconButtonRef } from './common/types';

const CloseIconButton = forwardRef<CloseIconButtonRef, CloseIconButtonProps>(function CloseIconButton(
	props,
	ref
): ReactElement {
	const {
		colorMode,
		'aria-label': aria = 'Close Button',
		hasTooltip = true,
		label = 'Close Button',
		placement = 'top',
		onClick,
		onMouseEnter,
		onMouseLeave,
		icon = 'close',
		category = 'filled',
		...rest
	} = props;

	const [isHovering, setIsHovering] = useBoolean();

	const handleClick = (event: IconButtonMouseEvent): void => {
		if (onClick) {
			onClick(event);
		}
	};

	const handleMouseEnter = (event: IconButtonMouseEvent): void => {
		if (hasTooltip) {
			setIsHovering.on();
		}

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: IconButtonMouseEvent): void => {
		if (hasTooltip) {
			setIsHovering.off();
		}

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<Tooltip
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
				colorMode={colorMode}
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<IconButtonIcon icon={icon} category={category} />
			</IconButton>
		</Tooltip>
	);
});

export default CloseIconButton;
