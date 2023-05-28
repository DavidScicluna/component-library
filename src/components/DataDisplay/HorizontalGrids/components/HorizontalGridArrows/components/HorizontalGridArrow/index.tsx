import { FC } from 'react';

import IconButton from '../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import HoverOverlay from '../../../../../../Overlay/HoverOverlay';
import Tooltip from '../../../../../../Overlay/Tooltip';
import { HorizontalGridArrowProps } from '../../common/types';

const HorizontalGridArrow: FC<HorizontalGridArrowProps> = (props) => {
	const { color, colorMode, direction, isDisabled = false, ...rest } = props;

	return (
		<HoverOverlay>
			{({ isHovering }) => (
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
					>
						<IconButtonIcon
							icon={direction === 'left' ? 'arrow_back' : 'arrow_forward'}
							category='outlined'
						/>
					</IconButton>
				</Tooltip>
			)}
		</HoverOverlay>
	);
};

export default HorizontalGridArrow;
