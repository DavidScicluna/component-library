import { FC } from 'react';

import { HStack } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../../../../../../../../common/default/props';
import IconButton from '../../../../../../../../Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from '../../../../../../../../Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import HoverOverlay from '../../../../../../../../Overlay/HoverOverlay';
import Tooltip from '../../../../../../../../Overlay/Tooltip';
import { useDatePickerContext } from '../../../../../../common/hooks';

const PreviousActions: FC = () => {
	const { colorMode = defaultColorMode, dayzed } = useDatePickerContext();
	const { getBackProps, calendars = [] } = dayzed || {};

	return (
		<HStack spacing={0}>
			<HoverOverlay>
				{({ isHovering }) => (
					<Tooltip
						aria-label='Go to previous year (tooltip)'
						colorMode={colorMode}
						isOpen={isHovering}
						placement='top'
						label='Go to previous year'
					>
						<IconButton
							{...(getBackProps ? getBackProps({ calendars, offset: 12 }) : {})}
							aria-label='Go to previous year'
							colorMode={colorMode}
							variant='icon'
						>
							<IconButtonIcon icon='keyboard_double_arrow_left' category='outlined' />
						</IconButton>
					</Tooltip>
				)}
			</HoverOverlay>
			<HoverOverlay>
				{({ isHovering }) => (
					<Tooltip
						aria-label='Go to previous month (tooltip)'
						colorMode={colorMode}
						isOpen={isHovering}
						placement='top'
						label='Go to previous month'
					>
						<IconButton
							{...(getBackProps ? getBackProps({ calendars }) : {})}
							aria-label='Go to previous month'
							colorMode={colorMode}
							variant='icon'
						>
							<IconButtonIcon icon='keyboard_arrow_left' category='outlined' />
						</IconButton>
					</Tooltip>
				)}
			</HoverOverlay>
		</HStack>
	);
};

export default PreviousActions;
