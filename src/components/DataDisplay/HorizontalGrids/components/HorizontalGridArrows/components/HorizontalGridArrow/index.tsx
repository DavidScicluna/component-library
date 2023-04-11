import { FC } from 'react';

import { useBoolean } from '@chakra-ui/react';

import IconButton from '../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import Tooltip from '../../../../../../Overlay/Tooltip';

import { HorizontalGridArrowProps } from './types';

const HorizontalGridArrow: FC<HorizontalGridArrowProps> = (props) => {
	const { color, colorMode, direction, isDisabled = false, ...rest } = props;

	const [isHovering, setIsHovering] = useBoolean();

	return (
		<Tooltip
			colorMode={colorMode}
			aria-label={`Scroll ${direction.toLowerCase()} (tooltip)`}
			label={`Scroll ${direction.toLowerCase()}`}
			placement='top'
			isOpen={!isDisabled && isHovering}
			isDisabled={isDisabled}
		>
			<IconButton
				{...rest}
				aria-label={`Scroll ${direction}`}
				color={color}
				colorMode={colorMode}
				isDisabled={isDisabled}
				onMouseEnter={() => setIsHovering.on()}
				onMouseLeave={() => setIsHovering.off()}
			>
				<IconButtonIcon icon={direction === 'left' ? 'arrow_back' : 'arrow_forward'} category='outlined' />
			</IconButton>
		</Tooltip>
	);
};

export default HorizontalGridArrow;
