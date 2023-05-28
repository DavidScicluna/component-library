import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../../../../../../../../common/default/props';
import IconButton from '../../../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import HoverOverlay from '../../../../../../../../Overlay/HoverOverlay';
import Tooltip from '../../../../../../../../Overlay/Tooltip';
import { useDatePickerContext } from '../../../../../../common/hooks';

const NextActions: FC = () => {
	const { colorMode = defaultColorMode, dayzed } = useDatePickerContext();
	const { getForwardProps, calendars = [] } = dayzed || {};

	return (
		<HStack spacing={0}>
			<HoverOverlay>
				{({ isHovering }) => (
					<Tooltip
						aria-label='Go to next month (tooltip)'
						colorMode={colorMode}
						isOpen={isHovering}
						placement='top'
						label='Go to next month'
					>
						<IconButton
							{...(getForwardProps ? getForwardProps({ calendars }) : {})}
							aria-label='Go to next month'
							colorMode={colorMode}
							variant='icon'
						>
							<IconButtonIcon icon='keyboard_arrow_right' category='outlined' />
						</IconButton>
					</Tooltip>
				)}
			</HoverOverlay>
			<HoverOverlay>
				{({ isHovering }) => (
					<Tooltip
						aria-label='Go to next year (tooltip)'
						colorMode={colorMode}
						isOpen={isHovering}
						placement='top'
						label='Go to next year'
					>
						<IconButton
							{...(getForwardProps ? getForwardProps({ calendars, offset: 12 }) : {})}
							aria-label='Go to next year'
							colorMode={colorMode}
							variant='icon'
						>
							<IconButtonIcon icon='keyboard_double_arrow_right' category='outlined' />
						</IconButton>
					</Tooltip>
				)}
			</HoverOverlay>
		</HStack>
	);
};

export default NextActions;
