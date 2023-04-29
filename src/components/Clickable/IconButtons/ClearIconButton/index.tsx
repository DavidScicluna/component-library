import { forwardRef, ReactElement } from 'react';

import { useBoolean } from '@chakra-ui/react';

import Tooltip from '../../../Overlay/Tooltip';
import IconButton from '../OriginalIconButton';
import { IconButtonMouseEvent } from '../OriginalIconButton/common/types';
import IconButtonIcon from '../OriginalIconButton/components/IconButtonIcon';

import { ClearIconButtonProps, ClearIconButtonRef } from './common/types';

const ClearIconButton = forwardRef<ClearIconButtonRef, ClearIconButtonProps>(function ClearIconButton(
	props,
	ref
): ReactElement {
	const {
		colorMode,
		'aria-label': aria = 'Clear Button',
		hasTooltip = true,
		label = 'Clear Button',
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

export default ClearIconButton;
