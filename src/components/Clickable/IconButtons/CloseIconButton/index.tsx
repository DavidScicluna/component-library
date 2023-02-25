import { FC } from 'react';

import { useBoolean } from '@chakra-ui/react';

import Tooltip from '../../../Overlay/Tooltip';
import IconButton from '../OriginalIconButton';
import IconButtonIcon from '../OriginalIconButton/components/IconButtonIcon';
import { IconButtonMouseEvent } from '../OriginalIconButton/types';

import { CloseIconButtonProps } from './types';

const CloseIconButton: FC<CloseIconButtonProps> = (props) => {
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
		setIsHovering.off();

		if (onClick) {
			onClick(event);
		}
	};

	const handleMouseEnter = (event: IconButtonMouseEvent): void => {
		setIsHovering.on();

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: IconButtonMouseEvent): void => {
		setIsHovering.off();

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
};

export default CloseIconButton;
